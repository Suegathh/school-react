import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const base_url = 'https://school1-1.onrender.com';

const Register = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(base_url + '/api/register/', {
      username: formData.username,
      password: formData.password
    })
    .then((res) => {
        console.log(res)
        alert("Registration successful")
        navigate('/login')
    }).catch((err) => {
        console.log(err)
        alert('an error occorred')
    })
  };

  return (
    <div className="container content-section mt-5">
      <h1 className="mb-4">Register</h1>
      <div className="form-area col-md-7 mx-auto p-4 border rounded">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              onChange={handleChange}
              value={formData.username}
              placeholder="Username"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleChange}
              value={formData.confirmPassword}
              placeholder="Confirm Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-info w-100" disabled={false}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
