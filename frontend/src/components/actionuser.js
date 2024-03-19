import axios from "axios";
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Table from 'react-bootstrap/Table';
import '../tablestyle.css';

import {Link} from "react-router-dom";
import LoginNavBar from "./LoginNavBar";
//import { Navbar } from "react-bootstrap";
//import Navbar from "./Navbar";
//import LoginNavBar from "./LoginNavBar";

const ActionUser=()=>{
    
    let [project,setProject]=useState([])//let data=[]
    useEffect(()=>{
        axios.get('http://localhost:5000/getproject').then((response)=>{
       console.log(response.data.projectdata);
       setProject(response.data.projectdata);
        });
    },[]);
    const Deletestu=(id)=>{
        console.log(id)
        axios.delete('http://localhost:5000/deleteuser1/'+id)
        .then(res=>{console.log(res.data.msg)
        alert("data deleted succesfully")
        window.location.reload()
        })
        .catch(err=>{console.log(err)})

    }
    return(
<>
<div>
    <LoginNavBar/>
<div className="tab_img">

      <center><h2 style={{color:"#97233F"}}>User Applications</h2></center>
      <center>
        <table className="bordered-table">
     
            <tr style={{backgroundColor:"HoneyDew"}} className="cellstyle">
                <th>S.NO</th>
                <th>Name</th>
                <th>Date</th>
                <th>Vehicle Number</th>
                <th>Contact</th>
                <th>Reason</th>
                <th>TimeIn</th>
                <th colSpan={2}> Actions</th>
             
            </tr>
            
            {project.map((ele,index,arr)=>
            {
             return(
                
                <tr style={{backgroundColor:"Azure"}} key={index}>
                    <td>{index+1}</td>
                    <td>{ele.name}</td>
                    <td>{ele.date}</td>
                    <td>{ele.vehicleNumber}</td>
                    <td>{ele.contact}</td>
                    <td>{ele.reason}</td>
                    <td>{ele.timeIn}</td>
                    <td><Link to={`/editform/${ele._id}`}><button>edit</button></Link></td>
                    <td><button onClick={()=>Deletestu(ele._id)}>Delete</button></td>
                </tr>
             )
            }
            )}
        </table>
        </center>
        </div>
        </div>
</>

    )
}
export default ActionUser;