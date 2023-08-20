import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './EmployeeLoginForm.css';
<<<<<<< HEAD
import SignUpForm from './SignUpForm';
import ForgotPassword from './ForgotPassword';
import axios from 'axios';

import EmployeeHome from './Homepages/EmployeeHome';
import ManagerHome from './Homepages/ManagerHome';
import DriverHome from './Homepages/DriverHome';
import TransportHome from './Homepages/TransportHome';
=======
>>>>>>> 2ce06993ddf55553946f9b1a95d9417e689946d9

function EmployeeLoginForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

<<<<<<< HEAD
    const [activeForm, setActiveForm] = useState(null);
    const [userRole, setUserRole] = useState(null);

=======
>>>>>>> 2ce06993ddf55553946f9b1a95d9417e689946d9
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

<<<<<<< HEAD
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/login', formData);
            const { data } = response;
            setUserRole(data.role);
            console.log('Login successful. Role:', data.role);
        } catch (error) {
            console.error('Login failed:', error.response.data);
        }
    };

    const renderHomePage = () => {
        if (userRole === 'employee') {
            return <EmployeeHome />;
        } else if (userRole === 'Manager') {
            return <ManagerHome />;
        } else if (userRole === 'Driver') {
            return <DriverHome />;
        } else if (userRole === 'Transport Authority') {
            return <TransportHome />;
        }

        return null;
    };

    const handleButtonClick = (formType) => {
        setActiveForm(formType);
    };

    return (
        <div>
            {userRole ? (
                <div>{renderHomePage()}</div>
            ) : (
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
                    <p>
                        <Button variant="warning" className="btn-sm" onClick={() => handleButtonClick('SignUpForm')}>
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
            )}
        </div>
=======
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
>>>>>>> 2ce06993ddf55553946f9b1a95d9417e689946d9
    );
}

export default EmployeeLoginForm;
