import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateProfile = () => {
    const [profile, setProfile] = useState({
        officeHours: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await axios.get('/api/faculty/profile', {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            setProfile(response.data);
        };
        fetchProfile();
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put('/api/faculty/profile', profile, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            alert('Profile updated successfully');
        } catch (error) {
            alert('Failed to update profile');
        }
    };

    return (
        <div className="container">
            <h2>Update Profile</h2>
            <form onSubmit={handleUpdate}>
                <div>
                    <label>Office Hours:</label>
                    <input
                        type="text"
                        value={profile.officeHours}
                        onChange={(e) => setProfile({ ...profile, officeHours: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        type="tel"
                        value={profile.phone}
                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateProfile;
