import { Button } from 'antd-mobile';
import React, { useState } from 'react';
import './login.scss';

const Login = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onUsernameChange = e => {
        setUsername(e.target.value);
    };
    const onPasswordChange = e => {
        setPassword(e.target.value);
    };
    const submit = () => {
        props.history.push({ pathname: '/home' });
    };
    return (
        <div className="login">
            <div className="main">
                <div className="username">
                    <label htmlFor="username">
                        <div className="name">Username</div>
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
                        <div className="name">Password</div>
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
                <br />
                <div className="btn">
                    <Button type="primary" onClick={submit}>登陆</Button>
                    <br />
                    <Button type="default">注册</Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
