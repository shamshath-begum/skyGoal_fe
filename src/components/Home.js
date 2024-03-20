import React from "react";

import SideBar from "../components/SideBar";
import Card from "react-bootstrap/Card";
import Dashboard from "./Dashboard";

function Home() {
  return (
    <>
      <div className="container-fluid" style={{backgroundColor:"rgb(36, 3, 63)"}}>
        <Card className="shadow mt-2 p-5 ">
         
          <div className="row">
            <div className="col-lg-3">
              <Card className="shadow"style={{backgroundColor:"#6F42C1",height:500}}>
                <SideBar />
              </Card>
            </div>
            <div className="col-lg-9">
              <Card className=" shadow"style={{backgroundColor:"#6F42C1"}}>
                <Dashboard />
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Home;