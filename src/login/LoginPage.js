import "./LoginPage.css";
import React, { useState, useEffect } from "react";
import backimage from "../assets/backimage.png";
import amazon from "../assets/amazon.png";
import tree from "../assets/tree.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import "bootstrap/dist/css/bootstrap.css";

function LoginPage() {
  const initialValues = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const submit = () => {
    console.log(formValues);
  };

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{8,16}$/i;

    if (!values.email) {
      errors.email = "The Email field is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Please enter minimum of 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Please enter maximum of 10 characters only!";
    }

    return errors;
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formValues);
      submit();
    }
  });

  return (
    <div className="main">
      <div className="submain">
        <div className="picture">
          <img src={backimage} alt="backgroundImage" width="100%" />
        </div>
        <div className="form">
          <div className="logo text-center">
            <img
              className="mt-3 amazon"
              src={amazon}
              alt="Amazon Logo"
              width="18%"
            />
          </div>
          <div className="formHead text-center mt-4">
            <h2>Login</h2>
          </div>
          <div className="subForm">
            <div className="treeimage text-center ml-2">
              <img src={tree} alt="TreePicture" width="100%" />
            </div>
            {Object.keys(formErrors).length === 0 && isSubmit && (
              <span>Form submitted successfully</span>
            )}
            <form className="container" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <div className="emailDiv">
                  <label className="text-align-start email mt-4 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="col-2 mb-2 form-control emaiInput"
                    placeholder="Enter your email here"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  <p className="text-danger errorText">
                    {formErrors.email && <span>{formErrors.email}</span>}
                  </p>
                </div>
                <div className="passwordDiv">
                  <label className="text-align-start email mt-4 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="mb-2 form-control emaiInput"
                    placeholder="Enter your password here"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                  <p className="text-danger errorText">
                    {formErrors.password && <span>{formErrors.password}</span>}
                  </p>
                </div>
                <div className="d-grid gap-2 mx-auto">
                  <button type="submit" className="m-3 submitBtn">
                    Sign In
                  </button>
                </div>
              </div>
            </form>
            <div className="forgotPassword ">
              <p className="fp1
              ">Forgot Password?</p>
              <p className="fp2 pt-3 text-danger"> New user? Sign up</p>
            </div>
            <div className="or text-center">
              <p>or</p>
            </div>
            <div className="socialMedia">
              <a href="*" className="google">
                <img
                  src={google}
                  alt="Google Logo"
                  className="m-2 googleLogo"
                />
                <p className="googleText">CONTINUE WITH GOOGLE</p>
              </a>
              <a href="*" className="facebook mt-4">
                <img
                  src={facebook}
                  alt="Facebook Logo"
                  className="m-2 facebookLogo"
                />
                <p className="facebookText">CONTINUE WITH FACEBOOK</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
