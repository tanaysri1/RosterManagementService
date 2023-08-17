import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './TransportAuthorityLoginForm.css';

function TransportAuthorityLoginForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
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
        // Simulated login logic
        if (formData.username === 'transportAuthority' && formData.password === 'password') {
            alert('Login successful as Transport Authority!');
        } else {
            alert('Invalid username or password');
        }
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
        </Form>
    );
}

export default TransportAuthorityLoginForm;
