import React from 'react';
import './login.css';

const Login = () => {
    return (
        <div className={'frame-page'}>
            <div className={'inputs'}>
                <div className={'logo'}>
                    HelloAI
                </div>
                <input type={'email'} className={'input'} placeholder={'이메일'}/>
                <input type={'password'} className={'input'} placeholder={'비밀번호'}/>
                <div className={'frame--'}>
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