import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './styles/feedback.css'
function Feedback() {
  return (
   
  <div  style={{background: "#2B3467",height:"70vh"}}>
      <section className="testimonials">
        <div className="heading text-center">
          <h2>What's
            <span>Clients</span>
            Says?</h2>
        </div>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                {/* Indicators*/}
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                  <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                  <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                  {/* Item-1 */}
                  <div className="carousel-item active text-center">
                    <img src="https://i.ibb.co/8x9xK4H/team.jpg" alt="" className="center-block team" />
                    <h3>Alamin Musa</h3>
                    <h4>Front End Developer</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                      porttitordapibus dictum.<br />
                      Fusce faucibus ligula scelerisque, eleifend turpis in</p>
                  </div>
                  {/* Item-2 */}
                  <div className="carousel-item text-center">
                    <img src="https://i.ibb.co/8x9xK4H/team.jpg" alt="" className="center-block team" />
                    <h3>Alamin Musa</h3>
                    <h4>Front End Developer</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                      porttitordapibus dictum.<br />
                      Fusce faucibus ligula scelerisque, eleifend turpis in</p>
                  </div>
                  {/* Item-3 */}
                  <div className="carousel-item text-center">
                    <img src="https://i.ibb.co/8x9xK4H/team.jpg" alt="" className="center-block team" />
                    <h3>Alamin Musa</h3>
                    <h4>Front End Developer</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                      porttitordapibus dictum.<br />
                      Fusce faucibus ligula scelerisque, eleifend turpis in</p>
                  </div>
                </div>
                <a className="carousel-control-prev control" data-target="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="fa fa-angle-left icon" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next control" data-target="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="fa fa-angle-right icon" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
  );
}

export default Feedback;
