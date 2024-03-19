
// import img1 from './img1.jpg';
// import img5 from './img5.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container,Card, Col, Button,Modal} from 'react-bootstrap';  
// import pic from './card_img/web.webp';
// import pic1 from './card_img/aws.webp';
// import pic2 from './card_img/sales.jpg';
// import pic3 from './card_img/pega.png';
// import pic4 from './card_img/flutter.png';
// import pic5 from './card_img/azure1.png';
// import pic6 from './card_img/ui.avif';
// import pic7 from './card_img/cyber.jpg';
// import pic8 from './card_img/ai.avif';
import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import axios from "axios";
import {useEffect} from 'react';
// import mq1 from './images1/mar1.jpg';
// import mq2 from './images1/mar2.png';
// import mq3 from './images1/mar3.png';
// import mq4 from './images1/mar4.png';
// import mq5 from './images1/mar5.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter,faFacebook,faInstagram} from '@fortawesome/free-brands-svg-icons';
import LoginNavBarNavbar from './LoginNavBar';
import '../login.css';

const LoginVisitorForm = () =>{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  



  
    
    const[formdata1,setFormdata1]=useState({
      'name':'',
      'date':'',
      'vehicleNumber':'',
      'contact':'',
      'reason':'',
      'timeIn':''

      
  })//const formdata={'fname':'','lname':''}
  //console.log(formdata)
  const handlesubmit=(e)=>{
      e.preventDefault();
      console.log(formdata1)
      axios.post('http://localhost:5000/addform',{formdata1}).then((result)=>{
         // console.log(result.data)
          // alert(result.data)
          if(result.status === 200){
            alert("success")
            window.location.href = 'actionuser'}
      })


    
  
  };

//console.log(formdata)

  
    return(
      <div className="background-image"style={{ backgroundImage: 'url("https://images7.alphacoders.com/345/thumb-1920-345366.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw', height: '100%' }}>
        <div>
            <LoginNavBarNavbar/>
            
        
        
        
        
        
     



     

    <div className="col-sm-6">
      
      <div className="card" style={{ width: '45vw', height: '100%', margin: '20px' , }}>
        <div className="card-body">
          <form>
            <h4>Visitor Details</h4>
            <br />
            <div className="row mb-4">
              <div className="col-sm-6">
                <label className="form-label" htmlFor="name2">Name</label>
                <input type="text" id="name2" className="form-control" onChange={(e) => setFormdata1({...formdata1, name: e.target.value})} />
              </div>
              <div className="col-sm-6">
                <label className="form-label" htmlFor="email2">Date</label>
                <input type="date" id="email2" className="form-control" onChange={(e) => setFormdata1({...formdata1, date: e.target.value})} />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-sm-6">
                <label className="form-label" htmlFor="course2">Vehicle Number</label>
                <input type="text" id="course2" className="form-control" onChange={(e) => setFormdata1({...formdata1, vehicleNumber: e.target.value})} />
              </div>
              <div className="col-sm-6">
                <label className="form-label" htmlFor="number2">Contact</label>
                <input type="tel" id="number2" className="form-control" onChange={(e) => setFormdata1({...formdata1, contact: e.target.value})} />
              </div>

            </div>

            <div className="mb-4">
              <label className="form-label" htmlFor="number1">Reason</label>
              <input type="text" id="number1" className="form-control" onChange={(e) => setFormdata1({...formdata1, reason: e.target.value})} />
            </div>
            <div className="mb-4">
              <label className="form-label" htmlFor="number1">Time In</label>
              <input type="time" id="number1" className="form-control" onChange={(e) => setFormdata1({...formdata1, timeIn: e.target.value})} />
            </div>

            <button type="button" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
          </form>
        </div>
      </div>
    </div>
    </div>
    </div>
  


    
    

    )
    }

export default LoginVisitorForm;