import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DriverHome({ fetchedData }) {
    const [rosterDetails, setRosterDetails] = useState(null); // Initialize as null

    useEffect(() => {
        if (fetchedData.id !== undefined && fetchedData.role === 'driver') {
            fetchRosterDetails();
        }
    }, [fetchedData.id, fetchedData.role]); // Include fetchedData.id and fetchedData.role as dependencies

    const fetchRosterDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/roster/${fetchedData.id}`);
            const rosterData = response.data; // Received data for a single roster entry
            console.log(rosterData);
            setRosterDetails(rosterData);
        } catch (error) {
            console.error('Failed to fetch roster details:', error);
        }
    };

    return (
        <div>
            {rosterDetails ? (
                <div>
                    <h1>Welcome, {fetchedData.username}</h1>
                    <h3>Your Roster Details</h3>
                    <p>Date: {rosterDetails.date}</p>
                    <p>Shift Time: {rosterDetails.shift_time}</p>
                    <p>Pickup Time: {rosterDetails.pickup_time}</p>
                    <p>Drop Time: {rosterDetails.drop_time}</p>
                    <p>Driver Name: {rosterDetails.driver_name}</p>
                    <p>Vehicle Number: {rosterDetails.vehicle_number}</p>
                </div>
            ) : (
                <p>No roster details available.</p>
            )}
        </div>
    );
}

export default DriverHome;
