// import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope,faDove } from '@fortawesome/free-solid-svg-icons';

// import '../navbar.css'



// const LoginNavBar = () => {
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
         
//             {/* <li>
//               <NavLink to="/action">Home</NavLink>
//             </li> */}
//             <li>
//               <NavLink to="/LoginVisitorForm">Home</NavLink>
//             </li>
//             <li>
            
//               <NavLink to="/employeevisit">
//                 Employee Data</NavLink>
//             </li>
//             {/* <li>
//               <NavLink to="/companies">Companies</NavLink>
//             </li> */}
//             {/* <li>
//               <NavLink to="/about">About</NavLink>
//             </li> */}
//             <li>
//               <NavLink to="/actionuser">Visitor Data</NavLink>
//             </li>
//             {/* <li>
//             <NavLink to="/">Logout</NavLink>
            

//             </li> */}
//             {/* <li>
//               <NavLink to="/LoginVisitorForm">Visitor Form</NavLink>
//             </li> */}
            
//           </ul>
          
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default LoginNavBar;
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faDove } from '@fortawesome/free-solid-svg-icons';
import '../navbar.css';

const LoginNavBar = () => {
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
              <NavLink className="nav-link" to="/LoginVisitorForm">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/employeevisit">Employee Data</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/actionuser">Visitor Data</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Log Out</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default LoginNavBar;
