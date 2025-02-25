import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Students = () => {
    const [students, setStudents] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [admNumber, setAdmNumber] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const base_url = 'https://school1-1.onrender.com';

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("access")}`
        }
    }

    useEffect(() => {
        axios.get(base_url + '/student/', config)
            .then((res) => {
                console.log(res.data);
                setStudents(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStudent = {
            first_name: firstName,
            last_name: lastName,
            adm_number: admNumber,
            address,
            phone
        };
        console.log('Submitting:', newStudent); 
        axios.post(base_url + '/student/', newStudent, config)
            .then((res) => {
                console.log('Response:', res.data);
                alert('student added')
                setStudents([...students, res.data]);
                // Clear form inputs
                setFirstName('');
                setLastName('');
                setAdmNumber('');
                setAddress('');
                setPhone('');
            })
            .catch((err) => {
                console.log('Error:', err.response ? err.response.data : err.message);
            });
    };

    return (
        <div>
            <h1>Students Page</h1>
            <br />
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Student
            </button>
            {students.map((student, id) => (
                <div key={id} className='card'>
                    <p>Name: {student.first_name} {student.last_name}</p>
                    <p>Address: {student.address}</p>
                    <p>Contact: {student.phone}</p>
                    <p>Admission Number: {student.adm_number}</p>
                </div>
            ))}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add New Student</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="admNumber">Admission Number</label>
                                    <input type="text" className="form-control" id="admNumber" value={admNumber} onChange={(e) => setAdmNumber(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Students;
