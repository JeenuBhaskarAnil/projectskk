// import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope,faDove } from '@fortawesome/free-solid-svg-icons';


// import '../navbar.css'



// const Navbar = () => {
//   return (
  
//     <nav className="navbar" style={{backgroundColor:"#003153"}}>
//       <div className="container">
//       <div className="logo">
//       <FontAwesomeIcon icon={faDove} style={{color:"white",height:"40px",width:'60px'}}/>
//       <span style={{color:"white",fontSize:'25px'}}>Visitor-Employee Vehicle Application</span>
//       {/* <img src="coursenest.png" alt="
//             " style={{height:'40px',width:'100px'}}/> */}
     
//             </div>
//         <div className="nav-elements">
//           <ul>
         
//             <li>
//               <NavLink to="/Home">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/employee">Employee Data</NavLink>
//             </li>
//             {/* <li>
//               <NavLink to="/companies">Companies</NavLink>
//             </li> */}
//             {/* <li>
//               <NavLink to="/about">About</NavLink>
//             </li> */}
//             <li>
//               <NavLink to="/action">Visitor Data</NavLink>
//             </li>
//             {/* <li>
//             <NavLink to="/">Logout</NavLink>
            

//             </li> */}
//             <li>
//               <NavLink to="/register">user registeration</NavLink>
//             </li>
            
//           </ul>
          
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar;
// import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faDove } from '@fortawesome/free-solid-svg-icons';
// import '../navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#003153" }}>
//       <div className="container">
//         <div className="logo">
//           <FontAwesomeIcon icon={faDove} style={{ color: "white", height: "40px", width: '60px' }} />
//           <span style={{ color: "white", fontSize: '25px' }}>Visitor-Employee Vehicle Application</span>
//         </div>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/Home">Home</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/employee">Employee Data</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/action">Visitor Data</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/register">User Registration</NavLink>
//             </li>
//             <div className="btn-group">
//               {/* <li className="nav-item">
//                 <NavLink className="btn btn-primary" to="/login">Login</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="btn btn-success" to="/signup">Sign Up</NavLink>
//               </li> */}
//             </div>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar;
// import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faInfoCircle, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
// import '../navbar.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#007bff" }}>
//       <div className="container">
//         <div className="logo">
//           <FontAwesomeIcon icon={faHome} style={{ color: "white", height: "40px", width: '40px' }} />
//           <span style={{ color: "white", fontSize: '25px', marginLeft: '10px' }}>My Website</span>
//         </div>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <NavLink className="nav-link text-red" to="/home">Home</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-red" to="/about">About</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-red" to="/login">Login</NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }


 import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faDove } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'; // Import useState hook
import '../navbar.css';

const Navbar = () => {
  const [activeButton, setActiveButton] = useState(null); // State to track active button

  // Function to handle button click and update active state
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#003153" }}>
      <div className="container">
        <div className="logo">
          <FontAwesomeIcon icon={faDove} style={{ color: "white", height: "40px", width: '60px' }} />
          <span style={{ color: "white", fontSize: '25px' }}>Visitor-Employee Vehicle Application</span>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className={`nav-link ${activeButton === "home" ? "active" : ""}`} to="/Home" onClick={() => handleButtonClick("home")}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${activeButton === "employee" ? "active" : ""}`} to="/employee" onClick={() => handleButtonClick("employee")}>Employee Data</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${activeButton === "action" ? "active" : ""}`} to="/action" onClick={() => handleButtonClick("action")}>Visitor Data</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${activeButton === "register" ? "active" : ""}`} to="/register" onClick={() => handleButtonClick("register")}>Registration</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${activeButton === "logout" ? "active" : ""}`} to="/" onClick={() => handleButtonClick("logout")}>LogOut</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
