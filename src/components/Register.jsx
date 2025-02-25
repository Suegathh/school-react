import React, {useState} from "react";
import { useFormik } from "formik";
import axios from 'axios'
import { data } from "react-router-dom";
import useNavigate from 'react-router-dom'

const Register = () =>{
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()

    const base_url = 'http://127.0.0.1:8000'
    const onSubmit = () =>{
        axios.post(base_url + '/api/register/', {
            'username': values.username,
            'password': values.password
        }).then((res) => {
            console.log(res)
            alert("Registration successful")
            navigate('/login')
        }).catch((err) => {
            console.log(err)
            alert('an error occorred')
        }
        )
    }
    axios.post("url", {
        data
    }).then((resp) => {
        code
    }).catch((err) => {

    })

    const {values, handleChange, handleBlur, handleSubmit, errors} = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit
    })

    return(
        <>
            <div className="container content-section">
                <br/>
                <h1>Register</h1>
                <br />
                <div className="form-area col-md-7">
                    <h3>Register</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="username">User Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                                placeholder="Username"
                                style={errors.username && touched.username ? { borderColor: "#fc8181" } : {}}
                            />
                            {errors.username && touched.username ? <p className="error-message">{errors.username}</p> : ""}
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input
                                type="text"
                                className="form-control"
                                id="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                style={errors.password && touched.password ? { borderColor: "#fc8181" } : {}}
                                placeholder="Password" />
                            {errors.password && touched.password ? <p className="error-message">{errors.password}</p> : ""}
                        </div>
                        <div className="form-group">
                            <label for="confirmPassowrd">Confirm Password</label>
                            <input
                                type="text"
                                className="form-control"
                                id="confirmPassword"
                                name="confirmPassword"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                style={errors.confirmPassword && touched.confirmPassword ? { borderColor: "#fc8181" } : {}}
                                placeholder="Confirm Password" />
                            {errors.confirmPassword && touched.confirmPassword ? <p className="error-message">{errors.confirmPassword}</p> : ""}
                        </div>
                        <br />
                        <button disabled={isSubmitting} className="btn btn-info" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register