import React from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
    return (
        <div className="container">
            <h2>Student Dashboard</h2>
            <ul>
                <li><Link to="/student/profile">View Profile</Link></li>
                <li><Link to="/student/search">Search Students</Link></li>
                <li><Link to="/student/advisors">Contact Advisors</Link></li>
            </ul>
        </div>
    );
};

export default StudentDashboard;
