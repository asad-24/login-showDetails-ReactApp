import React, { useState } from "react";


export default function SignUp(props) {
  
  const nameHandle = (event) => {
    setname(event.target.value);
    let fullName=event.target.value
     console.log("after change",fullName)
    localStorage.setItem("name",fullName)
  };
  const emailHandle = (event) => {
    setemail(event.target.value);
    let fullemail=event.target.value
     console.log("after change",fullemail)
    localStorage.setItem("email",fullemail)
  };
  const passwordHandle = (event) => {
    setpassword(event.target.value);
    let fullpassword=event.target.value
    console.log("after change",fullpassword)
    localStorage.setItem("password",fullpassword)
  };
  // State variables for user input
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");


  const [hide, sethide] = useState("show user Details");

  const [show, setshow] = useState(false);
  const [btnShow, setbtnShow] = useState(false);

  const formHandle=(event)=>{
    event.preventDefault();
  
  }

  // if signup successfully then show user details
  const signUpBtn = () => {
    if (btnShow === true) {
      setbtnShow(false);
    } else {
      setbtnShow(true);
    }
    setname("")
    setemail("")
    setpassword("")
    props.useAlert("signUp successfully","success")
  };
  // this function hide or show user detail by useState
  const showDetail = () => {
    if (show === true) {
      setshow(false);
      sethide("show user detail");
    } else {
      setshow(true);
      sethide("hide user detail");
    }
  };
 

  console.log(name);
  return (
    <div className="container-fluid main-container-bg">
      <div className="container">
        <div className="row txt-col ">
          <div className="col-lg-7 col-md-6 col-12  d-flex justify-content-center align-items-center  flex-column">
            <div className="card card-width">
              <div className="card-body ">
              <form onSubmit={formHandle}>
              <input
                  type="text"
                  value={name}
                  onChange={nameHandle}
                  className="form-control"
                  id="exampleFormControlInput0"
                  placeholder="Enter Your Name"
                />
                <input
                  type="email"
                  value={email}
                  onChange={emailHandle}
                  className="form-control mt-3"
                  id="exampleFormControlInput1"
                  placeholder="Email or phone number"
                />
                <input
                  type="password"
                  value={password}
                  onChange={passwordHandle}
                  className="form-control mt-3"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                />
            
                <button
                  type="submit"
                  className="btn btn-primary mt-3 w-100 fw-bold"
                  onClick={signUpBtn}
                >
                  Sign up
                </button>
                </form >
                <p className="text-center text-primary">forgot password?</p>
                <hr />
                <button
                  type="submit"
                  className="btn btn-success w-100 mt-4 mb-4 fw-bold"
                >
                  Login
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-6 col-12   d-flex justify-content-center align-items-center  flex-column">
            {btnShow && (
              <button
                type="submit"
                className="btn btn-primary mt-3 w-50 fw-bold"
                onClick={showDetail}
              >
                {hide}
              </button>
            )}
            {show && (
              <ul className="detail-list">
                <li className="detail">Name : {localStorage.getItem("name")} </li>
                <li className="detail">Email : {localStorage.getItem("email")} </li>
                <li className="detail">Password :{localStorage.getItem("password")}</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
