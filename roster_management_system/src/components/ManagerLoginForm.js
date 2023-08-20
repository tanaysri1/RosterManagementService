import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './ManagerLoginForm.css';
<<<<<<< HEAD
import SignUpForm from './SignUpForm';
import ForgotPassword from './ForgotPassword';
=======
>>>>>>> 2ce06993ddf55553946f9b1a95d9417e689946d9

function ManagerLoginForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

<<<<<<< HEAD
    const [activeForm, setActiveForm] = useState(null);

=======
>>>>>>> 2ce06993ddf55553946f9b1a95d9417e689946d9
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

<<<<<<< HEAD
    const handleButtonClick = (formType) => {
        setActiveForm(formType);
    };

=======
>>>>>>> 2ce06993ddf55553946f9b1a95d9417e689946d9
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
<<<<<<< HEAD
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
=======
>>>>>>> 2ce06993ddf55553946f9b1a95d9417e689946d9
        </Form>
    );
}

export default ManagerLoginForm;
