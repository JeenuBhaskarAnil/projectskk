import n1 from '../knowmore_img/mm1.avif';
import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container,Card, Col, Button,Modal} from 'react-bootstrap';  
import axios from "axios";
const Webdev = () =>{
   

    
//const formdata={'fname':'','lname':''}
//console.log(formdata)

    return(
        <div style={{backgroundColor:'#F0F8FF'}}>
           <center> <h1>Want to pursue your career as a FullStack Developer?</h1>
           <img src={n1} alt='ss' style={{width:"100%"}} />
        </center>
        <h3 style={{
          marginTop:'10px'
        }}>To become a full stack developer:</h3>
       <p> You’ll need to familiarize yourself with two basic web development concepts
         the front end and the back end.

The front end, also known as client-side or customer-facing side, refers to all the elements of a computer application that users interact with directly. By contrast, the back end encompasses all the behind-the-scenes tech that computes business logic, fulfills user requests, and permanently stores sensitive data.

You can think of the front end as the tip of an iceberg, while the bulk of the unseen back end extends far below the water’s surface.

Front end developers create and optimize visible parts of a website, making components responsive to different viewing environments, such as smartphones, tablets, and desktops. They use client-facing programming languages, like HTML, CSS, and JavaScript, to render an engaging site.

On the other hand, back end development requires programmers to build and refine the internal software that operates a company’s databases, servers, and proprietary software. Back end developers are responsible for creating the pathways to deliver information to and from users who operate front end interfaces.

This is where full stack development comes in. “Full stack” refers to the entirety of a site or application’s front and back end architecture. As you might expect, full stack professionals are capable of addressing both sides of the proverbial equation. </p>  
<h3>Identify the Skills You Need to Learn</h3>
<ul>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
<li>DOM Manipulation</li>
<li>SQL/NoSQL</li>
<li>Object-Oriented Programming</li>
</ul>
<p>
Of course, becoming a full stack developer isn’t as simple as titling yourself one. There are a few mission-critical skills you’ll need to master before sending out those job applications.

So, what does it take to become a full stack developer? Below, we’ll jump into the core competencies you’ll need to succeed.
</p>
<Container>
  <div >
  <iframe src="https://www.youtube.com/embed/dPMk6_HTBq8?si=iWwLK6GxucaOWKYV" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <div style={{marginLeft:'40px'}}>
    <p>However, the development of an efficient and effective website is not an easy task and requires specific skills. These skills are possessed by professionals called web developers who develop the client side as well as the server side of a website. This is known as full stack.</p>
  </div>
</Container>




        </div> 
    )
}
export default Webdev;