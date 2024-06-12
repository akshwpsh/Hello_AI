import React from "react";
import "./header.css";
import { GoPersonFill } from "react-icons/go";
import {useNavigate} from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    const goAccount = () => {
        navigate('/account');
    };
    return (
        <header>
            <div className={'logo'}>
                HelloAI
            </div>
            <div className={'icon_back'} onClick={goAccount}>
                <GoPersonFill className={'icon'} color={'#FFFFFF'}/>
            </div>
        </header>
    );
};

export default Header;