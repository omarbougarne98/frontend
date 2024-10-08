import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const [users, setUsers] = useState([])
    const [email, setEmail] = useState('')
    
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = () => {
        axios.get('http://localhost:8000/api/auth/reg') 
        .then((res) => {
            
        })
        .catch((error) => {
            console.error('Error fetching users:', error);
        });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:8000/api/auth/reg', { email, password }) 
            .then(() => {
                alert('Registration Successful');
                setEmail('');
                setPassword('');
                fetchUsers();
                navigate('/login');
            })
            .catch((error) => {
                console.error('Unable to register user:', error); 
            });
    };
    

  return (
    <div className='w-full h-screen flex'>
        <div className='w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center'>
            <form className='text-center border rounded-lg w-[600px] h-[400px] p-9'
            onSubmit={handleSubmit}>
                <label>Email</label>
                <br />
                <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
                type='text'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
                <br />
                <br />
                 <label>Password</label>
                <br />
                <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />
                
                <button className='w-[200px] h-[50px] border hover:bg-teal-900'
                type='submit'>Sign Up</button>
            </form>
        </div>
        <div className='w-[50%] h-[100%] flex justify-center items-center bg-teal-800'>
            <h2 className='text-3xl text-white'>Sign Up</h2>
        </div>
    </div>
  )
}

export default SignUp