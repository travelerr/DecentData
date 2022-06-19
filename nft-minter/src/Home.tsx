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
import Lottie from "lottie-react";
import AD from "./assets/json/logolottie.json";
import EthGod from "./assets/img/homepage/team/eth-god.jpg";
import travelerrrrrrr from "./assets/img/homepage/team/travelerrrrrrr.jpg";
import Gnosis from "./assets/img/partners/Gnosis.svg";
import IPFS from "./assets/img/partners/IPFS.png";
import MetaMask from "./assets/img/partners/MetaMask.svg";
import Ramp from "./assets/img/partners/Ramp.svg";
import XDai from "./assets/img/partners/XDai.svg";

function Home() {
  return (
    <>
      {/* <!-- Hero --> */}
      <section
        className="jarallax position-relative d-flex align-items-center min-vh-100 bg-light py-lg-5 pt-5"
        data-jarallax
        data-img-position="0% 100%"
        data-speed="0.5"
      >
        <div className="container position-relative zindex-5 py-5">
          <div className="row justify-content-md-start justify-content-center">
            <div className="col-md-6 col-sm-8 order-md-1 order-2 d-flex flex-column justify-content-between mt-4 pt-2 text-md-start text-center">
              <div className="mb-md-5 pb-xl-5 mb-4">
                {/* <!-- Twitter btn --> */}
                <div className="d-inline-flex align-items-center position-relative mb-3">
                  <a
                    href="https://twitter.com/decentdata_0x"
                    target="_blank"
                    className="btn btn-video btn-icon btn-lg flex-shrink-0 me-3 twitter-button stretched-link"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <h4 className="mb-0">@decentdata_0x</h4>
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
                  href="#roadmap-sectors"
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

      {/* <!-- Roadmap Sectors --> */}
      <section
        id="roadmap-sectors"
        className="mt-n1 mt-md-0 py-5 position-relative zindex-5"
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "#ffffff0d" }}
        ></div>
        <div className="container">
          <div className="row justify-content-center text-center pt-md-3 pb-4 py-lg-5 mb-1">
            <div className="col-xl-8 col-lg-9 col-md-10">
              <h2 className="h1 mb-lg-4">Roadmap Sectors</h2>
              <p className="fs-lg text-muted mb-0">
                Web3 is the internet of tomorrow and all industries are ready to
                be distrupted. Start using decentralized data today.
              </p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 g-sm-3 g-lg-4 pb-md-3 pb-lg-5">
            {/* <!-- Item --> */}
            <div className="col">
              <div className="card card-body card-hover bg-light border-0">
                <div className="d-flex justify-content-center">
                  <FontAwesomeIcon
                    icon={faStore}
                    className="d-block mb-4 text-gradient-primary"
                    style={{ fontSize: "50px" }}
                    width="56"
                  />
                  <p style={{ marginLeft: "1em" }}>eCommerce</p>
                </div>
                <p className="mb-0">
                  Pair online merchandise sales as an NFT representation of the
                  item. All its take is a single click at checkout for your
                  customer.
                </p>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="col">
              <div className="card card-body card-hover bg-light border-0">
                <div className="d-flex justify-content-center">
                  <FontAwesomeIcon
                    icon={faCar}
                    className="d-block mb-4 text-gradient-primary"
                    style={{ fontSize: "50px" }}
                    width="56"
                  />
                  <p
                    style={{ marginLeft: "1em" }}
                    className="text-gradient-primary"
                  >
                    Automotive
                  </p>
                </div>
                <p className="mb-0">
                  Provide your customers with an NFT representing ownership of
                  their new car. Its authentic, immutable and transferrable.
                </p>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="col">
              <div className="card card-body card-hover bg-light border-0">
                <div className="d-flex justify-content-center">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="d-block mb-4 text-gradient-primary"
                    style={{ fontSize: "50px" }}
                    width="56"
                  />
                  <p
                    style={{ marginLeft: "1em" }}
                    className="text-gradient-primary"
                  >
                    Real Estate
                  </p>
                </div>
                <p className="mb-0">
                  Perfect for real estate agents. Offer you clients an NFT
                  representing their new home. Plot, address, sq footage
                </p>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="col">
              <div className="card card-body card-hover bg-light border-0">
                <div className="d-flex justify-content-center">
                  <FontAwesomeIcon
                    icon={faFileMedical}
                    className="d-block mb-4 text-gradient-primary"
                    style={{ fontSize: "50px" }}
                    width="56"
                  />
                  <p
                    style={{ marginLeft: "1em" }}
                    className="text-gradient-primary"
                  >
                    Medical Records
                  </p>
                </div>
                <p className="mb-0">
                  Privacy? Not a problem. Keep personal medical records secure
                  yet always accessible by ONLY you.
                </p>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="col">
              <div className="card card-body card-hover bg-light border-0">
                <div className="d-flex justify-content-center">
                  <FontAwesomeIcon
                    icon={faDatabase}
                    className="d-block mb-4 text-gradient-primary"
                    style={{ fontSize: "50px" }}
                    width="56"
                  />
                  <p
                    style={{ marginLeft: "1em" }}
                    className="text-gradient-primary"
                  >
                    Big Data
                  </p>
                </div>
                <p className="mb-0">
                  Working with large data? We can store it. By cryptographically
                  hashing your data you can use a reverse algorithm to reproduce
                  it exactly the way you want, knowing no chnages have been made
                  to it.
                </p>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="col">
              <div className="card card-body card-hover bg-light border-0">
                <div className="d-flex justify-content-center">
                  <FontAwesomeIcon
                    icon={faWifi}
                    className="d-block mb-4 text-gradient-primary"
                    style={{ fontSize: "50px" }}
                    width="56"
                  />
                  <p
                    style={{ marginLeft: "1em" }}
                    className="text-gradient-primary"
                  >
                    DNS
                  </p>
                </div>
                <p className="mb-0">
                  Prove website ownership with a decentralized record of your
                  DNS
                </p>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="col">
              <div className="card card-body card-hover bg-light border-0">
                <div className="d-flex justify-content-center">
                  <FontAwesomeIcon
                    icon={faCarCrash}
                    className="d-block mb-4 text-gradient-primary"
                    style={{ fontSize: "50px" }}
                    width="56"
                  />
                  <p
                    style={{ marginLeft: "1em" }}
                    className="text-gradient-primary"
                  >
                    Insurance
                  </p>
                </div>
                <p className="mb-0">
                  Keep your insurance records secure, accessible and provable
                </p>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="col">
              <div className="card card-body card-hover bg-light border-0">
                <div className="d-flex justify-content-center">
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    className="d-block mb-4 text-gradient-primary"
                    style={{ fontSize: "50px" }}
                    width="56"
                  />
                  <p
                    style={{ marginLeft: "1em" }}
                    className="text-gradient-primary"
                  >
                    Proof of Attendance
                  </p>
                </div>
                <p className="mb-0">
                  Provide event attendess a custom NFT as proof they were there
                  - conferences, concerts and sporting events
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Team --> */}
      <section className="container mb-5 pt-lg-2 pt-xl-4 pb-2 pb-md-3 pb-lg-5">
        <h2 className="h1 mb-4 text-center">Meet the Team</h2>
        <p
          className="mb-4 mx-auto pb-3 fs-lg text-center"
          style={{ maxWidth: "636px" }}
        ></p>

        {/* <!-- Team grid --> */}
        <div className="masonry-grid row g-md-4 g-3 mb-4">
          {/* <!-- Item --> */}
          <div className="masonry-grid-item col-md-4 col-sm-6 col-12">
            <a
              href="#"
              className="card card-portfolio card-hover bg-transparent border-0"
            >
              <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"></span>
                <div className="position-relative zindex-2">
                  <h3 className="h5 text-light mb-2">ETH Gods</h3>
                  <span className="fs-sm text-light opacity-70">
                    Providing The Nodes
                  </span>
                </div>
              </div>
              <div className="card-img">
                <img src={EthGod} className="rounded-3" alt="Image" />
              </div>
            </a>
          </div>

          {/* <!-- Item --> */}
          <div className="masonry-grid-item col-md-4 col-sm-6 col-12">
            <a
              href="#"
              className="card card-portfolio card-hover bg-transparent border-0"
            >
              <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"></span>
                <div className="position-relative zindex-2">
                  <h3 className="h5 text-light mb-2">Travelerrrrrrr</h3>
                  <span className="fs-sm text-light opacity-70">
                    Providing The Codes
                  </span>
                </div>
              </div>
              <div className="card-img">
                <img src={travelerrrrrrr} className="rounded-3" alt="Image" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* <!-- What Were Using --> */}
      <section className="container pb-4 pb-lg-5 mb-3">
        <div className="d-flex align-items-center justify-content-md-between justify-content-center mb-md-4 mb-3">
          <h2 className="mb-0">Who We're Working With</h2>

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
          <div className="swiper-wrapper partner-swiper">
            {/* <!-- Item --> */}
            <div className="swiper-slide py-3">
              <a
                href="#"
                className="card partner-card card-body card-hover px-2 mx-2"
              >
                <img
                  src={Gnosis}
                  className="d-block mx-auto my-2"
                  width="154"
                  alt="Brand"
                />
              </a>
            </div>

            {/* <!-- Item --> */}
            <div className="swiper-slide py-3">
              <a
                href="#"
                className="card partner-card card-body card-hover px-2 mx-2"
              >
                <img
                  src={IPFS}
                  className="d-block mx-auto my-2"
                  width="154"
                  alt="Brand"
                />
              </a>
            </div>

            {/* <!-- Item --> */}
            <div className="swiper-slide py-3">
              <a
                href="#"
                className="card partner-card card-body card-hover px-2 mx-2"
              >
                <img
                  src={MetaMask}
                  className="d-block mx-auto my-2"
                  width="154"
                  alt="Brand"
                />
              </a>
            </div>

            {/* <!-- Item --> */}
            <div className="swiper-slide py-3">
              <a
                href="#"
                className="card partner-card card-body card-hover px-2 mx-2"
              >
                <img
                  src={Ramp}
                  className="d-block mx-auto my-2"
                  width="154"
                  alt="Brand"
                />
              </a>
            </div>

            {/* <!-- Item --> */}
            <div className="swiper-slide py-3">
              <a
                href="#"
                className="card partner-card team-card card-body card-hover px-2 mx-2"
              >
                <img
                  src={XDai}
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
