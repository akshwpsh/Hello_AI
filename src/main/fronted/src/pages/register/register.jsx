import React from 'react';
import './register.css';

const Register = () => {
    const []

    return (
        <div className={'frame-page'}>
            <div className={'inputs'}>
                <div className={'logo'}>
                    HelloAI
                </div>
                <input type={'email'} className={'input'} placeholder={'이메일'}/>
                <input type={'text'} className={'input'} placeholder={'닉네임'}/>
                <input type={'password'} className={'input'} placeholder={'비밀번호'}/>
                <input type={'password'} className={'input'} placeholder={'비밀번호 확인'}/>
                <div className={'frame--'}>
                    <div className={'text--3'}>
                        회원가입
                    </div>
                </div>
                <div className={'text-'}>
                    계정이 있으신가요?&nbsp;&nbsp;<a href={'/login'} className={'link'}>로그인</a>
                </div>
            </div>
        </div>
    );
}

export default Register;