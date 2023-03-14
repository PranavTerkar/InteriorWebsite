import React from "react";
import "./styles/offer.css";

function Offer() {
  return (
    <div className="offer">
      <div
        className="mainoffer"
        style={{ padding: "5vw", background: "#2B3467", color: "white" }}
      >
        <div className="p-2 col-lg-3 ">
          <h1 className="col-6 ">What we offer</h1>
        </div>
        <div className="p-2 col-lg-6 ">
          <div className=" text-left">
            <div>
              <h3 style={{fontSize:"30px", paddingBottom: "1vw" }}>EXPERIENCED TEAM</h3>
              <p>
                Each of us is a master of our craft – we've worked a number of
                years in our field and each have passion and creative vision for
                every project we put our hands on.{" "}
              </p>
            </div>
            <div>
              <h3 style={{fontSize:"30px", paddingBottom: "1vw", paddingTop: "1vw" }}>
                QUALITY TO DIE FOR
              </h3>
              <p>
                We pay a lot of attention to each and every detail, because we
                know that we are in charge of creating somebody's safe haven. We
                partner up with the best craftsmen to ensure our famed quality.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize:"30px",paddingBottom: "1vw", paddingTop: "1vw" }}>
                VISIONARIES OF THE FUTURE{" "}
              </h3>
              <p>
                We're not scared to go beyond the horizon. As the visionaries of
                tomorrow, we won't say no to experimentation, unusual materials,
                or unlikely combinations.
              </p>
            </div>
          </div>
        </div>
        <div className="p-2 col-lg-3 col-">
          <div>
            <h3 style={{ paddingBottom: "1vw" }}>OUR SERVICES</h3>
            <div>
              <ul class="check-list">
                <li>Head</li>
                <li>Shoulders</li>
                <li>Knees</li>
                <li>Toes</li>
                <li>Toes</li>
                <li>Toes</li>
                <li>Toes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;

