import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HomePage.css';
import EmployeeLoginForm from './EmployeeLoginForm';
import DriverLoginForm from './DriverLoginForm';
import TransportAuthorityLoginForm from './TransportAuthorityLoginForm';
import ManagerLoginForm from './ManagerLoginForm';

function HomePage() {
    const [activeForm, setActiveForm] = useState(null);

    const handleButtonClick = (formType) => {
        setActiveForm(formType);
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
                </div>
            </Container>
        </div>
    );
}

export default HomePage;
