

// import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';

// import ImageSliderAuto from './ImageSliderAuto';

// import { ImageData } from './images';
// import img1 from './img1.jpg';
// import img5 from './img5.png';
// // import 'bootstrap/dist/css/bootstrap.min.css';  
// // import {Container ,Card, Col, Button} from 'react-bootstrap';  
// // import img1 from './';  

// const App = () => {
//   return (
//     <div>
//     <BrowserRouter>
//       <Navbar />
//     </BrowserRouter>
//     <div className='pic1'>
//     <img src="software.jpg" alt="
//             " style={{height:'400px',width:'100%'}}/>
//        {/* <Container className='p-4'>  
//   <Col md="4">  
//   <Card>  
//   <Card.Img variant="top" src={img1} />  
//   <Card.Body>  
//     <Card.Title>Card Title</Card.Title>  
//     <Card.Text>  
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est  
//     </Card.Text>  
//     <Button variant="primary">Read More</Button>  
//   </Card.Body>  
// </Card>  
//     </Col>  
// </Container>          */}
//     </div>
//     </div>
//   )
// }

// export default App

// import logo from './logo.svg';
// import './App.css';


import { BrowserRouter, Route ,Routes} from 'react-router-dom';
// import ImageSliderAuto from './ImageSliderAuto';

// import { ImageData } from './images';
// import img1 from './img1.jpg';
// import img5 from './img5.jpg';
//import Navbar from './components/Navbar';
// import About from './components/about.js';
// import Webdev from './components/webdev.js';
// import Aws from './aws.js';
// import Salesforce from './salesforce.js';
// import Pega from './pega.js';
// import Flutter from './flutter.js';
// import Azure from './azure.js';
// import UI from './ui.js';
// import Cyber from './cyber.js';
// import AI from './ai.js';
// import Companies from './companies.js';






import Home from './Home.js';
import Actions from './components/action.js';
import Editform from './components/editform.js';
import Employee from './components/employee.js';
import Editemployee from './components/editemployee.js';
import Adminpage from './components/adminpage.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// import AdminLoginForm from './adminlogin.js';
// import Login from './components/Login.js';
import Main from './components/main.js';
import AdminLogin from './components/adminlogin.js';
import Registeration from './components/registeration.js';
import Login from './components/Login.js';
import EmployeeVisit from './components/employeevisit.js';


import React, { useState } from "react";
import Register from './components/register.js';
import MainNavbar from './components/mainnavbar.js';
import LoginVisitorForm from './components/LoginVisitorForm.js';
//import Logout from './components/logout.js';
import ActionUser from './components/actionuser.js';
import Edituser from './components/edituser.js';
















function App() {
  return (
      <> 
      <BrowserRouter>
    
      {/* <Navbar/> */}
      <Routes>
     
     <Route path='/Home' element={<Home />}/>
     
     <Route path='/action' element={<Actions />}/>
     <Route path='/employee' element={<Employee />}/>
     <Route path='/adminpage' element={<Adminpage />}/>
     <Route path='/editemployee/:id' element={<Editemployee />}/>
     <Route path='/editform/:id' element={<Editform />}/>
     <Route path='/navbar' element={<Navbar />}/> 
     <Route path='/mainnavbar' element={<MainNavbar />}/>
     <Route path='/LoginVisitorForm' element={<LoginVisitorForm />}/>
     <Route path='/employeevisit' element={<EmployeeVisit />}/>
     <Route path='/actionuser' element={<ActionUser />}/>
     <Route path='/edituser' element={<Edituser />}/>


     
     {/* <Route path='/login' element={<AdminLoginForm />}/>
     <Route path='/login' element={<Login />}/> */}
      <Route path='/' element={<Main />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/adminlogin' element={<AdminLogin />}/>
      <Route path='/register' element={<Registeration />}/>
      {/* <Route path='/logout' element={<Logout />}/> */}

     
    
    </Routes>
    </BrowserRouter>
          
          {/* <ImageSliderAuto ImageData={ImageData} SlideInterValTime={ 2000}/>
          <>
          <br/>
          <center><h1>Develop a passion for learning.</h1></center>
              <center><h1>If you do,you will never cease to grow</h1></center>
              <br/>
            </>
            <img src={img5} alt='ss' style={{width:"100%"}} />
            <>
            <br/>
            <center><h1 style={{fontFamily:"italic",color:"red"}}>Courses Offering By Coursenest</h1></center>
            <br/>
            </>
          <a target="_blank" href="https://www.linkedin.com/" alt="">

            
   <img
       src={img1}
       alt="Linkedin"
       className="mw3-ns"
       style={{height: "400px", width: "400px", cursor: "pointer"}}
                                
    />
 </a></>
          
         
    
  
      
      

  );
} */}
</>
  )}
  


export default App;