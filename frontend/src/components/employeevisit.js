
 import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

import '../employee.css';
import '../tablestyle.css';

import Navbar from './Navbar';
import LoginNavBar from './LoginNavBar';

const EmployeeVisit = () => {
    const [project2, setProject2] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://18.214.89.116:5000/getpro');
                setProject2(response.data.prodata);
                setFilteredData(response.data.prodata); // Initialize filteredData with all data
            } catch (error) {
                console.error('An error occurred while fetching data:', error);
            }
        };

        fetchProjects();
    }, []);
    
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
        <div className="background-container" 
        > {/* Added class name */}
            <Navbar />
            <div className=''>
                <center><h2 style={{ color: "#97233F" }}></h2></center>
                <div class="search-container">
                    <input type="text" placeholder="Search..." value={searchInput} onChange={handleSearch} />
                    <i class="fa fa-search"></i>
                </div>
                <Table className="bordered-table1">
                    <thead>
                        <tr style={{ backgroundColor: "black" }} className="cellstyle">
                            <th>S.NO</th>
                            <th>Name</th>
                            <th>Vehicle Number</th>
                            <th>Contact</th>
                            <th>Campus</th>
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
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default EmployeeVisit;
