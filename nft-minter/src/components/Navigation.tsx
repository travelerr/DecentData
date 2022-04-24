import { Nav, Button } from "react-bootstrap";
import Logo from "../assets/img/Logohorizontal.png";

function Navigation(props: any) {
  const { darkModeHandler, connectWalletPressed, walletAddress, chainID } =
    props;

  return (
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
        <div className="d-flex align-items-center w-100">
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
          <Button
            type="button"
            className="navbar-toggler d-block d-lg-none ms-auto me-4"
            data-bs-toggle="offcanvas"
            data-bs-target="#componentsNav"
            aria-controls="componentsNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div style={{ marginRight: "1em", fontWeight: "700" }}>
            {chainID === "0x1" ? "ETH" : ""}
            {chainID === "0x3" ? "ROP" : ""}
            {chainID === "0x4" ? "RINK" : ""}
            {chainID === "0x5" ? "GOERLI" : ""}
            {chainID === "0x2a" ? "KOVAN" : ""}
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
    </header>
  );
}

export default Navigation;
