// import React, { useState } from 'react';
// import axios from 'axios';
// import '../login.css'

// const Login = ({ history }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/login', {
//         username,
//         password,
//       });
//       console.log(response)
//       if (response.status === 200) {
//         alert("success")
//         //history.push('/dashboard');
//         window.location.href = '/dashboard';
//       } else {
//         setError('Invalid credentials');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setError('Login error. Please try again.');
//     }
//   };

//   return (
    
//     <div className="login-container">
      
//       <h2>Login</h2>
//       {error && <p className="error">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import '../login.css';
import'../main.css';
//import backgroundImage from '../path/to/your/image.jpg'; // Import the background image

const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });
      console.log(response)
      if (response.status === 200) {
        alert("success")
        //history.push('/dashboard');
        window.location.href = '/LoginVisitorForm';
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login error. Please try again.');
    }
  };

  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/4062312/pexels-photo-4062312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")', backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw', height: '100vh' }}>
    {/* Your component content here */}
    <div className="login-container" >

      <h2> User Login</h2>
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

export default Login;
