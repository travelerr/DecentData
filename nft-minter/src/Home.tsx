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
import layer01 from "./assets/img/home/layer01.png";
import layer02 from "./assets/img/home/layer02.png";

function Home() {
  return (
    <>
      <section className="position-relative">
        <div className="position-relative background1 bg-dark zindex-4 pt-lg-3 pt-xl-5">
          {/* Text  */}
          <div className="container zindex-5 pt-5">
            <div className="row justify-content-center text-center pt-4 pb-sm-2 py-lg-5">
              <div className="col-xl-8 col-lg-9 col-md-10 py-5">
                <h1 className="display-4 text-light pt-sm-2 pb-1 pb-sm-3 mb-3">
                  NFT Anything. NFT Everything.
                </h1>
                <p className="display-6 text-light pt-sm-2 pb-1 pb-sm-3 mb-3">
                  Decentralized Data at Your Fingertips.
                </p>
                <p className="fs-lg text-light opacity-70 pb-2 pb-sm-0 mb-4 mb-sm-5">
                  Store you data decentralized and encrypted with an NFT to
                  prove it. For Free!
                </p>
                <a
                  href="/minter"
                  className="btn btn-primary shadow-primary btn-lg"
                >
                  Mint Something Now
                </a>
              </div>
            </div>
          </div>
          {/* Bottom shape  */}
          <div className="d-flex position-absolute background-gradient top-100 start-0 w-100 overflow-hidden mt-n4">
            <div
              className="position-relative start-50 translate-middle-x flex-shrink-0"
              style={{ width: "3788px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3788"
                height="144"
                viewBox="0 0 3788 144"
              >
                <defs>
                  <linearGradient id="home-shape-gradient" x2="0.35" y2="1">
                    <stop offset="0%" stop-color="#0f0a32" />
                    <stop offset="100%" stop-color="#1f1c2d" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#home-shape-gradient)"
                  d="M0,0h3788.7c-525,90.2-1181.7,143.9-1894.3,143.9S525,90.2,0,0z"
                />
              </svg>
            </div>
          </div>
          <div className="d-none d-lg-block" style={{ height: "300px" }}></div>
          <div
            className="d-none d-md-block d-lg-none"
            style={{ height: "150px" }}
          ></div>
        </div>
        <div
          className="position-relative zindex-5 mx-auto"
          style={{ maxWidth: "1250px" }}
        >
          <div
            className="d-none d-lg-block"
            style={{ marginTop: "-300px" }}
          ></div>
          <div
            className="d-none d-md-block d-lg-none"
            style={{ marginTop: "-150px" }}
          ></div>
          {/* Parallax (3D Tilt) gfx */}
          <div
            className="tilt-3d"
            data-tilt
            data-tilt-full-page-listening
            data-tilt-max="12"
            data-tilt-perspective="1200"
          >
            <img src={layer01} alt="Dashboard" />
            <div className="tilt-3d-inner position-absolute top-0 start-0 w-100 h-100">
              <img src={layer02} alt="Cards" />
            </div>
          </div>
        </div>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(255,255,255,.05)" }}
        ></div>
      </section>
      {/* <!-- Integrations --> */}
      <section className="mt-n1 mt-md-0 py-5 position-relative zindex-5">
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "#ffffff0d" }}
        ></div>
        <div className="container">
          <div className="row justify-content-center text-center pt-md-3 pb-4 py-lg-5 mb-1">
            <div className="col-xl-8 col-lg-9 col-md-10">
              <h2 className="h1 mb-lg-4">Sectors We Work In</h2>
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
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faStore}
                    className="d-block mb-4"
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
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faCar}
                    className="d-block mb-4"
                    style={{ fontSize: "50px" }}
                    width="56"
                  />
                  <p style={{ marginLeft: "1em" }}>Automotive</p>
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
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="d-block mb-4"
                    style={{ fontSize: "50px" }}
                    width="56"
                  />
                  <p style={{ marginLeft: "1em" }}>Real Estate</p>
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
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faFileMedical}
                    className="d-block mb-4"
                    style={{ fontSize: "50px" }}
                    width="56"
                  />
                  <p style={{ marginLeft: "1em" }}>Medical Records</p>
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
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faDatabase}
                    className="d-block mb-4"
                    style={{ fontSize: "50px" }}
                    width="56"
                  />
                  <p style={{ marginLeft: "1em" }}>Big Data</p>
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
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faWifi}
                    className="d-block mb-4"
                    style={{ fontSize: "50px" }}
                    width="56"
                  />
                  <p style={{ marginLeft: "1em" }}>DNS</p>
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
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faCarCrash}
                    className="d-block mb-4"
                    style={{ fontSize: "50px" }}
                    width="56"
                  />
                  <p style={{ marginLeft: "1em" }}>Insurance</p>
                </div>
                <p className="mb-0">
                  Keep your insurance records secure, accessible and provable
                </p>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="col">
              <div className="card card-body card-hover bg-light border-0">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    className="d-block mb-4"
                    style={{ fontSize: "50px" }}
                    width="56"
                  />
                  <p style={{ marginLeft: "1em" }}>Proof of Attendance</p>
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
    </>
  );
}

export default Home;
