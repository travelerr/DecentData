import { Nav } from "react-bootstrap";
import Logo from "../assets/img/Transparent.png";
import AppStoreLight from "../assets/img/icons/appstore-light.svg";
import AppStoreDark from "../assets/img/icons/appstore-dark.svg";
import GooglePlayLight from "../assets/img/icons/googleplay-light.svg";
import GooglePlayDark from "../assets/img/icons/googleplay-dark.svg";
import BuiltOnEthereum from "../assets/img/icons/built-on-eth.png";

function Footer() {
  return (
    <>
      <footer className="footer pt-5 pb-4 pb-lg-5">
        <div className="container text-center pt-lg-3">
          <div className="navbar-brand justify-content-center text-dark mb-2 mb-lg-4">
            <img src={Logo} className="me-2" width="300" alt="decentdata" />
          </div>
          <ul className="nav justify-content-center pt-3 pb-4 pb-lg-5">
            <li className="nav-item">
              <Nav.Link href="/">Home</Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="/minter">Minter</Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="/roadmap">Roadmap</Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="/how-to">How To</Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="/faq">FAQ</Nav.Link>
            </li>
          </ul>
          <div className="d-flex flex-column flex-sm-row justify-content-center">
            <div>
              <p className="me-sm-4" style={{ fontWeight: "700" }}>
                Coming Soon
              </p>
              <a
                href="#"
                className="btn btn-dark btn-lg px-3 py-2 me-sm-4 mb-3"
              >
                <img
                  src={AppStoreLight}
                  className="light-mode-img"
                  width="124"
                  alt="App Store"
                />
                <img
                  src={AppStoreDark}
                  className="dark-mode-img"
                  width="124"
                  alt="App Store"
                />
              </a>
            </div>
            <div>
              <p style={{ fontWeight: "700" }}>Coming Soon</p>
              <a href="#" className="btn btn-dark btn-lg px-3 py-2 mb-3">
                <img
                  src={GooglePlayLight}
                  className="light-mode-img"
                  width="139"
                  alt="Google Play"
                />
                <img
                  src={GooglePlayDark}
                  className="dark-mode-img"
                  width="139"
                  alt="Google Play"
                />
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-center pt-4 mt-lg-3">
            <a
              href="#"
              className="btn btn-icon btn-secondary btn-facebook mx-2"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="#"
              className="btn btn-icon btn-secondary btn-instagram mx-2"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="btn btn-icon btn-secondary btn-twitter mx-2">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="btn btn-icon btn-secondary btn-youtube mx-2">
              <i className="bx bxl-youtube"></i>
            </a>
            <a
              href="https://discord.gg/CsQ96hZe"
              target="_blank"
              className="btn btn-icon btn-secondary btn-discord mx-2"
            >
              <i className="bx bxl-discord"></i>
            </a>
          </div>
        </div>
      </footer>
      <div className="eth-branding" style={{ backgroundColor: "#f7f7f7" }}>
        {" "}
        <img
          src={BuiltOnEthereum}
          style={{ maxWidth: "150px" }}
          alt="Built on Ethereum"
        />{" "}
      </div>
    </>
  );
}

export default Footer;
