import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faCar,
  faBuilding,
  faFileMedical,
  faDatabase,
  faWifi,
  faCarCrash,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/theme.min.css";
import "./assets/scss/theme.scss";
import "./assets/css/custom.css";
import Lottie from "lottie-react";
import AD from "./assets/json/logolottie.json";
import HeroBG from "./assets/img/landing/digital-agency/hero-bg.svg";

function Home() {
  return (
    <>
      {/* <!-- Hero --> */}
      <section
        className="jarallax position-relative d-flex align-items-center min-vh-100 bg-light mb-5 py-lg-5 pt-5"
        data-jarallax
        data-img-position="0% 100%"
        data-speed="0.5"
      >
        <div className="container position-relative zindex-5 py-5">
          <div className="row justify-content-md-start justify-content-center">
            <div className="col-md-6 col-sm-8 order-md-1 order-2 d-flex flex-column justify-content-between mt-4 pt-2 text-md-start text-center">
              <div className="mb-md-5 pb-xl-5 mb-4">
                {/* <!-- Video popup btn --> */}
                <div className="d-inline-flex align-items-center position-relative mb-3">
                  <a
                    href="https://www.youtube.com/watch?v=zPo5ZaH6sW8"
                    className="btn btn-video btn-icon btn-lg flex-shrink-0 me-3 stretched-link"
                    data-bs-toggle="video"
                  >
                    <i className="bx bx-play"></i>
                  </a>
                  <h4 className="mb-0">Digital Agency Promo</h4>
                </div>

                {/* <!-- Text --> */}
                <h1 className="display-2 mb-md-5 mb-3 pb-3">
                  <span className="text-gradient-primary">Smart Receipts</span>{" "}
                  NFT Everything. NFT Anything.
                </h1>
                <div className="d-md-flex align-items-md-start">
                  <a
                    href="/minter"
                    className="btn btn-lg btn-primary flex-shrink-0 me-md-4 mb-md-0 mb-sm-4 mb-3"
                  >
                    Mint Something Now
                  </a>
                  <p className="d-lg-block d-none mb-0 ps-md-3">
                    Mint an NFT today for less than $0.01. Decent Data NFTs will
                    allow users to bridge IRL purchases into the Metaverse with
                    proof of purchase.
                  </p>
                </div>
              </div>

              {/* <!-- Scroll down btn --> */}
              <div className="d-inline-flex align-items-center justify-content-center justify-content-md-start position-relative">
                <a
                  href="#benefits"
                  data-scroll
                  data-scroll-offset="100"
                  className="btn btn-video btn-icon rounded-circle shadow-sm flex-shrink-0 stretched-link me-3"
                >
                  <i className="bx bx-chevron-down"></i>
                </a>
                <span className="fs-sm">Discover more</span>
              </div>
            </div>

            {/* <!-- Animated gfx --> */}
            <div className="col-sm-6 col-sm-6 col-9 order-md-2 order-1">
              {AD ? (
                <Lottie className="mx-auto" animationData={AD} loop />
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Benefits (features) --> */}
      <section className="container mb-5 pt-lg-5" id="benefits">
        <div
          className="swiper pt-3"
          data-swiper-options='{
      "slidesPerView": 1,
      "pagination": {
        "el": ".swiper-pagination",
        "clickable": true
      },
      "breakpoints": {
        "500": {
          "slidesPerView": 2
        },
        "991": {
          "slidesPerView": 3
        }
      }
    }'
        >
          <div className="swiper-wrapper">
            {/* <!-- Item --> */}
            <div className="swiper-slide border-end-lg px-2">
              <div className="text-center">
                <img
                  src="assets/img/landing/digital-agency/icons/idea.svg"
                  width="48"
                  alt="Bulb icon"
                  className="d-block mb-4 mx-auto"
                />
                <h4 className="mb-2 pb-1">Creative Solutions</h4>
                <p className="mx-auto" style={{ maxWidth: "336px" }}>
                  Sed morbi nulla pulvinar lectus tempor vel euismod accumsan.
                </p>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="swiper-slide border-end-lg px-2">
              <div className="text-center">
                <img
                  src="assets/img/landing/digital-agency/icons/award.svg"
                  width="48"
                  alt="Award icon"
                  className="d-block mb-4 mx-auto"
                />
                <h4 className="mb-2 pb-1">Award Winning</h4>
                <p className="mx-auto" style={{ maxWidth: "336px" }}>
                  Sit facilisis dolor arcu, fermentum vestibulum arcu elementum
                  imperdiet.
                </p>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="swiper-slide px-2">
              <div className="text-center">
                <img
                  src="assets/img/landing/digital-agency/icons/team.svg"
                  width="48"
                  alt="Team icon"
                  className="d-block mb-4 mx-auto"
                />
                <h4 className="mb-2 pb-1">Team of Professionals</h4>
                <p className="mx-auto" style={{ maxWidth: "336px" }}>
                  Nam venenatis urna aenean quis feugiat et senectus turpis.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Pagination (bullets) --> */}
          <div className="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
        </div>
      </section>

      {/* <!-- Featured Projects --> */}
      <section className="container mb-5 pt-lg-2 pt-xl-4 pb-2 pb-md-3 pb-lg-5">
        <h2 className="h1 mb-4 text-center">Featured Projects</h2>
        <p
          className="mb-4 mx-auto pb-3 fs-lg text-center"
          style={{ maxWidth: "636px" }}
        >
          We create websites and mobile apps, marketing materials, branding, web
          design, UX/UI design and illustrations.
        </p>

        {/* <!-- Portfolio grid --> */}
        <div className="masonry-grid row g-md-4 g-3 mb-4">
          {/* <!-- Item --> */}
          <div className="masonry-grid-item col-md-4 col-sm-6 col-12">
            <a
              href="portfolio-single-project.html"
              className="card card-portfolio card-hover bg-transparent border-0"
            >
              <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"></span>
                <div className="position-relative zindex-2">
                  <h3 className="h5 text-light mb-2">
                    Astronaut &amp; Flashing Neon Lights
                  </h3>
                  <span className="fs-sm text-light opacity-70">
                    3D Render / Graphic Design / Motion Design
                  </span>
                </div>
              </div>
              <div className="card-img">
                <img
                  src="assets/img/portfolio/grid/07.jpg"
                  className="rounded-3"
                  alt="Image"
                />
              </div>
            </a>
          </div>

          {/* <!-- Item --> */}
          <div className="masonry-grid-item col-md-4 col-sm-6 col-12">
            <a
              href="portfolio-single-project.html"
              className="card card-portfolio card-hover bg-transparent border-0"
            >
              <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"></span>
                <div className="position-relative zindex-2">
                  <h3 className="h5 text-light mb-2">
                    Plaster Antique Sculpture in a Pop Art Style
                  </h3>
                  <span className="fs-sm text-light opacity-70">
                    NFT / Graphic Design / Art / 3D
                  </span>
                </div>
              </div>
              <div className="card-img">
                <img
                  src="assets/img/portfolio/grid/08.jpg"
                  className="rounded-3"
                  alt="Image"
                />
              </div>
            </a>
          </div>

          {/* <!-- Item --> */}
          <div className="masonry-grid-item col-md-4 col-sm-6 col-12">
            <a
              href="portfolio-single-project.html"
              className="card card-portfolio card-hover bg-transparent border-0"
            >
              <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"></span>
                <div className="position-relative zindex-2">
                  <h3 className="h5 text-light mb-2">Big Blue Whale Shape</h3>
                  <span className="fs-sm text-light opacity-70">
                    3D Pollygonal Shape / Graphic Design / Art
                  </span>
                </div>
              </div>
              <div className="card-img">
                <img
                  src="assets/img/portfolio/grid/09.jpg"
                  className="rounded-3"
                  alt="Image"
                />
              </div>
            </a>
          </div>

          {/* <!-- Item --> */}
          <div className="masonry-grid-item col-md-8 col-12">
            <a
              href="portfolio-single-project.html"
              className="card card-portfolio card-hover bg-transparent border-0"
            >
              <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"></span>
                <div className="position-relative zindex-2">
                  <h3 className="h5 text-light mb-2">3D Shape Illustration</h3>
                  <span className="fs-sm text-light opacity-70">
                    3D Design / Illustration / Art
                  </span>
                </div>
              </div>
              <div className="card-img">
                <img
                  src="assets/img/portfolio/grid/10.jpg"
                  className="rounded-3"
                  alt="Image"
                />
              </div>
            </a>
          </div>
        </div>

        <div className="pt-md-3 pt-2 text-center">
          <a
            href="portfolio-grid.html"
            className="btn btn-lg btn-primary w-sm-auto w-100"
          >
            Explore all
          </a>
        </div>
      </section>

      {/* <!-- Services --> */}
      <section className="container mb-5 pb-2 pb-md-4 pb-lg-5">
        <div className="card border-0 bg-secondary p-md-5 px-sm-2 pt-4 pb-3">
          <div className="card-body mx-auto" style={{ maxWidth: "860px" }}>
            <h2 className="h1 mb-4 text-center">Our Competencies</h2>
            <p className="mb-4 pb-3 fs-lg text-center text-muted">
              We fully understand your business. If you need to update
              something, we are more than happy to help you with the services we
              are providing.
            </p>

            {/* <!-- Accordion: Alternative style --> */}
            <div className="accordion" id="accordion-services">
              {/* <!-- Item --> */}
              <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                <h3 className="accordion-header" id="heading-1">
                  <button
                    className="accordion-button fs-xl shadow-none rounded-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    Digital Marketing
                  </button>
                </h3>
                <div
                  className="accordion-collapse collapse show"
                  id="collapse-1"
                  aria-labelledby="heading-1"
                  data-bs-parent="#accordion-services"
                >
                  <div className="accordion-body pt-0">
                    <div className="d-flex flex-md-row flex-column align-items-md-center">
                      <img
                        src="assets/img/landing/digital-agency/services/01.png"
                        width="200"
                        alt="Digital Marketing"
                        className="me-md-4 mb-md-0 mb-3"
                      />
                      <div className="ps-md-3">
                        <p className="mb-0">
                          Nisi, sed accumsan tincidunt pulvinar sapien. Neque,
                          adipiscing posuere amet eget cursus mattis egestas nec
                          quam. Tellus in lectus volutpat tellus bibendum. Etiam
                          id phasellus in proin tristique. Semper habitasse
                          volutpat et urna dui sed in pellentesque purus.
                          Convallis viverra faucibus lacus nunc venenatis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Item --> */}
              <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                <h3 className="accordion-header" id="heading-2">
                  <button
                    className="accordion-button fs-xl shadow-none rounded-3 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="true"
                    aria-controls="collapse-2"
                  >
                    Web Development
                  </button>
                </h3>
                <div
                  className="accordion-collapse collapse"
                  id="collapse-2"
                  aria-labelledby="heading-2"
                  data-bs-parent="#accordion-services"
                >
                  <div className="accordion-body pt-0">
                    <div className="d-flex flex-md-row flex-column align-items-md-center">
                      <img
                        src="assets/img/landing/digital-agency/services/02.png"
                        width="200"
                        alt="Web Development"
                        className="me-md-4 mb-md-0 mb-3"
                      />
                      <div className="ps-md-3">
                        <p className="mb-0">
                          Vitae varius euismod egestas egestas lacus. Augue
                          vitae arcu sollicitudin metus iaculis amet, eu at
                          amet. Netus pulvinar tristique ridiculus sed. Viverra
                          ut viverra aenean nisl. Tortor lorem cum congue a.
                          Orci mattis massa tortor magna massa nisi, aliquet
                          risus. Ornare cras aenean pellentesque quam pulvinar
                          at. Libero mollis tortor erat sed. Adipiscing lectus
                          nisi commodo vel. Id augue vitae, hendrerit iaculis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Item --> */}
              <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                <h3 className="accordion-header" id="heading-3">
                  <button
                    className="accordion-button fs-xl shadow-none rounded-3 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="true"
                    aria-controls="collapse-3"
                  >
                    Application Development
                  </button>
                </h3>
                <div
                  className="accordion-collapse collapse"
                  id="collapse-3"
                  aria-labelledby="heading-3"
                  data-bs-parent="#accordion-services"
                >
                  <div className="accordion-body pt-0">
                    <div className="d-flex flex-md-row flex-column align-items-md-center">
                      <img
                        src="assets/img/landing/digital-agency/services/03.png"
                        width="200"
                        alt="Application Development"
                        className="me-md-4 mb-md-0 mb-3"
                      />
                      <div className="ps-md-3">
                        <p className="mb-0">
                          Morbi tristique justo, ut ac facilisi vel. Faucibus
                          tortor libero commodo maecenas commodo sed. Sapien,
                          vitae senectus turpis enim habitasse ipsum justo.
                          Sagittis vel tortor velit dapibus dictum facilisis
                          dictumst aliquam. Et, tempus euismod non semper vitae
                          egestas semper eget turpis. Eros, pellentesque sed ut
                          faucibus ac egestas leo metus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Item --> */}
              <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                <h3 className="accordion-header" id="heading-4">
                  <button
                    className="accordion-button fs-xl shadow-none rounded-3 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-4"
                    aria-expanded="true"
                    aria-controls="collapse-4"
                  >
                    Strategy
                  </button>
                </h3>
                <div
                  className="accordion-collapse collapse"
                  id="collapse-4"
                  aria-labelledby="heading-4"
                  data-bs-parent="#accordion-services"
                >
                  <div className="accordion-body pt-0">
                    <div className="d-flex flex-md-row flex-column align-items-md-center">
                      <img
                        src="assets/img/landing/digital-agency/services/04.png"
                        width="200"
                        alt="Strategy"
                        className="me-md-4 mb-md-0 mb-3"
                      />
                      <div className="ps-md-3">
                        <p className="mb-0">
                          Non bibendum mauris velit at enim. Vel tellus nunc
                          malesuada pellentesque feugiat nibh mauris blandit.
                          Tempus, ut vulputate feugiat quis molestie sit eu
                          blandit rhoncus. Iaculis eget magna sit eget eget
                          massa. Diam nunc dolor tristique lectus imperdiet.
                          Nunc, vitae etiam venenatis arcu turpis sollicitudin
                          amet sit. Ac dapibus non erat sed. Auctor eleifend
                          mattis scelerisque gravida felis nibh. Habitant
                          nascetur turpis ullamcorper.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Item --> */}
              <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                <h3 className="accordion-header" id="heading-5">
                  <button
                    className="accordion-button fs-xl shadow-none rounded-3 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-5"
                    aria-expanded="true"
                    aria-controls="collapse-5"
                  >
                    Digital Advertising
                  </button>
                </h3>
                <div
                  className="accordion-collapse collapse"
                  id="collapse-5"
                  aria-labelledby="heading-5"
                  data-bs-parent="#accordion-services"
                >
                  <div className="accordion-body pt-0">
                    <div className="d-flex flex-md-row flex-column align-items-md-center">
                      <img
                        src="assets/img/landing/digital-agency/services/05.png"
                        width="200"
                        alt="Digital Advertising"
                        className="me-md-4 mb-md-0 mb-3"
                      />
                      <div className="ps-md-3">
                        <p className="mb-0">
                          Nulla odio diam, arcu dictum neque nec cursus. Vel,
                          aliquam nisl ridiculus sed. Pulvinar lectus ac
                          pellentesque sollicitudin tristique aliquet
                          ullamcorper in eu. Tincidunt porta magna faucibus
                          neque, nunc gravida sagittis. Ut tellus sed odio
                          laoreet. Molestie sit viverra maecenas nisl felis
                          consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Brands (Carousel) --> */}
      <section className="container pb-4 pb-lg-5 mb-3">
        <div className="d-flex align-items-center justify-content-md-between justify-content-center mb-md-4 mb-3">
          <h2 className="mb-0">Trusted by Awesome Clients</h2>

          {/* <!-- Slider prev/next buttons + Quotation mark --> */}
          <div className="d-md-flex d-none ms-4">
            <button
              type="button"
              id="prev-brand"
              className="btn btn-prev btn-icon btn-sm me-2"
            >
              <i className="bx bx-chevron-left"></i>
            </button>
            <button
              type="button"
              id="next-brand"
              className="btn btn-next btn-icon btn-sm ms-2"
            >
              <i className="bx bx-chevron-right"></i>
            </button>
          </div>
        </div>
        <div
          className="swiper mx-n2"
          data-swiper-options='{
      "slidesPerView": 2,
      "navigation": {
        "prevEl": "#prev-brand",
        "nextEl": "#next-brand"
      },
      "loop": true,
      "pagination": {
        "el": ".swiper-pagination",
        "clickable": true
      },
      "breakpoints": {
        "500": {
          "slidesPerView": 3,
          "spaceBetween": 8
        },
        "650": {
          "slidesPerView": 4,
          "spaceBetween": 8
        },
        "900": {
          "slidesPerView": 5,
          "spaceBetween": 8
        },
        "1100": {
          "slidesPerView": 6,
          "spaceBetween": 8
        }
      }
    }'
        >
          <div className="swiper-wrapper">
            {/* <!-- Item --> */}
            <div className="swiper-slide py-3">
              <a href="#" className="card card-body card-hover px-2 mx-2">
                <img
                  src="assets/img/brands/01.svg"
                  className="d-block mx-auto my-2"
                  width="154"
                  alt="Brand"
                />
              </a>
            </div>

            {/* <!-- Item --> */}
            <div className="swiper-slide py-3">
              <a href="#" className="card card-body card-hover px-2 mx-2">
                <img
                  src="assets/img/brands/02.svg"
                  className="d-block mx-auto my-2"
                  width="154"
                  alt="Brand"
                />
              </a>
            </div>

            {/* <!-- Item --> */}
            <div className="swiper-slide py-3">
              <a href="#" className="card card-body card-hover px-2 mx-2">
                <img
                  src="assets/img/brands/03.svg"
                  className="d-block mx-auto my-2"
                  width="154"
                  alt="Brand"
                />
              </a>
            </div>

            {/* <!-- Item --> */}
            <div className="swiper-slide py-3">
              <a href="#" className="card card-body card-hover px-2 mx-2">
                <img
                  src="assets/img/brands/04.svg"
                  className="d-block mx-auto my-2"
                  width="154"
                  alt="Brand"
                />
              </a>
            </div>

            {/* <!-- Item --> */}
            <div className="swiper-slide py-3">
              <a href="#" className="card card-body card-hover px-2 mx-2">
                <img
                  src="assets/img/brands/05.svg"
                  className="d-block mx-auto my-2"
                  width="154"
                  alt="Brand"
                />
              </a>
            </div>

            {/* <!-- Item --> */}
            <div className="swiper-slide py-3">
              <a href="#" className="card card-body card-hover px-2 mx-2">
                <img
                  src="assets/img/brands/06.svg"
                  className="d-block mx-auto my-2"
                  width="154"
                  alt="Brand"
                />
              </a>
            </div>

            {/* <!-- Item --> */}
            <div className="swiper-slide py-3">
              <a href="#" className="card card-body card-hover px-2 mx-2">
                <img
                  src="assets/img/brands/01.svg"
                  className="d-block mx-auto my-2"
                  width="154"
                  alt="Brand"
                />
              </a>
            </div>

            {/* <!-- Item --> */}
            <div className="swiper-slide py-3">
              <a href="#" className="card card-body card-hover px-2 mx-2">
                <img
                  src="assets/img/brands/02.svg"
                  className="d-block mx-auto my-2"
                  width="154"
                  alt="Brand"
                />
              </a>
            </div>

            {/* <!-- Item --> */}
            <div className="swiper-slide py-3">
              <a href="#" className="card card-body card-hover px-2 mx-2">
                <img
                  src="assets/img/brands/03.svg"
                  className="d-block mx-auto my-2"
                  width="154"
                  alt="Brand"
                />
              </a>
            </div>

            {/* <!-- Item --> */}
            <div className="swiper-slide py-3">
              <a href="#" className="card card-body card-hover px-2 mx-2">
                <img
                  src="assets/img/brands/04.svg"
                  className="d-block mx-auto my-2"
                  width="154"
                  alt="Brand"
                />
              </a>
            </div>

            {/* <!-- Item --> */}
            <div className="swiper-slide py-3">
              <a href="#" className="card card-body card-hover px-2 mx-2">
                <img
                  src="assets/img/brands/05.svg"
                  className="d-block mx-auto my-2"
                  width="154"
                  alt="Brand"
                />
              </a>
            </div>

            {/* <!-- Item --> */}
            <div className="swiper-slide py-3">
              <a href="#" className="card card-body card-hover px-2 mx-2">
                <img
                  src="assets/img/brands/06.svg"
                  className="d-block mx-auto my-2"
                  width="154"
                  alt="Brand"
                />
              </a>
            </div>
          </div>

          {/* <!-- Pagination (bullets) --> */}
          <div className="swiper-pagination position-relative pt-3 mt-4 d-md-none d-flex"></div>
        </div>
      </section>
    </>
  );
}

export default Home;
