import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser } from "../features/auth/authSlice";
import Dummy1 from "../assets/Images/dummy01.png";
import Dummy2 from "../assets/Images/dummy02.png";
import Dummy3 from "../assets/Images/dummy05.png";
import Dummy4 from "../assets/Images/dummy6.png";
import Dummy5 from "../assets/Images/dummy7.png";
import Dummy6 from "../assets/Images/dummy11.png";

const Home = () => {
  const { isLoading, isError, isSuccess, message, user } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  if (isLoading) {
    return <h1 className="text-center text-secondary mt-5">Loading..</h1>;
  }

  return (
    <div className="container p-5">
      <h2 className="text-light py-3">Welcome {user?.name}</h2>

      <table class="table table-striped table-bordered">
        <thead class="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Date Created</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
              <div class="d-flex align-items-center">
                <img
                  src={Dummy2}
                  class="rounded-circle me-2"
                  alt="User Image"
                  id="dummy"
                />
                <span>John Doe</span>
              </div>
            </td>
            <td>2024-05-29</td>
            <td>
              <span class="badge bg-success">Active</span>
            </td>
            <td>
              <button class="btn btn-primary btn-sm mx-1 rounded-5">
                <i class="fa-solid fa-gear" id="smBtn"></i>
              </button>
              <button class="btn btn-danger btn-sm rounded-5">
                <i class="fa-solid fa-circle-xmark" id="smBtn"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>
              <div class="d-flex align-items-center">
                <img
                  src={Dummy3}
                  class="rounded-circle me-2"
                  alt="User Image"
                  id="dummy"
                />
                <span>Emily Davis</span>
              </div>
            </td>
            <td>2024-05-10</td>
            <td>
              <span class="badge bg-warning">pending</span>
            </td>
            <td>
              <button class="btn btn-primary btn-sm mx-1 rounded-5">
                <i class="fa-solid fa-gear" id="smBtn"></i>
              </button>
              <button class="btn btn-danger btn-sm rounded-5">
                <i class="fa-solid fa-circle-xmark" id="smBtn"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>
              <div class="d-flex align-items-center">
                <img
                  src={Dummy4}
                  class="rounded-circle me-2"
                  alt="User Image"
                  id="dummy"
                />
                <span>Daizy Joe</span>
              </div>
            </td>
            <td>2024-05-30</td>
            <td>
              <span class="badge bg-success">Active</span>
            </td>
            <td>
              <button class="btn btn-primary btn-sm mx-1 rounded-5">
                <i class="fa-solid fa-gear" id="smBtn"></i>
              </button>
              <button class="btn btn-danger btn-sm rounded-5">
                <i class="fa-solid fa-circle-xmark" id="smBtn"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>
              <div class="d-flex align-items-center">
                <img
                  src={Dummy5}
                  class="rounded-circle me-2"
                  alt="User Image"
                  id="dummy"
                />
                <span>Johny Daze</span>
              </div>
            </td>
            <td>2024-05-15</td>
            <td>
              <span class="badge bg-danger">rejected</span>
            </td>
            <td>
              <button class="btn btn-primary btn-sm mx-1 rounded-5">
                <i class="fa-solid fa-gear" id="smBtn"></i>
              </button>
              <button class="btn btn-danger btn-sm rounded-5">
                <i class="fa-solid fa-circle-xmark" id="smBtn"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>
              <div class="d-flex align-items-center">
                <img
                  src={Dummy6}
                  class="rounded-circle me-2"
                  alt="User Image"
                  id="dummy"
                />
                <span>James Lee</span>
              </div>
            </td>
            <td>2024-05-21</td>
            <td>
              <span class="badge bg-warning">pending</span>
            </td>
            <td>
              <button class="btn btn-primary btn-sm mx-1 rounded-5">
                <i class="fa-solid fa-gear" id="smBtn"></i>
              </button>
              <button class="btn btn-danger btn-sm rounded-5">
                <i class="fa-solid fa-circle-xmark" id="smBtn"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>
              <div class="d-flex align-items-center">
                <img
                  src={Dummy3}
                  class="rounded-circle me-2"
                  alt="User Image"
                  id="dummy"
                />
                <span>Smithy Doe</span>
              </div>
            </td>
            <td>2024-05-20</td>
            <td>
              <span class="badge bg-success">Active</span>
            </td>
            <td>
              <button class="btn btn-primary btn-sm mx-1 rounded-5">
                <i class="fa-solid fa-gear" id="smBtn"></i>
              </button>
              <button class="btn btn-danger btn-sm rounded-5">
                <i class="fa-solid fa-circle-xmark" id="smBtn"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>
              <div class="d-flex align-items-center">
                <img
                  src={Dummy1}
                  class="rounded-circle me-2"
                  alt="User Image"
                  id="dummy"
                />
                <span>Jane Smith</span>
              </div>
            </td>
            <td>2024-05-25</td>
            <td>
              <span class="badge bg-success">Active</span>
            </td>
            <td>
              <button class="btn btn-primary btn-sm mx-1 rounded-5">
                <i class="fa-solid fa-gear" id="smBtn"></i>
              </button>
              <button class="btn btn-danger btn-sm rounded-5">
                <i class="fa-solid fa-circle-xmark" id="smBtn"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <button
        onClick={handleLogout}
        className="btn btn-sm btn-danger my-3 rounded-2"
      >
        Log Out
      </button>
    </div>
  );
};

export default Home;
