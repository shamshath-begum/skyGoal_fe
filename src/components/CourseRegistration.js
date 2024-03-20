import React, { useState } from "react";
import { url } from "../App";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CourseRegistration() {
  let [firstName, setfirstName] = useState("");
  let [lastName, setlastName] = useState("");
  let [email, setEmail] = useState("");
  let [course, setCourse] = useState("");

  let courses = [
    "FrontEnd Developer",
    "backEnd Developer",
    "FullStack Developer",
    "Java Developer",
  ];

  let navigate = useNavigate();
  let token = sessionStorage.getItem("token");

  let handleClick = async () => {
    if (firstName === "") {
      alert("Please Enter Your firstName");
    } else if (lastName === "") {
      alert("Please Enter Your lastName");
    } else if (email === "") {
      alert("Please Enter Your Email");
    } else if (!email.includes("@")) {
      alert("Please Enter Your Valid Email");
    } else if (course === "") {
      alert("Please Enter Your Course");
    } else {
      try {
        let res = await axios.post(
          `${url}/course-registration`,
          {
            firstName,
            lastName,
            email,
            course,
          },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log(res)

        if (res.status === 201) {
    
          toast.success(res.data.message);
          navigate("/student-dashboard");
        }
        //   console.log(res);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h2>Course Registration Form</h2>
          </div>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                onChange={(e) => setfirstName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                onChange={(e) => setlastName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <div style={{ marginTop: 10 }}>
              <label htmlFor="course">Course</label>
              <select
                className="form-select"
                onChange={(e) => setCourse(e.target.value)}
              >
                <option selected>Course</option>
                {courses.map((course) => (
                  <option value={course}>{course}</option>
                ))}
              </select>
            </div>

            
            
            <Button variant="primary" onClick={() => handleClick()}>
              Submit
            </Button>
          </Form>
        </div>
      </section>
    </>
  );
}

export default CourseRegistration;
