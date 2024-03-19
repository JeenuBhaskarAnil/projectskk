// 
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Table from 'react-bootstrap/Table';
// import { Link } from "react-router-dom";
// import '../employee.css';
// import '../tablestyle.css';

// import Navbar from './Navbar';
// <Navbar/>
// const Employee = () => {
//     const [project2, setProject2] = useState([]);
//     const [filteredData, setFilteredData] = useState([]);
//     const [searchInput, setSearchInput] = useState('');

//     useEffect(() => {
//         const fetchProjects = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/getpro');
//                 setProject2(response.data.prodata);
//                 setFilteredData(response.data.prodata); // Initialize filteredData with all data
//             } catch (error) {
//                 console.error('An error occurred while fetching data:', error);
//             }
//         };

//         fetchProjects();
//     }, []);
//     const Deletestud=(id)=>{
//         console.log(id)
//         axios.delete('http://localhost:5000/deleteuser2/'+id)
//         .then(res=>{console.log(res.data.msg)
//         alert("data deleted succesfully")
//         window.location.reload()
//         })
//         .catch(err=>{console.log(err)})

//     }

//     const handleSearch = (e) => {
//         const input = e.target.value.toLowerCase();
//         setSearchInput(input);
//         const filtered = project2.filter(ele => {
//             return ele.name.toLowerCase().includes(input) || 
//                    ele.vehicleNumber.toLowerCase().includes(input) ||
//                    ele.contact.toLowerCase().includes(input) ||
//                    ele.campus.toLowerCase().includes(input);
//         });
//         setFilteredData(filtered);
//     };
    

//     return (
        
//         <div className="tab_img">
//             <div>
//     <Navbar/>
// </div>
//             <center><h2 style={{ color: "#97233F" }}>Employee Data</h2></center>
//             {/* <div class="search-container">
//     <input type="text" placeholder="Search..."  value={searchInput}
//                 onChange={handleSearch} />
//     <button type="submit"><i class="fa fa-search"></i></button>
// </div> */}

// <div class="search-container">
//     <input type="text" placeholder="Search..." value={searchInput} onChange={handleSearch} />
//     <i class="fa fa-search"></i>
// </div>




//             {/* <input
//                 type="text"
//                 placeholder="Search..."
//                 value={searchInput}
//                 onChange={handleSearch}
//             /> */}
//             <Table className="bordered-table1">
//                 <thead>
//                     <tr style={{ backgroundColor: "HoneyDew" }} className="cellstyle">
//                         <th>S.NO</th>
//                         <th>Name</th>
//                         <th>Vehicle Number</th>
//                         <th>Contact</th>
//                         <th>Campus</th>
//                         <th colSpan={2}>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredData.map((ele, index) => (
//                         <tr style={{ backgroundColor: "Azure" }} key={index}>
//                             <td>{index + 1}</td>
//                             <td>{ele.name}</td>
//                             <td>{ele.vehicleNumber}</td>
//                             <td>{ele.contact}</td>
//                             <td>{ele.campus}</td>
//                             <td><Link to={`/editemployee/${ele._id}`}><button>edit</button></Link></td>
//                             <td><button onClick={() => Deletestud(ele._id)}>Delete</button></td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//         </div>
//     );
// };

// export default Employee;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import '../employee.css';
import '../tablestyle.css';
import Navbar from './Navbar';

const Employee = () => {
    const [project2, setProject2] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:5000/getpro');
                setProject2(response.data.prodata);
                setFilteredData(response.data.prodata); // Initialize filteredData with all data
            } catch (error) {
                console.error('An error occurred while fetching data:', error);
            }
        };

        fetchProjects();
    }, []);

    const Deletestud = (id) => {
        console.log(id)
        axios.delete('http://localhost:5000/deleteuser2/' + id)
            .then(res => {
                console.log(res.data.msg)
                alert("data deleted succesfully")
                window.location.reload()
            })
            .catch(err => { console.log(err) })
    }

    const handleSearch = (e) => {
        const input = e.target.value.toLowerCase();
        setSearchInput(input);
        const filtered = project2.filter(ele => {
            return ele.name.toLowerCase().includes(input) ||
                ele.vehicleNumber.toLowerCase().includes(input) ||
                ele.contact.toLowerCase().includes(input) ||
                ele.campus.toLowerCase().includes(input);
        });
        setFilteredData(filtered);
    };

    return (
        <div className="tab_img">
            <Navbar />
            <center><h2 style={{ color: "#97233F" }}>Employee Data</h2></center>
            <div className="search-container">
                <input type="text" placeholder="Search..." value={searchInput} onChange={handleSearch} />
                <i className="fa fa-search"></i>
            </div>

            <div className="table-responsive">
                <Table className="bordered-table1">
                    <thead>
                        <tr style={{ backgroundColor: "HoneyDew" }} className="cellstyle">
                            <th>S.NO</th>
                            <th>Name</th>
                            <th>Vehicle Number</th>
                            <th>Contact</th>
                            <th>Campus</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((ele, index) => (
                            <tr style={{ backgroundColor: "Azure" }} key={index}>
                                <td>{index + 1}</td>
                                <td>{ele.name}</td>
                                <td>{ele.vehicleNumber}</td>
                                <td>{ele.contact}</td>
                                <td>{ele.campus}</td>
                                <td><Link to={`/editemployee/${ele._id}`}><button>edit</button></Link></td>
                                <td><button onClick={() => Deletestud(ele._id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Employee;

