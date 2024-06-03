import React, { useState } from 'react';
import run from '../../utils/gemini';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [loading, setLoading] = useState(false);

    const addMessage = (sender, message) => {
        setMessages(prevMessages => [...prevMessages, { sender, message }]);
    };

    const handleSendMessage = async () => {
        const message = userInput.trim();
        if (message.length === 0) return;

        addMessage('user', message);
        setUserInput('');
        setLoading(true);

        try {
            const aiResponse = await run(message);
            addMessage('bot', aiResponse);
        } catch (error) {
            console.error('오류 발생!', error);
            addMessage('bot', '오류 발생!');
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div id='Chatbot'>
            <h1>인공지능 챗봇</h1>
            <div className='chatDiv'>
                {loading && <span className="messageWait">답변을 기다리고 있습니다</span>}
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {`${msg.sender === 'user' ? '나' : '챗봇'} : ${msg.message}`}
                    </div>
                ))}
            </div>
            <div className='inputDiv'>
                <input
                    type='text' placeholder='메시지를 입력하세요'
                    value={userInput} onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={handleSendMessage}>전송</button>
            </div>
        </div>
    );
};

export default Chatbot;