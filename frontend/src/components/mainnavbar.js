import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faDove } from '@fortawesome/free-solid-svg-icons';


import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../navbar.css'



const MainNavbar = () => {
  return (
  
    <nav className="navbar" style={{backgroundColor:"#003153"}}>
      <div className="container">
      <div className="logo">
      <FontAwesomeIcon icon={faDove} style={{color:"white",height:"40px",width:'60px'}}/>
      <span style={{color:"white",fontSize:'25px'}}>Visitor-Employee Vehicle Application</span>
      {/* <img src="coursenest.png" alt="
            " style={{height:'40px',width:'100px'}}/> */}
     
            </div>
        <div className="nav-elements">
          <ul>
         
            {/* <li>
              <NavLink to="/Home">Home</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/employee">Employee Data</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/companies">Companies</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/about">About</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/action">Visitor Data</NavLink>
            </li> */}
            {/* <li>
            <NavLink to="/">Logout</NavLink>
            

            </li> */}
            
          </ul>
          
        </div>
      </div>
    </nav>
  )
}

export default MainNavbar;