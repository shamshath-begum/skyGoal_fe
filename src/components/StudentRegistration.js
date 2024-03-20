import React, { useState } from "react";
import { url } from "../App";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function StudentRegistration() {
  let [firstName, setfirstName] = useState("");
  let [lastName, setlastName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [course, setCourse] = useState("");
  let [background, setBackground] = useState("");
  let [profession, setProfession] = useState("");
  let [preferredBatch, setPreferredBatch] = useState("");
  let [status, setStatus] = useState("");
  let [createdBy, setCreatedBy] = useState("");

  let courses=["FrontEnd Developer","backEnd Developer","FullStack Developer","Java Developer"];
let backgrounds=["IT","NON-IT"]
let professions=["student","working","job seeker"];
let PreferredBatches=["WeekDay","WeekEnd"]
let Status=["IN","OUT","PENDING"]
let navigate = useNavigate();
  let token = sessionStorage.getItem("token");

  let handleClick = async () => {
    if(firstName===""){
      alert("Please Enter Your firstName")
  }else if(lastName===""){
      alert("Please Enter Your lastName")
  }else if(email===""){
      alert("Please Enter Your Email")
  }else if(!email.includes("@")){
      alert("Please Enter Your Valid Email")
  }else if(mobile===""){
      alert("Please Enter Your Mobile number")
  }else if(course===""){
      alert("Please Enter Your course ")
  }else if(background===""){
      alert("Please Enter Your background")
  }else if(profession===""){
      alert("Please Enter Your profession")
  }else if(preferredBatch==="" ){
      alert("Please Enter Your preferredBatch ")
  }else if(status===""){
      alert("Please Enter Your status")
  }else if(createdBy===""){
    alert("Please Enter who is created")
  }
  else{
    try {
      let res = await axios.post(
        `${url}/student-registration`,
        {
          firstName,
          lastName,
          email,
          mobile,
          course,
          background,
          profession,
          preferredBatch,
          status,
          createdBy,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(res)
      // navigate('/display-lead')
      if (res.status === 201) {
        // sessionStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        navigate("/dashboard");
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
            <h2>Student Registration Form</h2>
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

          <Form.Group className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mobile"
              onChange={(e) => setMobile(e.target.value)}
            />
          </Form.Group>
<div style={{marginTop:10}}>
  <label htmlFor="course">Course</label>
           <select className="form-select"onChange={(e)=>setCourse(e.target.value)} >
          <option selected>Courses</option>
            {
              courses.map((course)=>(
                <option value={course}>{course}</option>
              ))
            }

          </select> 
          </div>

         
<div style={{marginTop:10}}>
<label htmlFor="background">Background</label>
<select className="form-select"onChange={(e)=>setBackground(e.target.value)}>
<option selected>Background</option>
            {
              backgrounds.map((background)=>(
                <option value={background}>{background}</option>
              ))
            }

          </select>
          </div>
          <div style={{marginTop:10}}>
          <label htmlFor="profession">profession</label>
          <select className="form-select"onChange={(e)=>setProfession(e.target.value)}>
<option selected>Profession</option>
            {
              professions.map((profession)=>(
                <option value={profession}>{profession}</option>
              ))
            }

          </select>
          </div>

          

          

          <div style={{marginTop:10}}>
          <label htmlFor="preferredBatch">PreferredBatch</label>
<select className="form-select"onChange={(e)=>setPreferredBatch(e.target.value)}>
<option selected>PreferredBatch</option>
            {
             PreferredBatches .map((PreferredBatch)=>(
                <option value={PreferredBatch}>{PreferredBatch}</option>
              ))
            }

          </select>
          </div>
          
<div style={{marginTop:10}}>
<label htmlFor="status">Status</label>
<select className="form-select"onChange={(e)=>setStatus(e.target.value)}>
<option selected>Status</option>
            {
             Status .map((status)=>(
                <option value={status}>{status}</option>
              ))
            }

          </select>
          </div>
          <Form.Group className="mb-3">
            <Form.Label>CreatedBy</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter creaters Name"
              onChange={(e) => setCreatedBy(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={() => handleClick()}>
            Submit
          </Button>
        </Form>
        </div>
        
        </section>
    </>
  );
}

export default StudentRegistration;