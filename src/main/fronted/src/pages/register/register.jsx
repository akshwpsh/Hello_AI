import React, {useState} from 'react';
import './register.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const navigate = useNavigate();


    const handleRegister = async (e) => {

        e.preventDefault();
        if (password !== passwordCheck) {
            alert('비밀번호가 일치하지 않습니다.')
            return;
        }
        try {
            const response = await axios.post('http://helloai.kro.kr:8089/register', {
                username,
                email,
                password
            });
           if(response.status === 200){
               alert('회원가입이 완료되었습니다.');
               navigate('/login');
           }
        } catch (error) {
            alert('회원가입에 실패하였습니다.');
        }
    };


    return (
        <div className={'frame-page'}>
            <div className={'inputs'}>
                <div className={'logo'}>
                    HelloAI
                </div>
                <input type={'email'} className={'input'} placeholder={'이메일'}  onChange={(e => setEmail(e.target.value))}/>
                <input type={'text'} className={'input'} placeholder={'닉네임'} onChange={(e => setUsername(e.target.value))}/>
                <input type={'password'} className={'input'} placeholder={'비밀번호'} onChange={(e) => setPassword(e.target.value)}/>
                <input type={'password'} className={'input'} placeholder={'비밀번호 확인'} onChange={(e) => setPasswordCheck(e.target.value)}/>
                <div className={'frame--'} onClick={handleRegister}>
                    <div className={'text--3'}>
                        회원가입
                    </div>
                </div>
                <div className={'text-'} >
                    계정이 있으신가요?&nbsp;&nbsp;<a href={'/login'} className={'link'}>로그인</a>
                </div>
            </div>
        </div>
    );
}

export default Register;