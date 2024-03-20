import React, { useEffect, useState, useCallback } from "react";
import { url } from "../App";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";


import Card from "react-bootstrap/Card";

function StudentDashboard() {
  let token = sessionStorage.getItem("token");

  let [students, setStudents] = useState([]);
  let [cards, setCards] = useState([]);
  let [selectedCourse, setSelectedCourse] = useState("");
  let navigate = useNavigate();

  let getData = async () => {
    try {
      let res = await axios.get(`${url}/student-dashboard`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
// console.log(res)
      if (res.status === 201) {
        setCards(res.data.students);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      if (error.response.status === 401) handleLogout();
    }
  };

  let loadCourseData = async (course) => {
    try {
      setSelectedCourse(course);
      let res = await axios.get(`${url}/dashboard-list-items/${course}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 201) {
        // console.log(res)
        setStudents(res.data.students);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      if (error.response.status === 401) handleLogout();
    }
  };

  let handleLogout = async () => {
    sessionStorage.clear();
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
      <div className="card-wrapper d-flex justify-content-evenly flex-wrap"style={{marginTop:100}}>
     
        {cards?.map((e, i) => {
          return (
            <Card
              key={i}
              style={{ width: "15rem", cursor: "pointer" }}
              className="shadow mt-5 mb-5 "
              onClick={() => {
                loadCourseData(e._id);
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
      <button onClick={()=>navigate("/home")}>HOME</button>
      
    </>
  );
}

export default StudentDashboard;
