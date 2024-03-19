// import React, { useState } from 'react';
// import {Link} from 'react-router-dom';
// const Login = () => {
//   const [username, setUsername] = useState('');
 
//   const [password, setPassword] = useState('');
  
  
//   const handleLogin = () => {
//     fetch('http://localhost:5000/addlogin', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     })
//       .then(response => response.json())
//       .then(data => {
      
//         console.log(data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div className="login-container">
//       <center>
//       <h2>Login</h2>
//       <label htmlFor="username">Username:</label>
//       <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
//       <br />
      
//       <label htmlFor="password">Password:</label>
//       <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//       <br />
//       <Link to="/Home" >
//                   <button type="button" onClick={handleLogin}>
//                     Login
//                   </button>
//       </Link>
//       </center>
//     </div>
//   );
// };

// export default Login;
import '../tablestyle.css';
//import MainNavbar from './mainnavbar';
const Mainpage=()=>{
  return(
    <>
    
    <div className='mainimg'>
       
    </div>

    </>
  )
}
export default Mainpage;