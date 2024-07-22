import React from 'react';
import { Link } from 'react-router-dom';

const FacultyDashboard = () => {
    return (
        <div className="container">
            <h2>Faculty Dashboard</h2>
            <ul>
                <li><Link to="/faculty/classlist">Manage Class List</Link></li>
                <li><Link to="/faculty/profile">Update Profile</Link></li>
            </ul>
        </div>
    );
};

export default FacultyDashboard;
