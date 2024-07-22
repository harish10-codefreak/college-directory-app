import React, { useState } from 'react';
import axios from 'axios';

const SearchStudents = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const response = await axios.get(`/api/student/search?term=${searchTerm}`, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        setResults(response.data);
    };

    return (
        <div className="container">
            <h2>Search Students</h2>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by name, department, or year"
                />
                <button type="submit">Search</button>
            </form>
            <ul>
                {results.map((student) => (
                    <li key={student.id}>{student.name} - {student.department} - {student.year}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchStudents;
