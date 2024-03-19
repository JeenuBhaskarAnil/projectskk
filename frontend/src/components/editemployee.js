import {useEffect,useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Navbar from './Navbar';
import '../tablestyle.css'

const Editemployee=()=>{
    const[formdata2,setFormdata2]=useState({
        'name':'',
    
        
        'vehicleNumber':'',
        'contact':'',
        'campus':''


        
    })

    const {id}=useParams()
    
    useEffect(()=>{
        axios.get('http://localhost:5000/getprobyid/'+id)
        .then((res)=>{
            console.log(res.data)
            // setFormdata1(res.data.projectdata)
        })
        .catch((err)=>console.log(err))
    },[]);

    
    const handlesubmit=(e)=>{
        e.preventDefault();
        
        axios.put('http://localhost:5000/updateproject2/'+id,{formdata2}).then((result)=>{
           // console.log(result.data)
            // alert(result.data.msg)
            if(result.status === 200){
                alert("success")
                window.location.href = '/employee'}
        })
    }
    return(
        <div className="tab1_img">
            <div>
              <Navbar />
            </div>
            <div className="col-sm-6">
      <div className="card" style={{ width: '45vw', height: '100%', margin: '20px' }}>
        <div className="card-body">
          <form>
            <h4>Edit Employee Details</h4>
            <br />
            <div className="row mb-4">
              <div className="col-sm-6">
                <label className="form-label" htmlFor="name2">Name</label>
                <input type="text" id="name2" className="form-control" onChange={(e) => setFormdata2({...formdata2, name: e.target.value})} />
              </div>
              
            </div>
            <div className="row mb-4">
              <div className="col-sm-6">
                <label className="form-label" htmlFor="course2">Vehicle Number</label>
                <input type="text" id="course2" className="form-control" onChange={(e) => setFormdata2({...formdata2, vehicleNumber: e.target.value})} />
              </div>
              <div className="col-sm-6">
                <label className="form-label" htmlFor="number2">Contact</label>
                <input type="tel" id="number2" className="form-control" onChange={(e) => setFormdata2({...formdata2, contact: e.target.value})} />
              </div>

            </div>

            
            <div className="mb-4">
              <label className="form-label" htmlFor="number1">Campus</label>
              {/* <input type="text" id="number1" className="form-control" onChange={(e) => setFormdata2({...formdata2, campus: e.target.value})} /> */}
              <select id="number1" className="form-control" onChange={(e) => setFormdata2({...formdata2, campus: e.target.value})}>
  <option value="">Select a campus</option>
  <option value="campus1">Campus 1</option>
  <option value="campus2">Campus 2</option>
  <option value="campus3">Campus 3</option>
  {/* Add more options as needed */}
</select>
            </div>

            <button type="button" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
          </form>
        </div>
      </div>
    </div>
        </div>
    )
}
export default Editemployee;
