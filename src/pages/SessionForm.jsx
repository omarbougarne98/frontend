import React, { useState } from 'react';
import axios from 'axios';

const SessionForm = () => {
    const [movie, setMovie] = useState('');
    const [room, setRoom] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token'); 
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                    'Content-Type': 'application/json'
                }
            };  

            const response = await axios.post('http://localhost:8000/api/sessions/', { movie, room, name }, config);

            setSuccess('Session created successfully');
            setMovie('');
            setRoom('');
            setName('');
        } catch (err) {
            setError(err.response?.data || 'Error creating session');
            console.log(err);
        }
    };

    return (
        <div>
            <h2>Create a Session</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Movie</label>
                    <input 
                        type="text" 
                        value={movie} 
                        onChange={(e) => setMovie(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Room</label>
                    <input 
                        type="text" 
                        value={room} 
                        onChange={(e) => setRoom(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Name</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Create Session</button>
            </form>
        </div>
    );
};

export default SessionForm;
