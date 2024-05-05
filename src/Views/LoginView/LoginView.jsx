import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useAuth } from '../../context/AuthContext';
import styles from './LoginView.module.css'

function LoginView() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const { login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();

        let status = await login({ username, password });
        if (status === 'ok') {
            navigate("/profile");
        }
    };

    return (
        <div className={styles.formContainer}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" disabled={!username || !password}>Login</button>
            </form>
        </div>

    )
}
export default LoginView;