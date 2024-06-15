import React, {useState} from 'react';
import './login.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://helloai.kro.kr:8089/login', {
                email,
                password
            });

            const token = response.data;
            if(token === '자격 증명에 실패하였습니다.') {
                alert('로그인에 실패하였습니다.');
                return;
            }
            localStorage.setItem('token', token); // 토큰을 로컬 스토리지에 저장합니다.

            if (response.status === 200) {
                navigate('/');
            }
        } catch (error) {
            alert('로그인에 실패하였습니다.')
        }
    };

    return (
        <div className={'frame-page'}>
            <div className={'inputs'}>
                <div className={'logo'}>
                    HelloAI
                </div>
                <input type={'email'} className={'input'} placeholder={'이메일'} onChange={e => setEmail(e.target.value)}/>
                <input type={'password'} className={'input'} placeholder={'비밀번호'} onChange={e => setPassword(e.target.value)}/>
                <div className={'frame--'} onClick={handleLogin}>
                    <div className={'text--3'}>
                        로그인
                    </div>
                </div>
                <div className={'text-'}>
                    계정이 없으신가요?&nbsp;&nbsp;<a href={'/register'} className={'link'}>회원가입</a>
                </div>
            </div>
        </div>
    );
}

export default Login;