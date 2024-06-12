import React, {useEffect, useState} from "react";
import './Gemini.css';
import Header from "../../components/header/header";
import run from '../../utils/gemini';

const Gemini = () => {
    const [loading, setLoading] = useState(false);
    const [wordList, setWordList] = useState([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [showMeaning, setShowMeaning] = useState(false);


    const getWord = async () => {
        const message = "토익 600점이 알아야하는 영어 단어를 10개의 단어와 뜻만 /로 가공할수 있게 말해줘. *같은 특수문자와 번호도 제외해서 제목없이 내용만 말해줘.";
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

            setWordList(wordObj);
        } catch (error) {
            console.error('오류 발생!', error);
            alert('오류 발생!');
        } finally {
            setLoading(false);
        }
    }

    const nextWord = () => {
        if(currentWordIndex < wordList.length - 1) {
            setCurrentWordIndex(currentWordIndex + 1);
        }
    }

    const showWordMeaning = () => {
        setShowMeaning(!showMeaning); // 뜻을 보여주는 상태를 true로 변경합니다.
    }

    return (
        <div className="gemini-page">
            <Header/>
            <div className={'inputs'}>
                <div className={'logo'}>
                    단어를 외워볼까요?
                </div>
                <div className={'frame--'} onClick={getWord}>
                    <div className={'text--3'}>
                        단어 받기
                    </div>
                </div>
                {loading && <span className="messageWait">답변을 기다리고 있습니다</span>}
                {wordList.length > 0 && !loading && (
                    <div>
                        <p>단어: {wordList[currentWordIndex].word}</p>
                        {showMeaning && <p>뜻: {wordList[currentWordIndex].meaning}</p>} {/* showMeaning 상태가 true일 때만 뜻을 보여줍니다. */}

                        <button onClick={nextWord}>다음</button>
                        <button onClick={showWordMeaning}>뜻 보기</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Gemini;