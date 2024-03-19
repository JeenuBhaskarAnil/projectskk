
// import { ImageData } from './images';
// import ImageSliderAuto from './ImageSliderAuto';
import './App.css'
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
import Navbar from './components/Navbar';

const Home = () =>{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  



  // const navigateWebdev = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/webdev');
  // };

  // const navigateSalesforce = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/salesforce');
  // };
  // const navigatePega = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/pega');
  // };
  // const navigateFlutter = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/flutter');
  // };
  // const navigateAws = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/aws');
  // };
  // const navigateAzure = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/azure');
  // };
  // const navigateUI = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/ui');
  // };const navigateCyber = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/cyber');
  // };
  // const navigateAI = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/ai');
  // };
    
  //   const[formdata1,setFormdata1]=useState({
  //     'name':'',
  //     'date':'',
  //     'vehicleNumber':'',
  //     'contact':'',
  //     'reason':'',
  //     'timeIn':''

      
  // })//const formdata={'fname':'','lname':''}
  //console.log(formdata)
  // const handlesubmit=(e)=>{
  //     e.preventDefault();
  //     console.log(formdata1)
  //     axios.post('http://localhost:5000/addform',{formdata1}).then((result)=>{
  //        // console.log(result.data)
  //         // alert(result.data)
  //         if(result.status === 200){
  //           alert("success")
  //           window.location.href = 'action'}
  //     })


    
  
  // };

  const[formdata2,setFormdata2]=useState({
    'name':'',
   
    'vehicleNumber':'',
    'contact':'',
    'campus':''

    
})//const formdata={'fname':'','lname':''}
//console.log(formdata)
const handlesubmit2=(e)=>{
    e.preventDefault();
    console.log(formdata2)
    axios.post('http://localhost:5000/addemployee',{formdata2}).then((result)=>{
       // console.log(result.data)
        // alert(result.data.pro)
        if(result.status === 200){
          alert("success")
          window.location.href = 'employee'
        }
    })


  

};

  
    return(
      <div style={{ backgroundImage: `url('https://images7.alphacoders.com/345/thumb-1920-345366.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height:"100%" }}>
     
      <div>
        <Navbar/>
      
        <div >
          
     



      {/* <div className="title" style={{marginTop:'20px'}}>
        <center>
        <h4>
            Our Technology Partners
        </h4>
        </center>
    </div> */}
    
    {/* <form >
        <div class="form-outline mb-4">
        <label class="form-label" for="name2">Name</label>
                        <input type="text" id="name2" class="form-control" onChange={(e)=>setFormdata1({...formdata1,name:e.target.value})} />
                       
                    </div>

                    <div class="form-outline mb-4">
                    <label class="form-label" for="email2">Email address</label>
                        <input type="email" id="email2" class="form-control" onChange={(e)=>setFormdata1({...formdata1,email:e.target.value})}/>
                        
                    </div>

            
                    <div class="form-outline mb-4">
                    <label class="form-label" for="course2">Course Selected</label>
                        <input type="text" id="course2" class="form-control" onChange={(e)=>setFormdata1({...formdata1,course:e.target.value})}/>
                        
                    </div>

                    <div class="form-outline mb-4">
                    <label class="form-label" for="number2">Phone Number</label>
                        <input type="tel" id="number2" class="form-control" onChange={(e)=>setFormdata1({...formdata1,phonenumber:e.target.value})}/>

                      <Button variant="primary"  onClick={handlesubmit}>
          submit
          </Button>    
                    </div>
                  
             
                    
                    </form>   */}
       {/* <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
      <form >
        <div class="form-outline mb-4">
        <label class="form-label" for="name2">Name</label>
                        <input type="text" id="name2" class="form-control" onChange={(e)=>setFormdata1({...formdata1,name:e.target.value})} />
                       
                    </div>

                    <div class="form-outline mb-4">
                    <label class="form-label" for="email2">Email address</label>
                        <input type="email" id="email2" class="form-control" onChange={(e)=>setFormdata1({...formdata1,email:e.target.value})}/>
                        
                    </div>

            
                    <div class="form-outline mb-4">
                    <label class="form-label" for="course2">Course Selected</label>
                        <input type="text" id="course2" class="form-control" onChange={(e)=>setFormdata1({...formdata1,course:e.target.value})}/>
                        
                    </div>

                    <div class="form-outline mb-4">
                    <label class="form-label" for="number2">Phone Number</label>
                        <input type="tel" id="number2" class="form-control" onChange={(e)=>setFormdata1({...formdata1,phonenumber:e.target.value})}/>

                      <Button variant="primary"  onClick={handlesubmit}>
          submit
          </Button>    
                    </div>
                  
             
                    </form>

      </div>
    </div>
  </div>

  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <form >
        <div class="form-outline mb-4">
        <label class="form-label" for="name2">Name</label>
                        <input type="text" id="name2" class="form-control" onChange={(e)=>setFormdata1({...formdata1,name:e.target.value})} />
                       
                    </div>

                    <div class="form-outline mb-4">
                    <label class="form-label" for="email2">Email address</label>
                        <input type="email" id="email2" class="form-control" onChange={(e)=>setFormdata1({...formdata1,email:e.target.value})}/>
                        
                    </div>

            
                    <div class="form-outline mb-4">
                    <label class="form-label" for="course2">Course Selected</label>
                        <input type="text" id="course2" class="form-control" onChange={(e)=>setFormdata1({...formdata1,course:e.target.value})}/>
                        
                    </div>

                    <div class="form-outline mb-4">
                    <label class="form-label" for="number2">Phone Number</label>
                        <input type="tel" id="number2" class="form-control" onChange={(e)=>setFormdata1({...formdata1,phonenumber:e.target.value})}/>

                      <Button variant="primary"  onClick={handlesubmit}>
          submit
          </Button>    
                    </div>
                  
             
                    </form>
      </div>
    </div>
  </div>
</div>
    </div> */}
{/* <div class="container">
  <div class="row">
    <div class="col-md-6 mb-3 mb-md-0">
      <div class="card">
        <div class="card-body">
          <form>
            <h4>Visitor Form</h4>
            <br />
            <div class="mb-4">
              <label class="form-label" for="name1">Name</label>
              <input type="text" id="name1" class="form-control" onChange={(e)=>setFormdata1({...formdata1,name:e.target.value})} />
            </div>

            <div class="mb-4">
              <label class="form-label" for="email1">Email address</label>
              <input type="email" id="email1" class="form-control" onChange={(e)=>setFormdata1({...formdata1,email:e.target.value})}/>
            </div>

            <div class="mb-4">
              <label class="form-label" for="course1">Course Selected</label>
              <input type="text" id="course1" class="form-control" onChange={(e)=>setFormdata1({...formdata1,course:e.target.value})}/>
            </div>

            <div class="mb-4">
              <label class="form-label" for="number1">Phone Number</label>
              <input type="tel" id="number1" class="form-control" onChange={(e)=>setFormdata1({...formdata1,phonenumber:e.target.value})}/>
            </div>

            <button type="button" class="btn btn-primary" onClick={handlesubmit}>Submit</button>
          </form>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <form>
            <h4>Employee Details</h4>
            <br />
            <div class="mb-4">
              <label class="form-label" for="name2">Name</label>
              <input type="text" id="name2" class="form-control" onChange={(e)=>setFormdata1({...formdata1,name:e.target.value})} />
            </div>

            <div class="mb-4">
              <label class="form-label" for="email2">Email address</label>
              <input type="email" id="email2" class="form-control" onChange={(e)=>setFormdata1({...formdata1,email:e.target.value})}/>
            </div>

            <div class="mb-4">
              <label class="form-label" for="course2">Course Selected</label>
              <input type="text" id="course2" class="form-control" onChange={(e)=>setFormdata1({...formdata1,course:e.target.value})}/>
            </div>

            <div class="mb-4">
              <label class="form-label" for="number2">Phone Number</label>
              <input type="tel" id="number2" class="form-control" onChange={(e)=>setFormdata1({...formdata1,phonenumber:e.target.value})}/>
            </div>

            <button type="button" class="btn btn-primary" onClick={handlesubmit}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</div> */}
{/* <div className="container">
  <div className="row">
    <div className="col-sm-6 mb-3 mb-sm-0">
      <div className="card" style={{ width: '100%', height: '100%', margin: '20px' }}>
        <div className="card-body">
          <form>
            <h4>Visitor Form</h4>
            <br />
            <div className="mb-4">
              <label className="form-label" htmlFor="name1">Name</label>
              <input type="text" id="name1" className="form-control" onChange={(e) => setFormdata1({...formdata1, name: e.target.value})} />
            </div>

            <div className="mb-4">
              <label className="form-label" htmlFor="email1">Email address</label>
              <input type="email" id="email1" className="form-control" onChange={(e) => setFormdata1({...formdata1, email: e.target.value})} />
            </div>

            <div className="mb-4">
              <label className="form-label" htmlFor="course1">Course Selected</label>
              <input type="text" id="course1" className="form-control" onChange={(e) => setFormdata1({...formdata1, course: e.target.value})} />
            </div>

            <div className="mb-4">
              <label className="form-label" htmlFor="number1">Phone Number</label>
              <input type="tel" id="number1" className="form-control" onChange={(e) => setFormdata1({...formdata1, phonenumber: e.target.value})} />
            </div>

            <button type="button" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
          </form>
        </div>
      </div>
    </div>

    <div className="col-sm-6">
      <div className="card" style={{ width: '45vw', height: '100%', margin: '20px' }}>
        <div className="card-body">
          <form>
            <h4>Employee Details</h4>
            <br />
            <div className="mb-4">
              <label className="form-label" htmlFor="name2">Name</label>
              <input type="text" id="name2" className="form-control" onChange={(e) => setFormdata1({...formdata1, name: e.target.value})} />
            </div>

            <div className="mb-4">
              <label className="form-label" htmlFor="email2">Email address</label>
              <input type="email" id="email2" className="form-control" onChange={(e) => setFormdata1({...formdata1, email: e.target.value})} />
            </div>

            <div className="mb-4">
              <label className="form-label" htmlFor="course2">Course Selected</label>
              <input type="text" id="course2" className="form-control" onChange={(e) => setFormdata1({...formdata1, course: e.target.value})} />
            </div>

            <div className="mb-4">
              <label className="form-label" htmlFor="number2">Phone Number</label>
              <input type="tel" id="number2" className="form-control" onChange={(e) => setFormdata1({...formdata1, phonenumber: e.target.value})} />
            </div>

            <button type="button" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
          </form>
         
        </div>
      </div>
    </div>
  </div>
</div>
</div> */}
{/* <div className="container">
  <div className="row">
    <div className="col-sm-6 mb-3 mb-sm-0">
      <div className="card" style={{ width: '100%', height: '100%', margin: '20px' }}>
        <div className="card-body">
          <form>
            <h4>Visitor Form</h4>
            <br /> */}
            {/* Visitor form fields */}
          {/* </form>
        </div>
      </div>
    </div>

    <div className="col-sm-6">
      <div className="card" style={{ width: '45vw', height: '100%', margin: '20px' }}>
        <div className="card-body">
          <form>
            <h4>Employee Details</h4>
            <br />
            <div className="row mb-4">
              <div className="col-sm-6">
                <label className="form-label" htmlFor="name2">Name</label>
                <input type="text" id="name2" className="form-control" onChange={(e) => setFormdata1({...formdata1, name: e.target.value})} />
              </div>
              <div className="col-sm-6">
                <label className="form-label" htmlFor="email2">Email address</label>
                <input type="email" id="email2" className="form-control" onChange={(e) => setFormdata1({...formdata1, email: e.target.value})} />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-sm-6">
                <label className="form-label" htmlFor="course2">Course Selected</label>
                <input type="text" id="course2" className="form-control" onChange={(e) => setFormdata1({...formdata1, course: e.target.value})} />
              </div>
              <div className="col-sm-6">
                <label className="form-label" htmlFor="number2">Phone Number</label>
                <input type="tel" id="number2" className="form-control" onChange={(e) => setFormdata1({...formdata1, phonenumber: e.target.value})} />
              </div>
            </div>
            <button type="button" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</div> */}
<div className="container">
  <div className="row">
    <div className="col-sm-6 mb-3 mb-sm-0">
      <div className="card" style={{ width: '100%', height: '550px', margin: '20px' }}>
        <div className="card-body">
          <form>
            <h5 style={{fontFamily:"Roboto",fontWeight:"bold"}}>Employee Form</h5>
            
            <div className="mb-4">
              <label className="form-label" htmlFor="name1">Name</label>
          <span>    <input type="text" id="name1" className="form-control" onChange={(e) => setFormdata2({...formdata2, name: e.target.value})} /></span>
            </div>

            <div className="mb-4">
              <label className="form-label" htmlFor="email1">Vehicle Number</label>
              <input type="text" id="email1" className="form-control" onChange={(e) => setFormdata2({...formdata2, vehicleNumber: e.target.value})} />
            </div>

            <div className="mb-4">
              <label className="form-label" htmlFor="course1">Contact</label>
              <input type="tel" id="course1" className="form-control" onChange={(e) => setFormdata2({...formdata2, contact: e.target.value})} />
            </div>

            <div className="mb-4">
              <label className="form-label" htmlFor="number1">Campus</label>
              {/* <input type="select" id="number1" className="form-control" onChange={(e) => setFormdata2({...formdata2, campus: e.target.value})} /> */}
              <select id="number1" className="form-control" onChange={(e) => setFormdata2({...formdata2, campus: e.target.value})}>
  <option value="">Select a campus</option>
  <option value="campus1">Campus 1</option>
  <option value="campus2">Campus 2</option>
  <option value="campus3">Campus 3</option>
  {/* Add more options as needed */}
</select>
            </div>

            <button type="button" className="btn btn-primary" onClick={handlesubmit2}>Submit</button>
          </form>
        </div>
      </div>
    </div>
    </div>

    {/* <div className="col-sm-6">
      <div className="card" style={{ width: '45vw', height: '100%', margin: '20px' }}>
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
                <input type="text" id="email2" className="form-control" onChange={(e) => setFormdata1({...formdata1, date: e.target.value})} />
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
              <input type="text" id="number1" className="form-control" onChange={(e) => setFormdata1({...formdata1, timeIn: e.target.value})} />
            </div>

            <button type="button" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
          </form>
        </div>
      </div>
    </div> */}
  </div>
</div>

    {/* <footer>
        <div class="contact-info">
        <p>Email:   <a href = "mailto:coursenest@gmail.com">coursenest@gmail.com</a></p>
        <p>Phone:+91 7013650557</p>
      
        </div>
        <div className='copyright'>
          <p>&copy;{2023}coursenest.Allrights reserved.</p>
        </div>
        <div className='legal-links'>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        
        <span className='social-icons'>
       
          
            <FontAwesomeIcon icon ={faTwitter}/></span>
            
          
         
           <span className='social-icons1'> <FontAwesomeIcon icon ={faFacebook}/></span>
          
         
           <span  className='social-icons2'> <FontAwesomeIcon icon ={faInstagram}/></span>
          
       
        
      </footer> */}


     </div>
</div>
    )
    }
export default Home;