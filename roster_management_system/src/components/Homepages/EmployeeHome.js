import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EmployeeHome({ username }) {
    const [rosterDetails, setRosterDetails] = useState([]);

    useEffect(() => {
        // Fetch employee's roster details from the backend
        fetchRosterDetails();
    }, []);

    const fetchRosterDetails = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/employee/roster');
            setRosterDetails(response.data);
        } catch (error) {
            console.error('Failed to fetch roster details:', error);
        }
    };

    return (
        <div>
            <h1>Welcome, {username}</h1>
            <h3>Your Roster Details</h3>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Shift Time</th>
                        <th>Pick Up Time</th>
                        <th>Drop Time</th>
                        <th>Driver Name</th>
                        <th>Vehicle Number</th>
                    </tr>
                </thead>
                <tbody>
                    {rosterDetails.map((roster, index) => (
                        <tr key={index}>
                            <td>{roster.date}</td>
                            <td>{roster.shiftTime}</td>
                            <td>{roster.pickUpTime}</td>
                            <td>{roster.dropTime}</td>
                            <td>{roster.driverName}</td>
                            <td>{roster.vehicleNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeHome;
