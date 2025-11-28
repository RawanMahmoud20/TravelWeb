import { Fragment } from "react";
import TravelGoStyle from "../../../resourses/Css/cssModules/TravelGo.module.css";
import EGYPT from "../../../resourses/image/EGYPT.jpg"
import DUBAI from "../../../resourses/image/DUBAI.jpg"
import ISTANBUL from "../../../resourses/image/ISTANBUL.jpg"
import PARIS from "../../../resourses/image/PARIS.jpg"
import icons_1 from "../../../resourses/image/icons_1.webp";
import icons_2 from "../../../resourses/image/icons_2.webp";
import icons_3 from "../../../resourses/image/icons_3.webp";
import icons_4 from "../../../resourses/image/icons_4.webp";
import icons_5 from "../../../resourses/image/icons_5.webp";
import icons_6 from "../../../resourses/image/icons_6.webp";
import { NavLink } from "react-router-dom";

const HomeCards = () => {
  return (
    <Fragment>
      <div className={`text-center pb-5 pt-5 ${TravelGoStyle.team} `}>
        <div className="container pb-5 pt-5 mb-5">
          <h2 className="fw-bold pb-4">Experience Comfort & Style</h2>
          <div className={`row ${TravelGoStyle.row}`}>
            <div className="col-md-6 col-lg-3">
              <div className={` box white ${TravelGoStyle.box}`}>
                <img
                  className={`img-fluid ${TravelGoStyle.imgFluid}`}
                  src={EGYPT}
                  alt=""
                />
                <h4 className="p-3 text-light">EGYPT</h4>
                <blockquote className="text-black-50 p-3">
                  A trip to Egypt was like a dream...a comfortable stay in
                  hotels that combined luxury and warmth, and genuine
                  hospitality that made me feel right at home. Between the
                  mysteries of the pyramids and the whispers of the Nile, i
                  experienced moments i will never forget
                </blockquote>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className={`box white ${TravelGoStyle.box} `}>
                <img
                  className={`img-fluid ${TravelGoStyle.imgFluid}`}
                  src={DUBAI}
                  alt=""
                />
                <h4 className="p-3 text-light">DUBAI</h4>
                <blockquote className="text-black-50 p-3">
                  Dubai isn't just visited... it's lived. My Dubai trip was
                  amazing!The hotels were luxurious, stylish, and full of
                  comfort perfect for exploring this dazzling city. Every stay
                  fell like a dream!
                </blockquote>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className={` box white ${TravelGoStyle.box}`}>
                <img
                  className={`img-fluid ${TravelGoStyle.imgFluid}`}
                  src={ISTANBUL}
                  alt=""
                />
                <h4 className="p-3 text-light">ISTANBUL</h4>
                <blockquote className="text-black-50 p-3">
                  Istanbul is a city where continents meet, civilizations
                  intertwine, and sounds harmonize:the sound of waves from the
                  Bosphorus, the call to prayer from centuies-old minarets
                  amidst the city's magic,your'll feel you 're part of its
                  story.
                </blockquote>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className={` box white ${TravelGoStyle.box}`}>
                <img
                  className={`img-fluid ${TravelGoStyle.imgFluid}`}
                  src={PARIS}
                  alt=""
                />
                <h4 className="p-3 text-light">PARIS</h4>
                <blockquote className="text-black-50 p-3">
                  Its hotels, each one is like a chapter from a romantic novel:
                  elegant rooms with classNameic details, windows overlooking
                  red rooftops and breakfast served as a gift from the city
                  itself. Staying in paris isn't just about sleeping...it's
                  about experienceing its magic, which stays with you long after
                  you leave.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`pt-5 pb-5 text-center ${TravelGoStyle.techs}`}>
        <div className="container">
          <div className={`row align-items-center ${TravelGoStyle.row}`}>
            <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
              <img
                className={`img-fluid ${TravelGoStyle.imgFluid}`}
                src={icons_1}
                alt=""
              />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
              <img
                className={`img-fluid ${TravelGoStyle.imgFluid}`}
                src={icons_2}
                alt=""
              />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
              <img
                className={`img-fluid ${TravelGoStyle.imgFluid}`}
                src={icons_3}
                alt=""
              />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
              <img
                className={`img-fluid ${TravelGoStyle.imgFluid}`}
                src={icons_4}
                alt=""
              />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
              <img
                className={`img-fluid ${TravelGoStyle.imgFluid}`}
                src={icons_5}
                alt=""
              />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
              <img
                className={`img-fluid ${TravelGoStyle.imgFluid}`}
                src={icons_6}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`project text-center pt-5 pb-5 text-light ${TravelGoStyle.project} `}
      >
        <h2>Enjoy your trip now</h2>
        <p className="text-white-50">
          Book your stay at the most beautiful hotels in the world
        </p>
        <div className="d-flex justify-content-center mt-5 mb-5">
          <NavLink
            className={`${TravelGoStyle.btn}  rounded-pill main-btn text-uppercase" `}
            to="/hotels"
          >
            Book now
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
};
export default HomeCards;
