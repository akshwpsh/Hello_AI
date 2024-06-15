import React, {useEffect, useState} from "react";
import './Gemini.css';
import axios from "axios";
import Header from "../../components/header/header";
import run from '../../utils/gemini';
import {FaStar} from "react-icons/fa";

const Gemini = () => {
    const [loading, setLoading] = useState(false);
    const [wordList, setWordList] = useState([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [showMeaning, setShowMeaning] = useState(false);

    const getWord = async () => {
        const message = getAllWords() +"위 리스트를 제외한 토익 600점이 알아야하는 영어 단어를 50개의 단어와 뜻만 /로 가공할수 있게 말해줘. 반드시 *같은 특수문자와 단어의 번호도 제외해서 제목없이 내용만 말해줘.";
        console.log(message);
        setLoading(true);
        try {
            const aiResponse = await run(message);
            const wordPairs = aiResponse.split('\n').filter(item => item); // 각 단어와 뜻을 분리합니다.

            const wordObj = wordPairs.map(item => {
                const [word, meaning] = item.split('/');
                return{
                    word,
                    meaning
                };
            });

            setWordList([...wordList, ...wordObj]); // 기존 단어 리스트에 새로운 단어를 추가합니다.
        } catch (error) {
            console.error('오류 발생!', error);
            alert('오류 발생!');
        } finally {
            setLoading(false);
        }
    }

    const nextWord = async () => {
        if (currentWordIndex < wordList.length - 1) {
            setCurrentWordIndex(currentWordIndex + 1);
            setShowMeaning(false); // 다음 단어로 넘어갈 때 뜻을 숨깁니다.
        } else {
            await getWord();
        }
    }

    const prevWord = () => {
        if(currentWordIndex > 0) {
            setCurrentWordIndex(currentWordIndex - 1);
            setShowMeaning(false); // 이전 단어로 넘어갈 때 뜻을 숨깁니다.
        }
    }


    const showWordMeaning = () => {
        setShowMeaning(!showMeaning); // 뜻을 보여주는 상태를 true로 변경합니다.
    }

    const getAllWords = () => {
        return wordList.map(item => item.word);
    }

    const saveWord = async (word, meaning) => {
        try {
            const response = await axios.post('http://helloai.kro.kr:8089/api/words/save', {
                word,
                meaning
            }, {
                headers: {
                    'Authorization' : `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (response.status === 200) {
                alert('단어가 저장되었습니다.');
            }
        } catch (error) {
            console.error('오류 발생!', error);
            alert('오류 발생!');
        }
    }

    return (
        <div className="gemini-page">
            <Header/>
            <div className={'info'}>

                {loading && <div className="messageWait">답변을 기다리고 있습니다</div>}
                {wordList.length > 0 && !loading && (
                    <div className={'texts'}>
                        <p className={'text'}>단어: {wordList[currentWordIndex].word}</p>
                        <p className={'text'}>뜻: { showMeaning ?  wordList[currentWordIndex].meaning :  '???'}</p> {/* showMeaning 상태가 true일 때만 뜻을 보여줍니다. */}
                    </div>
                )}


                {wordList.length > 0 && !loading && !loading ? (
                    <div>
                        <div className={'buttons'}>
                            <div className={'button'} onClick={() => saveWord(wordList[currentWordIndex].word, wordList[currentWordIndex].meaning)} >
                                <FaStar/> {/* 별 모양 아이콘을 추가합니다. */}
                            </div>
                            <div className={'button'} onClick={prevWord}>
                                <div className={'button_text'}>
                                    이전
                                </div>
                            </div>
                            <div className={'button'} onClick={nextWord}>
                                <div className={'button_text'}>
                                    다음
                                </div>
                            </div>
                        </div>
                        <div className={'buttons'}>
                            <div className={'button'} onClick={showWordMeaning}>
                            <div className={'button_text'}>
                                    {showMeaning ? '뜻 숨기기' : '뜻 보기'}
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                    : (
                        <div className={'button'} onClick={getWord}>
                            <div className={'button_text'}>
                                단어 받기
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
}

export default Gemini;