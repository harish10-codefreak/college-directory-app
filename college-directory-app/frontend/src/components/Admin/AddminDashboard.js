import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="container">
            <h2>Admin Dashboard</h2>
            <ul>
                <li><Link to="/admin/manage-records">Manage Records</Link></li>
                <li><Link to="/admin/dashboard">View Dashboard</Link></li>
            </ul>
        </div>
    );
};

export default AdminDashboard;
