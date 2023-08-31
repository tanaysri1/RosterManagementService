import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './TransportAuthorityLoginForm.css';
import SignupForm from './SignUpForm'; 
import ForgotPassword from "./ForgotPassword";

function TransportAuthorityLoginForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [activeForm, setActiveForm] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Simulated login logic
        if (formData.username === 'transportAuthority' && formData.password === 'password') {
            alert('Login successful as Transport Authority!');
        } else {
            alert('Invalid username or password');
        }
    };

    const handleButtonClick = (formType) => {
        setActiveForm(formType);
    };

    return (
        <Form className="transport-authority-form" onSubmit={handleFormSubmit}>
            <h2>Login as Transport Authority</h2>
            <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
            </Form.Group>
            <Button variant="info" type="submit">
                Login as Transport Authority
            </Button>
            <p>
                <Button variant="success" className="btn-sm" onClick={() => handleButtonClick('SignupForm')}>
                    Sign Up
                </Button> | 
                <Button variant="warning" className="btn-sm" onClick={() => handleButtonClick('ForgotPassword')}>
                    Forgot Password
                </Button>
            </p>
            <div className="mt-4">
                {activeForm === 'SignupForm' && <SignupForm />}
                {activeForm === 'ForgotPassword' && <ForgotPassword />}
            </div>
        </Form>
    );
}

export default TransportAuthorityLoginForm;
