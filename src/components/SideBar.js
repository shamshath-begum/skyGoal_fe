import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

import Card from "react-bootstrap/Card";

import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

function SideBar() {
  const [role, setRole] = useState("");

  useEffect(() => {
    let res = sessionStorage.getItem("role");
    // console.log(res);
    setRole(res);
  }, []);

  return (
    <>
      <div style={{ height: "735px" }}>
        <ListGroup variant="flush">
          <Card.Header>
            <h3 style={{ textAlign: "center" }}>SIDEBAR</h3>
          </Card.Header>

          <ListGroup.Item style={{ height: "70px" }}>
            <NavLink
              style={{ color: "black", textDecoration: "none",textAlign:"center" }}
              to="/dashboard"
            >
              <b>Dashboard</b>
            </NavLink>
          </ListGroup.Item>
          <ListGroup.Item>
            <NavDropdown
              title="STUDENTS"
              id="basic-nav-dropdown"
              style={{ height: "100px" ,color: "black"}}
            >
                {role==="Admin" || role=== "salesRep" ? (
                    <NavDropdown.Item>
                <NavLink to="/dashboard" style={{textDecoration: "none",color:"black"}}>
                  <b>DISPLAY STUDENT INFO</b>
                </NavLink>
              </NavDropdown.Item>
                ):""}
              
              {role === "salesRep" ? (
                <NavDropdown.Item>
                  <NavLink to="/student-registration" style={{textDecoration: "none",color:"black"}}>
                    <b>ADD STUDENT</b>
                  </NavLink>
                </NavDropdown.Item>
              ) : (
                ""
              )}
{role === "Admin" ? (
    <NavDropdown.Item>
                <NavLink to="/display-student"style={{textDecoration: "none",color:"black"}}>
                  <b>MANAGE STUDENT</b>
                </NavLink>{" "}
              </NavDropdown.Item>
):""}
              
            </NavDropdown>
          </ListGroup.Item>

          
          {role==="student" ? (<ListGroup.Item>
            <NavDropdown
              title="COURSE DETAILS"
              id="basic-nav-dropdown"
              style={{ height: "100px" }}
            >
              <NavDropdown.Item>
                <NavLink style={{ textDecoration: "none" }} to="/course-registration">
                  AddCourse
                </NavLink>
              </NavDropdown.Item>
             
              
            </NavDropdown>
          </ListGroup.Item> 
):("")}


          
        </ListGroup>
      </div>
    </>
  );
}

export default SideBar;