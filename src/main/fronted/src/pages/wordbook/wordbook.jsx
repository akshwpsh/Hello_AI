import React, {useState, useEffect} from 'react';
import './wordbook.css';
import axios from 'axios';
import Header from '../../components/header/header';
import { FaTrash } from 'react-icons/fa';

const Wordbook = () => {

    const [wordList, setWordList] = useState([]);

    useEffect(() => {
        const fetchWordList = async () => {
            try {
                const response = await axios.get('http://helloai.kro.kr:8089/api/words/list', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                console.log(response);
                setWordList(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchWordList();
    },[]);

    const deleteWord = async (id) => {
        try {
            await axios.delete(`http://helloai.kro.kr:8089/api/words/delete/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setWordList(wordList.filter(word => word.id !== id));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={'wordbook'}>
            <Header/>
            <div className={'info'}>
                <div className={'logo'}>
                    단어장
                </div>
                <div className={'itemGroup'}>
                    {wordList.map((wordItem, index) => (
                        <div key={index} className={'wordItem'}>
                            <div className={'content'}>
                                <div className={'info'}>
                                    <div className={'word'}>{wordItem.word}</div>
                                    <div className={'meaning'}>{wordItem.meaning}</div>
                                </div>
                                <div className={'button'} onClick={() => deleteWord(wordItem.id)}>
                                    <FaTrash/>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>


            </div>

        </div>
    );
}
export default Wordbook;