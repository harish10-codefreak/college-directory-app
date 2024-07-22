import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentProfile = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await axios.get('/api/student/profile', {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            setProfile(response.data);
        };
        fetchProfile();
    }, []);

    return (
        <div className="container">
            <h2>Profile</h2>
            <div>
                <img src={profile.photo} alt="Profile" />
                <p>Name: {profile.name}</p>
                <p>Email: {profile.email}</p>
                <p>Year: {profile.year}</p>
                <p>Department: {profile.department}</p>
            </div>
        </div>
    );
};

export default StudentProfile;
