import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageClassList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchClassList = async () => {
            const response = await axios.get('/api/faculty/classlist', {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            setStudents(response.data);
        };
        fetchClassList();
    }, []);

    return (
        <div className="container">
            <h2>Class List</h2>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>
                        <p>{student.name}</p>
                        <p>Email: <a href={`mailto:${student.email}`}>{student.email}</a></p>
                        <p>Phone: <a href={`tel:${student.phone}`}>{student.phone}</a></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageClassList;
