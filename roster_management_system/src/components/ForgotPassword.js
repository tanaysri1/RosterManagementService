import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './ForgotPassword.css';

function ForgotPassword() {
    const [formData, setFormData] = useState({
        email: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Simulated forgot password logic
        alert(`A reset link has been sent to ${formData.email}`);
    };

    return (
        <Form className="forgot-password-form" onSubmit={handleFormSubmit}>
            <h2>Forgot Password</h2>
            <p>Please enter your email address to reset your password.</p>
            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Reset Password
            </Button>
        </Form>
    );
}

export default ForgotPassword;
