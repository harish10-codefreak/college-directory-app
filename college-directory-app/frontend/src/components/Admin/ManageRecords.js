import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageRecords = () => {
    const [records, setRecords] = useState([]);
    const [newRecord, setNewRecord] = useState({
        name: '',
        email: '',
        role: 'STUDENT'
    });

    useEffect(() => {
        const fetchRecords = async () => {
            const response = await axios.get('/api/admin/records', {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            setRecords(response.data);
        };
        fetchRecords();
    }, []);

    const handleAddRecord = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/admin/records', newRecord, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            setRecords([...records, response.data]);
            setNewRecord({ name: '', email: '', role: 'STUDENT' });
        } catch (error) {
            alert('Failed to add record');
        }
    };

    const handleDeleteRecord = async (id) => {
        try {
            await axios.delete(`/api/admin/records/${id}`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            setRecords(records.filter(record => record.id !== id));
        } catch (error) {
            alert('Failed to delete record');
        }
    };

    return (
        <div className="container">
            <h2>Manage Records</h2>
            <form onSubmit={handleAddRecord}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={newRecord.name}
                        onChange={(e) => setNewRecord({ ...newRecord, name: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={newRecord.email}
                        onChange={(e) => setNewRecord({ ...newRecord, email: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label>Role:</label>
                    <select
                        value={newRecord.role}
                        onChange={(e) => setNewRecord({ ...newRecord, role: e.target.value })}
                    >
                        <option value="STUDENT">Student</option>
                        <option value="FACULTY_MEMBER">Faculty Member</option>
                        <option value="ADMINISTRATOR">Administrator</option>
                    </select>
                </div>
                <button type="submit">Add Record</button>
            </form>
            <ul>
                {records.map((record) => (
                    <li key={record.id}>
                        <p>{record.name}</p>
                        <p>{record.email}</p>
                        <p>{record.role}</p>
                        <button onClick={() => handleDeleteRecord(record.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageRecords;
