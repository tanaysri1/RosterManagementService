import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './ManagerLoginForm.css';
import SignUpForm from './SignUpForm';
import ForgotPassword from './ForgotPassword';

function ManagerLoginForm() {
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
        if (formData.username === 'manager' && formData.password === 'password') {
            alert('Login successful as Manager!');
        } else {
            alert('Invalid username or password');
        }
    };

    const handleButtonClick = (formType) => {
        setActiveForm(formType);
    };

    return (
        <Form className="manager-form" onSubmit={handleFormSubmit}>
            <h2>Login as Manager</h2>
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
            <Button variant="warning" type="submit">
                Login as Manager
            </Button>
            <p>
                <Button variant="success" className="btn-sm" onClick={() => handleButtonClick('SignUpForm')}>
                    SignUp
                </Button> |
                <Button variant="warning" className="btn-sm" onClick={() => handleButtonClick('ForgotPassword')}>
                    Forgot Password
                </Button>
                
            </p>
            <div className="mt-4">
                {activeForm === 'SignUpForm' && <SignUpForm />}
                {activeForm === 'ForgotPassword' && <ForgotPassword />}
            </div>
        </Form>
    );
}

export default ManagerLoginForm;
