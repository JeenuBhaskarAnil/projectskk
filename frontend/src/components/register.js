
import { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
const Register=()=>{
    
    const[formdata5,setFormdata]=useState({
    'username':'',
    'email':'',
    'password':''
    })
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(formdata5)
        axios.post('http://localhost:5000/registration',formdata5).then((result)=>{
            console.log(result.data)
            
        })
    }
    return(
        <div>
            <h1>User Data</h1>
            <form onSubmit={handlesubmit}>
                <label>username</label>
                <input type="text" name="username" onChange={(e)=>setFormdata({...formdata5,username:e.target.value})} />
                <br/>
                <label>email</label>
                <input type="email" name="email" onChange={(e)=>setFormdata({...formdata5,email:e.target.value})} />
                <br/>
                <br/>
                <lable>password</lable>
                <input type="password" name="password" onChange={(e)=>setFormdata({...formdata5,password:e.target.value})} />
                <br/>
                <br/>
                
                
                <br/>
                <input type="submit" value="submit"/>
                <br/>
              
            </form>
            <Link to="/login" />
        </div>
    )

}
export default Register;