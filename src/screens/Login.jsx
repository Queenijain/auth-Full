import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import RegImg from "../assets/Images/imgReg01.png"

const Login = () => {
  const { isLoading, isError, isSuccess, message, user } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/Home");
    }

    if (isError && message) {
      toast.error(message);
    }
  }, [user, isError, message]);

  if (isLoading) {
    return <h1 className="text-center text-secondary mt-5">Loading..</h1>;
  }

  return (
    <div className="container p-2 d-flex align-items-center justify-content-center">
      <div className="container-01 d-flex align-items-center justify-content-center flex-column" id="registerCard">
      <div className="box01 rounded-0 w-25 text-light p-2">Sign-IN</div>
      <div className="card p-3 rounded-1" id="innerCard01">
      <span>
        <img src={RegImg} alt="" />
        </span>
        <form className="my-3" onSubmit={handleSubmit}>
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
          <button type="submit" className="btn rounded-2 w-50" id="button">
            Login
          </button>
          <p className="mt-3 text-light">
            Don’t have an account yet?{" "}
            <Link to={"/register"} className="mt-10" style={{color : "#009EA1" , fontWeight : "600"}}>
              Sign up
            </Link>
          </p>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Login;
