import { NavLink, useLocation } from "react-router-dom";
import "../../Styles/main.scss";
import TravelGoStyle from "../../resourses/Css/cssModules/TravelGo.module.css";

const NavBar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/index"; // تحقق إذا كانت الصفحة الرئيسية

  return (
    <nav className={`navbar navbar-expand-lg sticky-top ${TravelGoStyle.travelNavbar}`}>
      <div className="container">
        <NavLink className="navbar-brand" to="#">
          <div className={`text-light ${TravelGoStyle.Navlogo}`}>TravelGo</div>
        </NavLink>
        <button
          className={`navbar-toggler ${TravelGoStyle.travelNavbarToggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main"
          aria-controls="main"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className={`fa-solid fa-bars ${TravelGoStyle.faSolid}`}></i>
        </button>
        <div className="collapse navbar-collapse" id="main">
          <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${TravelGoStyle.travelNavbarNav}`}>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link p-2 p-lg-3 ${isActive ? TravelGoStyle.active : ""} ${TravelGoStyle.travelNavLink}`
                }
                aria-current="page"
                to="/index"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link p-2 p-lg-3 ${isActive ? TravelGoStyle.active : ""} ${TravelGoStyle.travelNavLink}`
                }
                to="/flights"
              >
                Flights
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link p-2 p-lg-3 ${isActive ? TravelGoStyle.active : ""} ${TravelGoStyle.travelNavLink}`
                }
                to="/hotels"
              >
                Hotels
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link p-2 p-lg-3 ${isActive ? TravelGoStyle.active : ""} ${TravelGoStyle.travelNavLink}`
                }
                to="/guides"
              >
                Guides
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link p-2 p-lg-3 ${isActive ? TravelGoStyle.active : ""} ${TravelGoStyle.travelNavLink}`
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li>
              {isHome ? (
                <button
                  id="login-btn"
                  className={`btn-primary rounded-pill main-btn ${TravelGoStyle.btn}`}
                  // يمكن استخدام NavLink إذا أردت التنقل عند الضغط
                  onClick={() => window.location.href = "/login"}
                >
                  Login
                </button>
              ) : (
                <NavLink id="profile-btn" to="/profile" className={`${TravelGoStyle.userIcon}`}>                  
                <i className={`fa-solid fa-user`}></i> {/* أيقونة البروفايل */}
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
