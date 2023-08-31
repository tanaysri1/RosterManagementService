import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './EmployeeLoginForm.css';
import SignUpForm from './SignUpForm';
import ForgotPassword from './ForgotPassword';
import axios from 'axios';

import EmployeeHome from './Homepages/EmployeeHome';
import ManagerHome from './Homepages/ManagerHome';
import DriverHome from './Homepages/DriverHome';
import TransportHome from './Homepages/TransportHome';

function EmployeeLoginForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [activeForm, setActiveForm] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [fetchedData, setFetchedData] = useState([]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/login', formData);
            const { data } = response;
            
            setUserRole(data.role);
            console.log(data);
            console.log('Login successful. Role:', data.role );
            console.log('id =' , data.id);
            setFetchedData(data);
        } catch (error) {
            console.error('Login failed:', error.response);
        }
    };

    const renderHomePage = () => {
        if (userRole === 'employee') {
            return <EmployeeHome fetchedData= {fetchedData} />;
        } else if (userRole === 'manager') {
            return <ManagerHome />;
        } else if (userRole === 'driver') {
            return <DriverHome fetchedData= {fetchedData}/>;
        } else if (userRole === 'Transport') {
            return <TransportHome fetchedData={fetchedData}/>;
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
                            Sign Up
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
    );
}

export default EmployeeLoginForm;
