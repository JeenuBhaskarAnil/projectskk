import React, { useState } from 'react';
import axios from 'axios';
import {Routes, Route, useNavigate} from 'react-router-dom';

const AdminLogin = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // const navigate = useNavigate();
  // const Employee = () => {
     
  //     navigate('/employee');
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/admin', {
        username,
        password,
      });
      if (response.status === 200) {
        // If admin login successful, redirect to admin dashboard
        alert("success")
        //history.push('/dashboard');
        window.location.href = '/employee';
        //history.push('/dashboard');
      } else {
        setError('Invalid admin credentials');
      }
    } catch (error) {
      console.error('Admin login error:', error);
      setError('Admin login error. Please try again.');
    }
  };

  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/4062312/pexels-photo-4062312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")', backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw', height: '100vh' }}>
    <div className="login-container">
      <h2>Admin Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default AdminLogin;