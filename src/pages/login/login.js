import React, { useState } from 'react';
import './login.scss';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onUsernameChange = e => {
        setUsername(e.target.value);
    };
    const onPasswordChange = e => {
        setPassword(e.target.value);
    };
    return (
        <div className="login">
            <div className="main">
                <div className="username">
                    <label htmlFor="username">
                        Username：
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="please commit your username"
                            value={username}
                            onChange={onUsernameChange}
                        />
                    </label>
                </div>
                <div className="password">
                    <label htmlFor="password">
                        Password:
                        <input
                            type="text"
                            name="password"
                            id="password"
                            placeholder="please commit your password"
                            value={password}
                            onChange={onPasswordChange}
                        />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Login;
