import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ManagerHome() {
    const [showAddUserForm, setShowAddUserForm] = useState(false);
    const [showUpdateUserForm, setShowUpdateUserForm] = useState(false);
    const [showAddRosterForm, setShowAddRosterForm] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'employee', // Default role
    });

    const [rosterFormData, setRosterFormData] = useState({
        empid: '',
        date: '',
        drivername: '',
        dropTime: '',
        empName: '',
        pickupTime: '',
        shiftTime: '',
        vehicleNumber: '',
        location: '',
    });

    const handleButtonClick = (buttonName) => {
        if (buttonName === 'addUser') {
            setShowAddUserForm(true);
            setShowUpdateUserForm(false);
            setShowAddRosterForm(false);
        } else if (buttonName === 'updateUser') {
            setShowUpdateUserForm(true);
            setShowAddUserForm(false);
            setShowAddRosterForm(false);
        } else if (buttonName === 'addRoster') {
            setShowAddRosterForm(true);
            setShowAddUserForm(false);
            setShowUpdateUserForm(false);
        } else {
            setShowAddUserForm(false);
            setShowUpdateUserForm(false);
            setShowAddRosterForm(false);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCreateUser = async () => {
        try {
            await axios.post('http://localhost:8080/api/signUp', formData);
            setFormData({
                username: '',
                email: '',
                password: '',
                role: 'employee',
            });
            alert('User created successfully!');
            setShowAddUserForm(false);
        } catch (error) {
            console.error('Failed to create user:', error);
            alert('Failed to create user. Please check your inputs.');
        }
    };

    const handleUpdateUser = async () => {
        try {
            await axios.post(`http://localhost:8080/api/updateUser/${selectedUserId}`, formData);
            setFormData({
                username: '',
                email: '',
                password: '',
                role: 'employee',
            });
            alert('User updated successfully!');
            setShowUpdateUserForm(false);
        } catch (error) {
            console.error('Failed to update user:', error);
            alert('Failed to update user. Please check your inputs.');
        }
    };

    const handleAddRoster = async () => {
        try {
            await axios.post('http://localhost:8080/api/addRoster', rosterFormData);
            setRosterFormData({
                empid: '',
                date: '',
                drivername: '',
                dropTime: '',
                empName: '',
                pickupTime: '',
                shiftTime: '',
                vehicleNumber: '',
                location: '',
            });
            console.log(rosterFormData);
            alert('Roster added successfully!');
            setShowAddRosterForm(false);
        } catch (error) {
            console.error('Failed to add roster:', error);
            alert('Failed to add roster. Please check your inputs.');
        }
    };

    return (
        <div>
            <h1>Manager Home</h1>
            <Button variant="primary" onClick={() => handleButtonClick('addUser')}>
                Add User
            </Button>{' '}
            <Button variant="info" onClick={() => handleButtonClick('updateUser')}>
                Update User
            </Button>{' '}
            <Button variant="success" onClick={() => handleButtonClick('addRoster')}>
                Add New Roster
            </Button>{' '}
            <Button variant="warning" onClick={() => handleButtonClick('updateRoster')}>
                Update Roster
            </Button>
            {showAddUserForm && (
                <div>
                    <h2>Create User</h2>
                    <Form>
                        {/* Form for adding user */}
                        <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                placeholder="Username"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Password"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formRole">
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                                as="select"
                                name="role"
                                value={formData.role}
                                onChange={handleInputChange}
                            >
                                <option value="employee">Employee</option>
                                <option value="driver">Driver</option>
                                <option value="manager">Manager</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={handleCreateUser}>
                            Add User
                        </Button>
                    </Form>
                </div>
            )}
            {showUpdateUserForm && (
                <div>
                    <h2>Update User</h2>
                    <Form>
                        {/* Form for updating user */}
                        <Form.Group className="mb-3" controlId="formUsernameUpdate">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                placeholder="Username"
                                required
                            />
                        </Form.Group>
                        {/* ... (similarly add other user update fields) */}
                        <Button variant="primary" type="button" onClick={handleUpdateUser}>
                            Update User
                        </Button>
                    </Form>
                </div>
            )}
            {showAddRosterForm && (
    <div>
        <h2>Add Roster</h2>
        <Form>
            <Form.Group className="mb-3" controlId="formEmpId">
                <Form.Label>Employee ID</Form.Label>
                <Form.Control
                    type="text"
                    name="empid"
                    value={rosterFormData.empid}
                    onChange={(e) => setRosterFormData({ ...rosterFormData, empid: e.target.value })}
                    placeholder="Employee ID"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                    type="date"
                    name="date"
                    value={rosterFormData.date}
                    onChange={(e) => setRosterFormData({ ...rosterFormData, date: e.target.value })}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmpName">
                <Form.Label>Employee Name</Form.Label>
                <Form.Control
                    type="text"
                    name="empName"
                    value={rosterFormData.empName}
                    onChange={(e) => setRosterFormData({ ...rosterFormData, empName: e.target.value })}
                    placeholder="Employee Name"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formShiftTime">
                <Form.Label>Shift Time</Form.Label>
                <Form.Control
                    type="time"
                    name="shiftTime"
                    value={rosterFormData.shiftTime}
                    onChange={(e) => setRosterFormData({ ...rosterFormData, shiftTime: e.target.value })}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control
                    type="text"
                    name="location"
                    value={rosterFormData.location}
                    onChange={(e) => setRosterFormData({ ...rosterFormData, location: e.target.value })}
                    placeholder="Location"
                    required
                />
            </Form.Group>
            <Button variant="primary" type="button" onClick={handleAddRoster}>
                Add Roster
            </Button>
        </Form>
    </div>
)}


        </div>
    );
}

export default ManagerHome;
