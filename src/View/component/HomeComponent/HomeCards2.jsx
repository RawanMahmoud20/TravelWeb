import { Fragment } from "react";
import TravelGoStyle from "../../../resourses/Css/cssModules/TravelGo.module.css";
import TravelGoLogo from "../../../resourses/image/LogoTravelGo.jpg"
import TravelGuides from "../../../resourses/image/TravelGuides.jpg"
import TravelGuides1 from "../../../resourses/image/TravelGuides1.jpg"
import TravelGuides2 from "../../../resourses/image/TravelGuides2.jpg"

const HomeCards2 = () => {
  return (
    <Fragment>
      <div className="blog pt-5 pb-5">
        <div className="container">
          <div
            className={`main-title text-center mt-5 mb-5 position-relative ${TravelGoStyle.mainTitle}`}
          >
            <img className={TravelGoStyle.logo} src={TravelGoLogo} alt="logo" />
            <h2>Read Our Blog </h2>
            <p className="text-black-50 text-uppercase">Now Stories</p>
          </div>
          <div className={`row ${TravelGoStyle.row}`}>
            <div className="col-md-6 col-lg-4">
              <div className={`card ${TravelGoStyle.card}`}>
                <img
                  src={TravelGuides}
                  className="card-img-top"
                  alt="Blog Post"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    A successful travel website is characterized by its clear
                    and oranized content, showcasing the most important trips
                    and offers, along with high-quality images that reflect the
                    beauty of tourist destions, it also includes sections that
                    make it easy for visitors to access the information they
                    need,such as trip details, prices, departure times, booking
                    methods, and reviews from previous customers. All these
                    elements contribute to a comfortable and enjoyable visitor
                    experience.
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={`card ${TravelGoStyle.card}`}>
                <img
                  src={TravelGuides1}
                  className="card-img-top"
                  alt="Blog Post"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    In addition, the tourism website helps build a strong
                    company image by showcasing its professionalism and
                    credibility, and displayind customer testimonials and
                    personal experiences. It also contributes to enhancing the
                    project's online presence and attracting visitors from
                    various countries, leading to increased brand awareness and
                    greater growth.
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={`card ${TravelGoStyle.card}`}>
                <img
                  src={TravelGuides2}
                  className="card-img-top"
                  alt="Blog Post"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Ultimately, a tourism website is the cornerstone of any
                    travel-related busuness; it's the first gateway through
                    which customers explore destionations and services.
                    Therefore, its design, content, and ease of use must be
                    carefully considered to ensure a memorable experience that
                    encourages visitors to return
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default HomeCards2;
