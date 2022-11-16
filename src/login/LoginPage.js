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
    const regex = /([a-zA-Z0-9]+)([.{1}])?([a-zA-Z0-9]+)@gmail([.])com/g;
    let minusCircle = <i className="fa fa-minus-circle"></i>;

    if (!values.email) {
      errors.email = <p>{minusCircle} The Email field is required</p>;
    } else if (!regex.test(values.email)) {
      errors.email = <p>{minusCircle} This is not a valid email format!</p>;
    }
    if (!values.password) {
      errors.password = <p>{minusCircle} Password is required</p>;
    } else if (values.password.length < 4) {
      errors.password = (
        <p>{minusCircle} Please enter minimum of 4 characters</p>
      );
    } else if (values.password.length > 10) {
      errors.password = (
        <p>{minusCircle} Please enter maximum of 10 characters only!</p>
      );
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
          <img
            className="backgroundImage"
            src={backimage}
            alt="backgroundImage"
            width="100%"
            loading="lazy"
          />
        </div>
        <div className="form">
          <div className="logo text-center">
            <img
              className="amazon"
              src={amazon}
              alt="Amazon Logo"
              width="18%"
            />
          </div>
          <div className="formHead text-center mt-2 mb-3">
            <p>Login</p>
          </div>
          <div className="subForm">
            <div className="text-center ml-2">
              <img
                className="treeimage"
                src={tree}
                alt="TreePicture"
                width="100%"
              />
            </div>
            <form className="container" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <div className="emailDiv">
                  {/* <label className="text-align-start email mt-4 mb-1">
                    Email
                  </label> */}
                  <input
                    type="email"
                    className="emaiInput"
                    // placeholder="Enter your email here"
                    placeholder="Email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  <p className="errorText">
                    {formErrors.email && <span>{formErrors.email}</span>}
                  </p>
                </div>
                <div className="passwordDiv">
                  {/* <label className="text-align-start email mt-4 mb-1">
                    Password
                  </label> */}
                  <input
                    type="password"
                    className="emaiInput"
                    // placeholder="Enter your password here"
                    placeholder="Password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                  <p className="errorText">
                    {formErrors.password && <span>{formErrors.password}</span>}
                  </p>
                </div>
                <div className="d-grid gap-2 mx-auto">
                  <button
                    type="submit"
                    onClick={submit}
                    className="mt-3 mb-2 submitBtn"
                  >
                    Sign In
                  </button>
                </div>
                <div className="submitText">
                  {Object.keys(formErrors).length === 0 && isSubmit && (
                    <p className="text-center fw-bold text-success ">
                      Form submitted successfully..!
                    </p>
                  )}
                </div>
              </div>
            </form>
            <div className="forgotPassword ">
              <p className="fp1">Forgot Password?</p>
              <p className="fp2"> New user? Sign up</p>
            </div>
            <div className="or text-center m-2">
              <p>or</p>
            </div>
            <div className="socialMedia ">
              <a href="*" className="google">
                <img
                  src={google}
                  alt="Google Logo"
                  className="m-2 googleLogo"
                />
                <p className="googleText ">CONTINUE WITH GOOGLE</p>
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
// get fromDate; 16 Nov, 2022
//get the duration; 3
// fromDate.getDay(); 3
//if(formDate == >0 and  <6){
//   finalDate.setDate(fromDate.getDate() + parseInt(duration.value)); 19 Nov, 2022
// }

//finaDate(); 21 Nov, 2022
