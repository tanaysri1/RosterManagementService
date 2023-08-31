import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './HomePage.css';
import EmployeeLoginForm from './EmployeeLoginForm';
import ForgotPasswordForm from './ForgotPassword';
import SignupForm from './SignUpForm';

function HomePage() {
    const [activeForm, setActiveForm] = useState(null);

    const handleButtonClick = (formName) => {
        setActiveForm(formName);
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
                        <Col md={{ span: 6, offset: 3 }}>
                            {activeForm && (
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
                            )}
                            {!activeForm && (
                                <Button
                                    variant="primary"
                                    className="btn-lg"
                                    onClick={() => handleButtonClick('employee')}
                                >
                                    Login
                                </Button>
                            )}
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default HomePage;
