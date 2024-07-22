import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ role }) => {
    return (
        <div className="sidebar">
            {role === 'STUDENT' && (
                <ul>
                    <li><Link to="/student/profile">Profile</Link></li>
                    <li><Link to="/student/search">Search Students</Link></li>
                    <li><Link to="/student/advisors">Contact Advisors</Link></li>
                </ul>
            )}
            {role === 'FACULTY_MEMBER' && (
                <ul>
                    <li><Link to="/faculty/classlist">Class List</Link></li>
                    <li><Link to="/faculty/profile">Update Profile</Link></li>
                </ul>
            )}
            {role === 'ADMINISTRATOR' && (
                <ul>
                    <li><Link to="/admin/manage-records">Manage Records</Link></li>
                    <li><Link to="/admin/dashboard">Dashboard</Link></li>
                </ul>
            )}
        </div>
    );
};

export default Sidebar;
