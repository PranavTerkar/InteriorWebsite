import React from "react";
import './styles/home.css'

function Home() {
  return (
    <div style={{background: "#FCFFE7", height: "100vh" }} className="home ">
      <div style={{height: "90vh", paddingTop:"30vh" }}>
        <h1
          style={{ fontSize: "90px" }}
          className="mainTitle col-lg-6 col-sm-12 text-left d-flex justify-content-center align-items-center"
        >
          Create a Space <br></br>you love
        </h1>
        <div className="backgroundimage">
        </div>
        <p  style={{ }} className=" text-left col-lg-6 col-sm-12 text-left d-flex justify-content-center align-items-center">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate<br></br> the visual form of a document or
          a typeface without
        </p>
      </div>
    </div>
  );
}

export default Home;
