import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import '../tablestyle.css';

const Adminpage = () => {
    const [project2, setProject2] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:5000/getpro');
                setProject2(response.data.prodata);
                setLoading(false);
            } catch (error) {
                setError('An error occurred while fetching data.');
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);
    const Deletestu2=(id)=>{
        console.log(id)
        axios.delete('http://localhost:5000/deleteuser2/'+id)
        .then(res=>{console.log(res.data.msg)
        alert("data deleted succesfully")
        window.location.reload()
        })
        .catch(err=>{console.log(err)})

    }

    return (
        <>
            <div className="tab_img">
                <center><h2 style={{ color: "#97233F" }}>User Applications</h2></center>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <center>
                        <Table className="bordered-table">
                            <thead>
                                <tr style={{ backgroundColor: "HoneyDew" }} className="cellstyle">
                                    <th>S.NO</th>
                                    <th>Name</th>
                                    <th>Vehicle Number</th>
                                    <th>Contact</th>
                                    <th>Campus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {project2.map((ele, index) => (
                                    <tr style={{ backgroundColor: "Azure" }} key={index}>
                                        <td>{index + 1}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.vehicleNumber}</td>
                                        <td>{ele.contact}</td>
                                        <td>{ele.campus}</td>
                                        <td><button onClick={()=>Deletestu2(ele._id)}>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </center>
                )}
            </div>
        </>
    );
};

export default Adminpage;
