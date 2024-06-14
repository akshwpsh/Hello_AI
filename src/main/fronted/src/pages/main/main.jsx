import React from 'react';
import './main.css';
import Header from "../../components/header/header";
import {useNavigate} from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    const goGemini = () => {
        navigate('/gemini');
    }
    return (
        <div className={'main'}>
            <Header />
            <div className={'group-'}>
                <div className={'text--'}>
                    단어를 외워볼까요?
                </div>
                <div className={'ai'} onClick={goGemini}>
                    <div className={'ai-'}>
                        단어 외우기
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Main;