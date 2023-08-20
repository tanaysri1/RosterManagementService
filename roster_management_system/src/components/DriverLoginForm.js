import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './DriverLoginForm.css';
import SignupForm from './SignUpForm'; 
import ForgotPassword from './ForgotPassword';

function DriverLoginForm() {
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
        if (formData.username === 'driver' && formData.password === 'password') {
            alert('Login successful as Driver!');
        } else {
            alert('Invalid username or password');
        }
    };

    const handleButtonClick = (formType) => {
        setActiveForm(formType);
    };

    return (
        <Form className="driver-form" onSubmit={handleFormSubmit}>
            <h2>Login as Driver</h2>
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
            <Button variant="success" type="submit">
                Login as Driver
            </Button>
            <p>
    <Button variant="warning" className="btn-sm" onClick={() => handleButtonClick('SignupForm')}>
        SignUp
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

export default DriverLoginForm;
