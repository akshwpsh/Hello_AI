import React from 'react';
import './main.css';
import Header from "../../components/header/header";

const Main = () => {
    return (
        <div className={'main'}>
            <Header />
            <div className={'group-'}>
                <div className={'text--'}>
                    단어를 외워볼까요?
                </div>
                <div className={'ai'}>
                    <div className={'ai-'}>
                        AI 단어!
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Main;