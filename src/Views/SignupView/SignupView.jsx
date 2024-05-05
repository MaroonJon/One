import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useAuth } from '../../context/AuthContext';
import styles from './SignupView.module.css'

function SignupView() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const { signup, login } = useAuth();

    const handleSignup = async (e) => {
        e.preventDefault();

        let status = await signup({ username, password, email, address });
        if (status === 'ok') {
            let loginStatus = await login({ username, password });
            if (loginStatus === 'ok') {
                navigate("/profile");
            }
        }
    };

    return (
        <div className={styles.formContainer}>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor="username">Username*</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password*</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email*</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="address">Addres</label>
                    <input
                        id="address"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <button type="submit" disabled={!username || !password || !email}>Signup</button>
            </form>
        </div>

    )
}
export default SignupView;