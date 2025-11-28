import { Fragment } from "react";
import "../../../Styles/main.scss"   //npm install sass --save-dev
import  TravelGoStyle from "../../../resourses/Css/cssModules/TravelGo.module.css"
import TravelGoLogo from "../../../resourses/image/LogoTravelGo.jpg"
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
            <div className={`footer pt-5 pb-5 text-white-50 text-center text-md-start ${TravelGoStyle.footer}`}>
        <div className="container">
          <div className={`row ${TravelGoStyle.row}`}>
            <div className="col-md-6 col-lg-4">
              <div className="info mb-5">
                <img className={TravelGoStyle.logo} src={TravelGoLogo} alt="logo" />
                <p>
                  A website offering the latest hotels and the finest trips.
                  Enjoy your journey wherever you are, because it will surely
                  pass, so make it pass happily. The world doesn't care if
                  you're sad or happy, so smile for yourself only.
                </p>
                <div className={TravelGoStyle.copyright}>
                  Created By <span>2W</span>
                  <div>
                    &copy; 2025 - <span>TravelGo</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="links">
                <h5 className="text-light">Links</h5>
                <ul className="list-unstyled lh-lg">
                  <li>Home</li>
                  <li>Our Support</li>
                  <li>Portfolio</li>
                  <li>Test imonials</li>
                  <li>Support</li>
                  <li>Terms and Condition</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="links">
                <h5 className="text-light">About Us</h5>
                <ul className="list-unstyled lh-lg">
                  <li>Sign In</li>
                  <li>Register</li>
                  <li>About Us</li>
                  <li>Blog</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={TravelGoStyle.contact}>
                <h4 className="text-light">Contact Us</h4>

                <ul className="d-flex mt-5 list-unstyled gap-3">
                  <li>
                    <NavLink className="d-block text-light" to="#">
                      <i className={`fa-brands fa-facebook fa-lg facebook rounded-circle p-2 ${TravelGoStyle.facebook}`}></i>
                    </NavLink> 
                  </li>
                  <li>
                    <NavLink className="d-block text-light" to="#">
                      <i className={`fa-brands fa-twitter fa-lg twitter rounded-circle p-2 ${TravelGoStyle.twitter}`}></i>
                    </NavLink> 
                  </li>
                  <li>
                    <NavLink className="d-block text-light" to="#">
                      <i className={`fa-brands fa-linkedin fa-lg linkedin rounded-circle p-2 ${TravelGoStyle.linkedin}`}></i>
                    </NavLink> 
                  </li>
                  <li>
                    <NavLink className="d-block text-light" to="#">
                      <i className={`fa-brands fa-youtube fa-lg youtube rounded-circle p-2 ${TravelGoStyle.youtube}`}></i>
                    </NavLink> 
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Footer;
