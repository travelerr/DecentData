import { Nav, Button } from "react-bootstrap";
import Logo from "../assets/img/Logohorizontal.png";

function Navigation(props: any) {
  const { darkModeHandler, connectWalletPressed, walletAddress, chainID } =
    props;

  return (
    <>
      <header
        className="header navbar navbar-expand navbar-light bg-light border-bottom border-light shadow fixed-top"
        data-scroll-header
      >
        <div className="container-fluid pe-lg-4">
          <div className="d-flex align-items-center">
            <a href="/" className="navbar-brand flex-shrink-0 py-1 py-lg-2">
              <img src={Logo} width="225" alt="Decent Data" />
            </a>
          </div>
          <div className="d-flex justify-content-end  align-items-center w-100">
            <ul
              className="navbar-nav d-none d-lg-flex"
              style={{ paddingLeft: "11.75rem" }}
            >
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
                <Nav.Link href="/faq">FAQ</Nav.Link>
              </li>
            </ul>
            <div
              className="form-check form-switch mode-switch pe-lg-1 ms-lg-auto"
              data-bs-toggle="mode"
              style={{ marginRight: "1em" }}
            >
              <input
                type="checkbox"
                className="form-check-input"
                onChange={darkModeHandler}
                id="theme-mode"
              />
              <label
                className="form-check-label d-none d-sm-block d-lg-none d-xl-block"
                htmlFor="theme-mode"
              >
                Light
              </label>
              <label
                className="form-check-label d-none d-sm-block d-lg-none d-xl-block"
                htmlFor="theme-mode"
              >
                Dark
              </label>
            </div>
            <div className="hide-under-767">
              <div style={{ marginRight: "1em", fontWeight: "700" }}>
                {chainID === "0x1" ? "ETH" : ""}
                {chainID === "0x3" ? "ROP" : ""}
                {chainID === "0x4" ? "RINK" : ""}
                {chainID === "0x5" ? "GOERLI" : ""}
                {chainID === "0x2a" ? "KOVAN" : ""}
                {chainID === "0x64" ? "GNOSIS" : ""}
              </div>
              <Button
                className="my-auto"
                id="walletButton"
                onClick={connectWalletPressed}
              >
                {walletAddress.length > 0 ? (
                  "Connected: " +
                  String(walletAddress).substring(0, 6) +
                  "..." +
                  String(walletAddress).substring(38)
                ) : (
                  <span>Connect Wallet</span>
                )}
              </Button>
            </div>
            <Button
              type="button"
              className="navbar-toggler d-block d-lg-none mx-3"
              data-bs-toggle="offcanvas"
              style={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
              data-bs-target="#componentsNav"
              aria-controls="componentsNav"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </Button>
          </div>
        </div>
      </header>

      <aside
        id="componentsNav"
        className="offcanvas offcanvas-start position-fixed top-0 start-0 vh-100 bg-light border-end-lg"
        style={{ width: "21rem" }}
      >
        <div className="offcanvas-header d-none d-lg-flex justify-content-start">
          <a
            href="typography.html"
            className="navbar-brand text-dark d-none d-lg-flex py-0"
          >
            <img src="../assets/img/logo.svg" width="47" alt="Silicon" />
            Silicon
          </a>
          <span className="badge bg-warning d-none d-lg-inline-block">
            UI Kit
          </span>
        </div>
        <div className="offcanvas-header d-block d-lg-none border-bottom">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h5 className="d-lg-none mb-0">Menu</h5>
            <button
              type="button"
              className="btn-close d-lg-none"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <div className="d-flex">
            <a
              href="../index.html"
              className="btn btn-outline-primary btn-sm fs-sm w-100 rounded me-2"
            >
              <i className="bx bx-desktop fs-base me-2"></i>
              Preview
            </a>
            <a
              href="../docs/getting-started.html"
              className="btn btn-outline-success btn-sm fs-sm w-100 rounded"
            >
              <i className="bx bx-file fs-base me-2"></i>
              Docs
            </a>
          </div>
        </div>
        <div
          className="offcanvas-body swiper scrollbar-hover overflow-hidden w-100 p-4"
          data-swiper-options='{
        "direction": "vertical",
        "slidesPerView": "auto",
        "freeMode": true,
        "scrollbar": {
          "el": ".swiper-scrollbar"
        },
        "mousewheel": true
      }'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide h-auto">
              <div className="list-group list-group-flush pb-3 mb-4 mx-n4">
                <a
                  href="/"
                  className="list-group-item list-group-item-action border-0 py-2 px-4"
                >
                  Home
                </a>
                <a
                  href="/minter"
                  className="list-group-item list-group-item-action border-0 py-2 px-4"
                >
                  Minter
                </a>
                <a
                  href="/roadmap"
                  className="list-group-item list-group-item-action border-0 py-2 px-4"
                >
                  Roadmap
                </a>
                <a
                  href="/faq"
                  className="list-group-item list-group-item-action border-0 py-2 px-4"
                >
                  FAQ
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-scrollbar end-0"></div>
        </div>
        <div className="offcanvas-footer border-top d-flex justify-content-center">
          <div>
            <div style={{ marginRight: "1em", fontWeight: "700" }}>
              {chainID === "0x1" ? "ETH" : ""}
              {chainID === "0x3" ? "ROP" : ""}
              {chainID === "0x4" ? "RINK" : ""}
              {chainID === "0x5" ? "GOERLI" : ""}
              {chainID === "0x2a" ? "KOVAN" : ""}
              {chainID === "0x64" ? "GNOSIS" : ""}
            </div>
            <Button
              className="my-auto"
              id="walletButton"
              onClick={connectWalletPressed}
            >
              {walletAddress.length > 0 ? (
                "Connected: " +
                String(walletAddress).substring(0, 6) +
                "..." +
                String(walletAddress).substring(38)
              ) : (
                <span>Connect Wallet</span>
              )}
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navigation;
