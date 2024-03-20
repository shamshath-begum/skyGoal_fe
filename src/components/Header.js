import React from 'react'
import logo from "../assets/skygoal-Logo.png"
import "./header.css"

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/userSlice";

function Header() {
    const user = useSelector((state) => state.user);
//   console.log(user);
  let dispatch=useDispatch()

  let navigate = useNavigate();

  let handleLogout = () => {
    dispatch(logout())
    navigate("/login");
  };
  return <>
  <div>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#6F42C1"}}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">
    <img src={logo}/>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
                <h2 className="navbar-nav m-auto mb-2 mb-lg-0">Authentication API</h2>
             
              <form className="d-flex button">
                {user.name ? 
                (<button className="button1" onClick={handleLogout} style={{ borderRadius: 7 }}>
                LogOut
              </button>) : (<>
                <Link className="button1" to="/signup">Sign Up</Link>
                <Link className="button1" to="/login">Login</Link>
              </>)
            }
                
                
              </form>
            </div>
          </div>
        </nav>
      </div>
  </>
}

export default Header
