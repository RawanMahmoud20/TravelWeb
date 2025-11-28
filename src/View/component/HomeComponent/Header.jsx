import { Fragment } from "react";
import TravelGoStyle from "../../../resourses/Css/cssModules/TravelGo.module.css";
import HeaderLogo from "../../../resourses/image/HomeHeader.jpg";
import LogoTravelGo from "../../../resourses/image/LogoTravelGo.jpg";
import Italy from "../../../resourses/image/Italy.jpg";
import LIVADIA_PALACE from "../../../resourses/image/LIVADIA_PALACE.jpg";
import GREECE from "../../../resourses/image/GREECE.jpg";
import CANADA from "../../../resourses/image/CANADA.jpg";
import PERU from "../../../resourses/image/PERU.jpg";
import CHINA from "../../../resourses/image/CHINA.jpg";
import ICELAND from "../../../resourses/image/ICELAND.jpg";
import TAJ_MAHAL from "../../../resourses/image/TAJ_MAHAL.jpg";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Fragment>
      <div
        className={`landing d-flex justify-content-center align-items-center ${TravelGoStyle.landing} `}
      >
        <img src={HeaderLogo} alt="" className={TravelGoStyle.header} />
      </div>

      <div className={`text-center pt-5 pb-5 ${TravelGoStyle.ourWork} `}>
        <div className="contianer">
          <div
            className={`main-title mt-5 mb-5 position-relative ${TravelGoStyle.mainTitle}`}
          >
            <img className={TravelGoStyle.logo} src={LogoTravelGo} alt="logo" />
            <h2>Famous tourist attractions </h2>
            <p className="text-black-50 text-uppercase">Prepare to be amazed</p>
          </div>

          <div className={`row ${TravelGoStyle.row}`}>
            <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
              <div
                className={`box mb-3 white ${TravelGoStyle.box} `}
                data-work="ITALY"
              >
                <img className={TravelGoStyle.imgFluid} src={Italy} alt="" />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
              <div
                className={` box mb-3 white ${TravelGoStyle.box}`}
                data-work="LIVADIA PALACE"
              >
                <img
                  className={TravelGoStyle.imgFluid}
                  src={LIVADIA_PALACE}
                  alt=""
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
              <div
                className={`box mb-3 white ${TravelGoStyle.box}`}
                data-work="GREECE"
              >
                <img className={TravelGoStyle.imgFluid} src={GREECE} alt="" />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
              <div
                className={`box mb-3 white ${TravelGoStyle.box}`}
                data-work="CANADA"
              >
                <img className={TravelGoStyle.imgFluid} src={CANADA} alt="" />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
              <div
                className={`box mb-3 white ${TravelGoStyle.box}`}
                data-work="MACHU PICCHU, PERU"
              >
                <img className={TravelGoStyle.imgFluid} src={PERU} alt="" />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
              <div
                className={`box mb-2 white ${TravelGoStyle.box}`}
                data-work="THE GREAT WALL OF CHINA"
              >
                <img className={TravelGoStyle.imgFluid} src={CHINA} lt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
              <div
                className={`box mb-3 white ${TravelGoStyle.box}`}
                data-work="SECRET FALLS, ICELAND"
              >
                <img className={TravelGoStyle.imgFluid} src={ICELAND} alt="" />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
              <div
                className={`box mb-3 white ${TravelGoStyle.box}`}
                data-work="TAJ MAHAL"
              >
                <img
                  className={`${TravelGoStyle.imgFluid} ${TravelGoStyle.two}`}
                  src={TAJ_MAHAL}
                  alt=""
                />
              </div>
            </div>
          </div>
          <NavLink
            className={`rounded-pill main-btn text-uppercase ${TravelGoStyle.btn}`}
            to="/flights"
          >
            travel now
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
};
export default Header;
