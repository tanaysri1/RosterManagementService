import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './EmployeeLoginForm.css';

function EmployeeLoginForm() {
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
        if (formData.username === 'employee' && formData.password === 'password') {
            alert('Login successful as Employee!');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <Form className="employee-form" onSubmit={handleFormSubmit}>
            <h2>Login as Employee</h2>
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
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
}

export default EmployeeLoginForm;
