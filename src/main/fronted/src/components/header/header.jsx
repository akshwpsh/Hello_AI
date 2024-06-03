import React from "react";
import "./header.css";
import { GoPersonFill } from "react-icons/go";

const Header = () => {
    return (
        <header>
            <div className={'logo'}>
                HelloAI
            </div>
            <div className={'icon_back'}>
                <GoPersonFill className={'icon'} color={'#FFFFFF'}/>
            </div>
        </header>
    );
};

export default Header;