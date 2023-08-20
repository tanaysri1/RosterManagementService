import React, { useState } from 'react';
<<<<<<< HEAD
import { Container, Row, Col, Button, Card } from 'react-bootstrap'; // Import Card from react-bootstrap
import './HomePage.css';
import EmployeeLoginForm from './EmployeeLoginForm';
import ForgotPasswordForm from './ForgotPassword'; // Create a ForgotPasswordForm component
import SignupForm from './SignUpForm'; // Create a SignupForm component
=======
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HomePage.css';
import EmployeeLoginForm from './EmployeeLoginForm';
import DriverLoginForm from './DriverLoginForm';
import TransportAuthorityLoginForm from './TransportAuthorityLoginForm';
import ManagerLoginForm from './ManagerLoginForm';
>>>>>>> 2ce06993ddf55553946f9b1a95d9417e689946d9

function HomePage() {
    const [activeForm, setActiveForm] = useState(null);

<<<<<<< HEAD
    const handleButtonClick = (formName) => {
        setActiveForm(formName);
=======
    const handleButtonClick = (formType) => {
        setActiveForm(formType);
>>>>>>> 2ce06993ddf55553946f9b1a95d9417e689946d9
    };

    return (
        <div className="bg-light py-5">
            <Container>
                <div className="text-center">
                    <h1 className="display-3">Welcome to Roster Management System</h1>
                    <p className="lead">
                        Efficiently manage employee schedules with our Roster Management System.
                    </p>
                    <Row className="mt-4">
<<<<<<< HEAD
                        <Col md={{ span: 6, offset: 3 }}>
                            {activeForm ? (
                                <Card>
                                    <Card.Body>
                                        {activeForm === 'employee' && <EmployeeLoginForm />}
                                        {activeForm === 'forgotPassword' && <ForgotPasswordForm />}
                                        {activeForm === 'signup' && <SignupForm />}
                                    </Card.Body>
                                    <Card.Footer className="text-muted text-center">
                                        {activeForm !== 'signup' && (
                                            <Button
                                                variant="link"
                                                onClick={() => handleButtonClick('forgotPassword')}
                                            >
                                                Forgot Password?
                                            </Button>
                                        )}
                                        {activeForm !== 'forgotPassword' && (
                                            <Button variant="link" onClick={() => handleButtonClick('signup')}>
                                                Sign Up
                                            </Button>
                                        )}
                                    </Card.Footer>
                                </Card>
                            ) : (
                                <>
                                    <Button
                                        variant="primary"
                                        className="btn-lg"
                                        onClick={() => handleButtonClick('employee')}
                                    >
                                        Login
                                    </Button>
                                </>
                            )}
                        </Col>
                    </Row>
=======
                        <Col md={3}>
                            <Button variant="primary" className="btn-lg" onClick={() => handleButtonClick('employee')}>
                                Employee
                            </Button>
                        </Col>
                        <Col md={3}>
                            <Button variant="success" className="btn-lg" onClick={() => handleButtonClick('driver')}>
                                Driver
                            </Button>
                        </Col>
                        <Col md={3}>
                            <Button variant="info" className="btn-lg" onClick={() => handleButtonClick('transportAuthority')}>
                                Transport Authority
                            </Button>
                        </Col>
                        <Col md={3}>
                            <Button variant="warning" className="btn-lg" onClick={() => handleButtonClick('manager')}>
                                Manager
                            </Button>
                        </Col>
                    </Row>
                    <div className="mt-4">
                        {activeForm === 'employee' && <EmployeeLoginForm />}
                        {activeForm === 'driver' && <DriverLoginForm />}
                        {activeForm === 'transportAuthority' && <TransportAuthorityLoginForm />}
                        {activeForm === 'manager' && <ManagerLoginForm />}
                    </div>
>>>>>>> 2ce06993ddf55553946f9b1a95d9417e689946d9
                </div>
            </Container>
        </div>
    );
}

export default HomePage;
