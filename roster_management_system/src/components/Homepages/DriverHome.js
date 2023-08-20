import React from 'react';
import { Button } from 'react-bootstrap';

function DriverHome() {
    const handleTodayDetailsClick = () => {
        // Logic to navigate to a page showing today's pickups and drop details
        // You can use react-router-dom to navigate to the appropriate route
    };

    return (
        <div>
            <h2>Welcome, Driver!</h2>
            <p>This is your home page as a driver.</p>
            <Button variant="primary" onClick={handleTodayDetailsClick}>
                View Today's Pickups and Drops
            </Button>
        </div>
    );
}

export default DriverHome;
