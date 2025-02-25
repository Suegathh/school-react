import React, {useState} from "react";
import { useFormik } from "formik";

const Login = () =>{
    const [isSubmitting, setIsSubmitting] = useState(false)

    const onSubmit = () =>{

    }

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
                <h1>Login</h1>
                <br />
                <div className="form-area col-md-7">
                    <h3>Login</h3>
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

export default Login