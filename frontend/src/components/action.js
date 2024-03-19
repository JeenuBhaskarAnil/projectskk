// import axios from "axios";
// import React,{useState,useEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';  
// import Table from 'react-bootstrap/Table';
// import '../tablestyle.css';
// const Actions=()=>{
//     let [project,setProject]=useState([])//let data=[]
//     useEffect(()=>{
//         axios.get('http://localhost:5000/getproject').then((response)=>{
//        console.log(response.data.projectdata);
//        setProject(response.data.projectdata);
//         });
//     },[]);
//     return(
// <div className="tab_img">

//       <center><h2>User Applications</h2></center>
//         <table align="center" border={5} cellPadding={0} cellSpacing={0} style={{borderCollapse:"collapse"}} className="table table-bordered  ">
       
     
//             <tr>
//                 <th>S.NO</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Course</th>
//                 <th>PhoneNumber</th>
             
//             </tr>
            
//             {project.map((ele,index,arr)=>
//             {
//              return(
                
//                 <tr key={index}>
//                     <td>{index+1}</td>
//                     <td>{ele.name}</td>
//                     <td>{ele.email}</td>
//                     <td>{ele.course}</td>
//                     <td>{ele.phonenumber}</td>
                  
                    
//                 </tr>
//              )
//             }
//             )}
//         </table>
// </div>
//     )
// }
// export default Actions;
import axios from "axios";
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Table from 'react-bootstrap/Table';
import '../tablestyle.css';

import {Link} from "react-router-dom";
//import { Navbar } from "react-bootstrap";
import Navbar from "./Navbar";

const Actions=()=>{
    
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
    <Navbar/>
<div className="tab_img">

      <center><h2 style={{color:"#97233F"}}>Visitor Data</h2></center>
      <center>
        <table className="bordered-table">
     
            <tr style={{backgroundColor:"white"}} className="cellstyle">
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
                
                <tr style={{backgroundColor:"black",color:"white"}} key={index}>
                    <td>{index+1}</td>
                    <td>{ele.name}</td>
                    <td>{ele.date}</td>
                    <td>{ele.vehicleNumber}</td>
                    <td>{ele.contact}</td>
                    <td>{ele.reason}</td>
                    <td>{ele.timeIn}</td>
                    <td><Link to={`/editform/${ele._id}`}><button style={{backgroundColor:"lightblue"}}>edit</button></Link></td>
                    <td><button onClick={()=>Deletestu(ele._id)} style={{backgroundColor:"lightblue"}}>Delete</button></td>
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
export default Actions;