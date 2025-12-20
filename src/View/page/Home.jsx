import { Fragment } from "react/jsx-runtime";

import "../../Styles/main.scss"; //npm install sass --save-dev
import TravelGoStyle from "../../resourses/Css/cssModules/TravelGo.module.css";
import HomeCards from "../component/HomeComponent/HomeCards";
import HomeCards2 from "../component/HomeComponent/HomeCards2";
import TravelGoLogo from "../../resourses/image/LogoTravelGo.jpg";
import Pyramids from "../../resourses/image/Pyramids.jpg";
import NavBar from "../component/NavBar";
import Header from "../component/HomeComponent/Header";
import Footer from "../component/HomeComponent/Footer";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Header />

      <div className={`${TravelGoStyle.stuffe}stuffe pt-5`}>
        <div className="container">
          <div
            className={`${TravelGoStyle.mainTitle}main-title text-center mt-5 mb-5 position-relative`}
          >
            <img className={TravelGoStyle.logo} src={TravelGoLogo} alt="logo" />
            <h2>A Timeless Wonder </h2>
            <p className="text-black-50 text-uppercase">Pyramids of giza</p>
          </div>
          <div className={`${TravelGoStyle.row} row align-items-center`}>
            <div className="col-lg-4 mb-4">
              <h4>Pyramids — A Timeless Wonder</h4>
              <p className="text-black-50">
                The Pyramids of Giza offer visitors a magical experience that
                blends history, mystery,and breathtaking views. Tourists feel
                truly happy as they stand before these ancient wonders,
                capturing unforgettable photos and enjoying the warm Egyption
                hospitality. Whether riding camels, exploring the Sphinx, or
                watching the sunset behind the pyramids, every moment at Giza
                becomes a memory that lasts forever.
              </p>
              <NavLink
                className={`${TravelGoStyle.btn}  rounded-pill main-btn`}
                to="/cities"
              >
                Visit now
              </NavLink>
            </div>

            <div className="col-lg-8">
              <img src={Pyramids} className={TravelGoStyle.pyramidsImg} />
            </div>
          </div>
        </div>
      </div>

      <HomeCards />

      <HomeCards2 />

      <Footer />
    </Fragment>
  );
};
export default Home;
