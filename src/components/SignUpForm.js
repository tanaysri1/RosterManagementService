import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './SignUpForm.css';
import axios from 'axios';

function SignUpForm() {
    const initialData = {
        username: '',
        email: '',
        password: '',
        role: '',
    };

    const [inputData, setInputData] = useState(initialData);

    const handleSignupInputChange = (e) => {
        const { name, value } = e.target;
        setInputData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSignupFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/signUp', inputData);
            console.log(response);
            window.location.href = '/login';
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <div className="signup-form">
            <h2>Sign Up</h2>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="username"
                value={inputData.username}
                onChange={handleSignupInputChange}
                required
            />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                value={inputData.email}
                onChange={handleSignupInputChange}
                required
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                value={inputData.password}
                onChange={handleSignupInputChange}
                required
            />
            <label htmlFor="role">Role</label>
            <select
                name="role"
                value={inputData.role}
                onChange={handleSignupInputChange}
                required
            >
                <option value="">Select Role</option>
                <option value="employee">Employee</option>
                <option value="driver">Driver</option>
                <option value="transportAuthority">Transport Authority</option>
                <option value="manager">Manager</option>
            </select>
            <Button variant="primary" type="submit" onClick={handleSignupFormSubmit}>
                Sign Up
            </Button>
        </div>
    );
}

export default SignUpForm;
