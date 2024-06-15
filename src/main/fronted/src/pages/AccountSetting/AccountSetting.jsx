import React, {useState, useEffect} from 'react';
import './AccountSetting.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AccountSetting = () => {
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const navigate = useNavigate();
    useEffect(() => {


        const fetchUser = async () => {
            if (!localStorage.getItem('token')) {
                navigate('/login')
                return;
            }
            try {
                const response = await axios.get('http://helloai.kro.kr:8089/me',{
                    headers: {
                        'Authorization' : `Bearer ${localStorage.getItem('token')}`
                    }
                });
                console.log(response);
                setName(response.data.username);
                setEmail(response.data.email);
            } catch (error) {
                console.log(error);
                alert('사용자 정보를 불러오는데 실패하였습니다.');
            }
        };

        fetchUser();
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (password !== passwordCheck) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
        try {
            const response = await axios.post('http://helloai.kro.kr:8089/update', {
                username,
                email,
                password,
            });

            if (response.status === 200) {
                alert('정보 수정이 완료되었습니다.');
                navigate('/');
            }
        } catch (error) {
            alert('정보 수정에 실패하였습니다.')
        }
    }

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            localStorage.removeItem('token');
            window.location.href = '/login';
        } catch (error) {
            alert('로그아웃에 실패하였습니다.')
        }
    }

    return (
        <div className={'frame-page'}>
            <div className={'inputs'}>
                <div className={'logo'}>
                    정보 수정
                </div>
                <input type={'text'} className={'input'} placeholder={'이름'} value={username}
                       onChange={e => setName(e.target.value)}/>
                <input type={'email'} className={'input'} placeholder={'이메일'} value={email} readOnly/>
                <input type={'password'} className={'input'} placeholder={'비밀번호'} value={password}
                       onChange={e => setPassword(e.target.value)}/>
                <input type={'password'} className={'input'} placeholder={'비밀번호 확인'} value={passwordCheck}
                       onChange={e => setPasswordCheck(e.target.value)}/>
                <div className={'frame--'} onClick={handleUpdate}>
                    <div className={'text--3'}>
                        변경하기
                    </div>
                </div>
                <div className={'frame--'} onClick={handleLogout}>
                    <div className={'text--3'}>
                        로그아웃
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountSetting;