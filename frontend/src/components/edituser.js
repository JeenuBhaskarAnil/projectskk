import {useEffect,useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Navbar from './Navbar';
import LoginNavBar from "./LoginNavBar";
const Edituser=()=>{
    const[formdata1,setFormdata1]=useState({
        'name':'',
    
        'date':'',
        'vehicleNumber':'',
        'contact':'',
        'reason':'',
        'timeIn':''


        
    })

    const {id}=useParams()
    
    useEffect(()=>{
        axios.get('http://localhost:5000/getprojectbyid/'+id)
        .then((res)=>{
            console.log(res.data)
            // setFormdata1(res.data.projectdata)
        })
        .catch((err)=>console.log(err))
    },[]);

    
    const handlesubmit=(e)=>{
        e.preventDefault();
        
        axios.put('http://localhost:5000/updateproject/'+id,{formdata1}).then((result)=>{
           // console.log(result.data)
            // alert(result.data.msg)
            if(result.status === 200){
                alert("success")
                window.location.href = '/actionuser'}
        })
    }
    return(
        <div className="tab1_img">
            <div>
              <LoginNavBar />
            </div>
            <div className="col-sm-6">
      <div className="card" style={{ width: '45vw', height: '100%', margin: '20px' }}>
        <div className="card-body">
          <form>
            <h4>Edit Visitor Details</h4>
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
    </div>
        </div>
    )
}
export default Edituser;
