// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../main.css';
// import MainNavbar from './mainnavbar';
// //import backgroundImage from './background.jpg'; // Import your background image

// const Main = () => {
//   return (
//     <div className="background-container">
//       <div>
//       <MainNavbar/>
//     </div>
//       <img src={"https://img.freepik.com/free-photo/gps-system-smart-car_53876-105375.jpg?w=1060&t=st=1710698101~exp=1710698701~hmac=3113a63539663d6e287971ead58b2ddc0d9429329508849a3ed5d9a69eacb7fe"}alt="Background" className="background-image" />
//       <div className="button-container">
//         {/* <Link to="/register" className="button">Registeration</Link> */}
//         <Link to="/login" className="button">UserLogin</Link>
//         <Link to="/adminlogin" className="button">AdminLogin</Link>
//       </div>
//     </div>
//   );
// };

// export default Main;
import React from 'react';
import { Link } from 'react-router-dom';
import MainNavbar from './mainnavbar';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Main = () => {
  return (
    <div className="background-container">
      <div>
        <MainNavbar/>
      </div> 
      <img src={"https://img.freepik.com/free-photo/gps-system-smart-car_53876-105375.jpg?w=1060&t=st=1710698101~exp=1710698701~hmac=3113a63539663d6e287971ead58b2ddc0d9429329508849a3ed5d9a69eacb7fe"} alt="Background" className="background-image" />
      <div className="button-container d-flex justify-content-center">
        <Link to="/login" className="btn btn-primary btn-lg" style={{ backgroundColor: '#77B9D7', color: 'white', borderRadius: '10px', width: "200px", margin: "10px" }}>UserLogin</Link>
        <Link to="/adminlogin" className="btn btn-primary btn-lg" style={{ backgroundColor: '#77B9D7', color: 'white', borderRadius: '10px', width: "200px", margin: "10px" }}>AdminLogin</Link>
      </div>
    </div>
  );
};

export default Main;
