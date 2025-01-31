import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('STUDENT');
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/authenticate', { username, password, role });
            localStorage.setItem('token', response.data.token);
            history.push(`/${role.toLowerCase()}/dashboard`);
        } catch (error) {
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <label>Role:</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="STUDENT">Student</option>
                        <option value="FACULTY_MEMBER">Faculty Member</option>
                        <option value="ADMINISTRATOR">Administrator</option>
                    </select>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
