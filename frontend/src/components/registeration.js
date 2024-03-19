import React, { useState } from 'react';
import axios from 'axios';
import '../registeration.css'
import Navbar from './Navbar';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', {
        username,
        password,
        email,
      });
      if (response.data.success) {
        setUsername('');
        setPassword('');
        setEmail('');

        alert('Registration successful');

        // Redirect to login page or dashboard
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('Registration error. Please try again.');
    }
  };

  return (
    <div style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/car-road-autumn-forest_74190-3005.jpg?t=st=1710831145~exp=1710834745~hmac=53b59f07ed1c43af57b7ba2999627562c8d8a04859a2662ef8890987f7c6be3b&w=826")', backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw', height: '100%' }}>
    
    <div>
    <Navbar/>
    
    

    
    <div className="card">
     
      <div className="card-body">
        <h2 className="card-title">Registration Form</h2>
        {error && <p className="error">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Register;