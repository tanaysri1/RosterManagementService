import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TransportHome() {
    const [rosterDetails, setRosterDetails] = useState(null);
    const [allEmployees, setAllEmployees] = useState([]);
    const [formData, setFormData] = useState({
        empid: '',
        date: '',
        driverName: '',
        pickupTime: '',
        dropTime: '',
        vehicleNumber: '',
        location: '',
        shiftTime: '',
        empName: ''
    });

    useEffect(() => {
        fetchAllEmployees();
    }, []);

    const fetchAllEmployees = async () => {
        try {
            const response = await axios.get('http://localhost:8080/roster/all');
            setAllEmployees(response.data);
        } catch (error) {
            console.error('Failed to fetch all employees:', error);
        }
    };

    const fetchRosterDetails = async (empid) => {
        try {
            const response = await axios.get(`http://localhost:8080/roster/${empid}`);
            const rosterData = response.data;
            setRosterDetails(rosterData);
            setFormData({
                empid: rosterData.empid,
                date: rosterData.date,
                driverName: rosterData.driverName,
                pickupTime: rosterData.pickup_time,
                dropTime: rosterData.drop_time,
                vehicleNumber: rosterData.vehicle_Number,
                location: rosterData.location,
                shiftTime: rosterData.shift_time,
                empName: rosterData.empName
            });
        } catch (error) {
            console.error('Failed to fetch roster details:', error);
        }
    };

    const handleAddRoster = async () => {
        try {
            if (formData.empid) {
                const updatedData = {
                    empid: formData.empid,
                    date: formData.date,
                    driverName: formData.driverName,
                    pickup_time: formData.pickupTime,
                    drop_time: formData.dropTime,
                    vehicle_Number: formData.vehicleNumber,
                    location: formData.location,
                    shift_time: formData.shiftTime,
                    empName: formData.empName
                };

                const response = await axios.put(`http://localhost:8080/roster/update/${formData.empid}`, updatedData);
                console.log('Roster updated successfully:', response.data);
            } else {
                const response = await axios.post('http://localhost:8080/roster/create', formData);
                console.log('Roster added successfully:', response.data);
            }
            fetchAllEmployees();
            setRosterDetails(null);
            setFormData({
                empid: '',
                date: '',
                driverName: '',
                pickupTime: '',
                dropTime: '',
                vehicleNumber: '',
                location: '',
                shiftTime: '',
                empName: ''
            });
        } catch (error) {
            console.error('Failed to update/add roster:', error);
        }
    };

    return (
        <div>
            <h1>Welcome to Transport Home</h1>
            <h2>All Employees</h2>
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Date</th>
                        <th>Shift Time</th>
                        <th>Pickup Time</th>
                        <th>Drop Time</th>
                        <th>Vehicle Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allEmployees.map(employee => (
                        <tr key={employee.empid}>
                            <td>{employee.empid}</td>
                            <td>{employee.date}</td>
                            <td>{employee.shift_time}</td>
                            <td>{employee.pickup_time}</td>
                            <td>{employee.drop_time}</td>
                            <td>{employee.vehicle_Number}</td>
                            <td>
                                <button onClick={() => fetchRosterDetails(employee.empid)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Your Roster Details</h2>
            {rosterDetails ? (
                <div>
                    <p>Employee ID: {rosterDetails.empid}</p>
                    <p>Date: {rosterDetails.date}</p>
                    <p>Shift Time: {rosterDetails.shift_time}</p>
                    <p>Pickup Time: {rosterDetails.pickup_time}</p>
                    <p>Drop Time: {rosterDetails.drop_time}</p>
                    <p>Vehicle Number: {rosterDetails.vehicle_Number}</p>
                </div>
            ) : (
                <p>No roster details available.</p>
            )}
            <h2>Add/Update Roster</h2>
            <form>
                <input
                    type="text"
                    placeholder="Employee ID"
                    value={formData.empid}
                    onChange={(e) => setFormData({ ...formData, empid: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Driver Name"
                    value={formData.driverName}
                    onChange={(e) => setFormData({ ...formData, driverName: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Pickup Time"
                    value={formData.pickupTime}
                    onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Drop Time"
                    value={formData.dropTime}
                    onChange={(e) => setFormData({ ...formData, dropTime: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Vehicle Number"
                    value={formData.vehicleNumber}
                    onChange={(e) => setFormData({ ...formData, vehicleNumber: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Shift Time"
                    value={formData.shiftTime}
                    onChange={(e) => setFormData({ ...formData, shiftTime: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Employee Name"
                    value={formData.empName}
                    onChange={(e) => setFormData({ ...formData, empName: e.target.value })}
                />
                <button type="button" onClick={handleAddRoster}>Add/Update Roster</button>
            </form>
        </div>
    );
}

export default TransportHome;
