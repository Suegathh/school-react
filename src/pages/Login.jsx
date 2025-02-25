import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const base_url = 'https://school1-1.onrender.com';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    axios.post(base_url + '/api/token/', {
      username: formData.username,
      password: formData.password
    })
    .then((res) => {
      console.log(res);
      alert("Login successful");
      localStorage.setItem('access', res.data.access)
      localStorage.setItem('refresh', res.data.refresh)
      navigate('/students');
    })
    .catch((err) => {
      console.log(err);
      alert('An error occurred');
    });
  };

  return (
    <div className="container content-section mt-5">
      <h1 className="mb-4">Login</h1>
      <div className="form-area col-md-5 mx-auto p-4 border rounded">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              onChange={handleChange}
              value={formData.username}
              placeholder="username"
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
          <button type="submit" className="btn btn-primary" disabled={false}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
