import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SessionList = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const token = localStorage.getItem('authToken');
console.log(token); 

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get('http://localhost:8000/api/sessions/', config);
        setSessions(response.data); 
        setLoading(false);
      } catch (err) {
        console.error('Error fetching sessions:', err.response ? err.response.data : err.message);
        setError('Error fetching sessions');
        setLoading(false);
      }
      
    };

    fetchSessions();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Sessions</h2>
      {sessions.length === 0 ? (
        <p>No sessions found.</p>
      ) : (
        <ul>
          {sessions.map((session) => (
            <li key={session._id}>
              <strong>{session.name}</strong> - Movie: {session.movie} - Room: {session.room}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SessionList;
