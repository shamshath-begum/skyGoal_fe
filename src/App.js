import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import SignUp from "./pages/SignUp";

import Login from "./pages/Login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import StudentRegistration from "./components/StudentRegistration";
import DisplayStudent from "./components/DisplayStudent";
import ManageStudent from "./components/ManageStudent";
import CourseRegistration from "./components/CourseRegistration";
import StudentDashboard from "./components/StudentDashboard";
import ManageCourse from "./components/ManageCourse";
// export const url="http://localhost:8000"
export const url="https://skygoal-be.onrender.com"


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/signup"element={<SignUp/>}/>
      <Route path="/login"element={<Login/>}/>
      <Route path="/home"element={<Home/>}/>
      <Route path="/dashboard"element={<Dashboard/>}/>
      <Route path="/student-registration" element={<StudentRegistration/>}/>
      <Route path="/display-student"element={<DisplayStudent/>}/>
      {/* <Route path="/manage-student"element={<ManageStudent/>}/> */}
      <Route path="/manage-student/:id"element={<ManageStudent/>}/>
      <Route path="/course-registration" element={<CourseRegistration/>}/>
      <Route path="/student-dashboard"element={<StudentDashboard/>}/>
      <Route path="/manage-course/:id"element={<ManageCourse/>}/>

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
