import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactAdvisors = () => {
    const [advisors, setAdvisors] = useState([]);

    useEffect(() => {
        const fetchAdvisors = async () => {
            const response = await axios.get('/api/student/advisors', {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            setAdvisors(response.data);
        };
        fetchAdvisors();
    }, []);

    return (
        <div className="container">
            <h2>Contact Advisors</h2>
            <ul>
                {advisors.map((advisor) => (
                    <li key={advisor.id}>
                        <p>{advisor.name}</p>
                        <p>Email: <a href={`mailto:${advisor.email}`}>{advisor.email}</a></p>
                        <p>Phone: <a href={`tel:${advisor.phone}`}>{advisor.phone}</a></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactAdvisors;
