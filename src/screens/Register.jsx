import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../features/auth/authSlice";
import RegImg from "../assets/Images/imgReg01.png"

const Register = () => {
  const { isLoading, isError, isSuccess, message, user } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords Not Match!");
    } else {
      dispatch(registerUser(formData));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/Home");
    }

    if (isError) {
      toast.error(message);
    }
  }, [user, isError, message]);

  if (isLoading) {
    return <h1 className="text-center text-secondary mt-5">Loading..</h1>;
  }

  return (
    // <div className="container p-3 d-flex align-items-center justify-content-center">
    //   <div className="card p-3 rounded-5 w-100" id="registerCard">
    //     <h3 className="text-center text-light">Register Here</h3>

    //     <form className="my-3 d-flex align-items-center justify-content-center flex-column" onSubmit={handleSubmit}>
    //       <input
    //         type="text"
    //         name="name"
    //         value={name}
    //         onChange={handleChange}
    //         placeholder="Enter Name"
    //         className="form-control my-2 rounded-3 w-100 bg-transparent"
    //         required
    //       />
    //       <input
    //         type="email"
    //         name="email"
    //         value={email}
    //         onChange={handleChange}
    //         placeholder="Enter Email"
    //         className="form-control my-2 rounded-3 w-100 bg-transparent"
    //         required
    //       />
    //       <input
    //         name="password"
    //         value={password}
    //         onChange={handleChange}
    //         type="password"
    //         placeholder="Enter Password"
    //         className="form-control my-2 rounded-3 w-100 bg-transparent"
    //         required
    //       />{" "}
    //       <input
    //         name="password2"
    //         value={password2}
    //         onChange={handleChange}
    //         type="password"
    //         placeholder="Confirm Password"
    //         className="form-control my-2 rounded-3 w-100 bg-transparent"
    //         required
    //       />
    //       <button className="btn btn-primary rounded-2 w-75 my-2">Register</button>
    //     </form>
    //   </div>
    // </div>

    <div className="container p-3 d-flex align-items-center justify-content-center">
      <div className="container-01 d-flex align-items-center justify-content-center flex-column" id="registerCard">
      <div className="box01 rounded-0 w-25 text-light p-2">Sign-Up</div>
      <div className="card p-3 rounded-1" id="innerCard01">
        <span>
        <img src={RegImg} alt="" />
        </span>
        <form
          className="my-3 d-flex align-items-center justify-content-center flex-column"
          onSubmit={handleSubmit}
        >
          <span className="d-flex align-items-center w-100">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="form-control my-3 ms-2"
                required
              />
            </span>
            <span className="d-flex align-items-center w-100">
              <i className="fa-solid fa-at"></i>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="form-control my-2 ms-2"
                required
              />
            </span>
            <span className="d-flex align-items-center w-100">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
                className="form-control my-3 ms-2"
                required
              />
            </span>
            <span className="d-flex align-items-center w-100">
              <i className="fa-solid fa-key"></i>
              <input
                type="password"
                name="password2"
                value={password2}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="form-control my-2 ms-2"
                required
              />
            </span>

          <button className="btn rounded-2 w-50 my-2 text-light" id="button">
            Register
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Register;
