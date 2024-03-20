import React, { useEffect, useState, useCallback } from "react";
import { url } from "../App";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";

import Card from "react-bootstrap/Card";


function Dashboard() {
  let token = sessionStorage.getItem("token");
  const user=useSelector((state)=>state.user)
  console.log(user)
  const dispatch=useDispatch()

  let [students, setStudents] = useState([]);
  let [cards, setCards] = useState([]);
  let [selectedStatus, setSelectedStatus] = useState("");
  let navigate = useNavigate();

  let getData = async () => {
    try {
      let res = await axios.get(`${url}/dashboard`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 201) {
        setCards(res.data.students);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      if (error.response.status === 401) handleLogout();
    }
  };

  let loadStatusData = async (status) => {
    try {
      setSelectedStatus(status);
      let res = await axios.get(`${url}/dashboard-list-items/${status}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 201) {
        setStudents(res.data.students);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      if (error.response.status === 401) handleLogout();
    }
  };

  let handleLogout = async () => {
    dispatch(logout())
    navigate("/login");
  };



  useEffect(() => {
    if (token) {
      getData();
    } else {
      handleLogout();
    }
  }, [token]);

  return (
    <>
      <div style={{display:"flex",flexDirection:"column"}}>
      <div className="card-wrapper d-flex justify-content-evenly flex-wrap">
        {cards?.map((e, i) => {
          return (
            <Card
              key={i}
              style={{ width: "15rem", cursor: "pointer" }}
              className="shadow mt-5 mb-5 "
              onClick={() => {
                loadStatusData(e._id);
              }}
            >
              <Card.Body>
                <Card.Title style={{ textAlign: "center", fontSize: "25px" }}>
                  {e._id}&nbsp;&nbsp;{e.count}
                </Card.Title>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      

      <div className=" container-fluid mt-5 ">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Course</th>
              <th>Created By</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {students.map((e, i) => {
              return (
                <tr key={i} style={{ cursor: "pointer" }}>
                  <td>{i + 1}</td>
                  <td>{e.firstName}</td>
                  <td>{e.lastName}</td>
                  <td>{e.email}</td>
                  <td>{e.mobile}</td>
                  <td>{e.course}</td>
                  <td>{e.createdBy}</td>
                  <td>{new Date(e.createdAt).toLocaleDateString("en-UK")}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
<button onClick={()=>navigate("/home")} style={{textDecoration:"none",marginTop:80,marginLeft:15,marginBottom:20}}>Home</button>
      </div>
    </>
  );
}

export default Dashboard;