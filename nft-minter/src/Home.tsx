import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";
import {
  connectWallet,
  getCurrentWalletConnected,
  mintNFT,
} from "./utils/interact.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/theme.min.css";
import "./assets/scss/theme.scss";
import "./assets/css/custom.css";

function Home() {
  const [darkModeEnabled, setDarkModeEnabled] = useState<boolean>(false);
  const [walletAddress, setWallet] = useState<string>("");
  const [status, setStatus] = useState<any>();

  const darkModeHandler = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const addWalletListener = () => {
    if ((window as any).ethereum.request.ethereum) {
      (window as any).ethereum.request.ethereum.on(
        "accountsChanged",
        (accounts: any) => {
          if (accounts.length > 0) {
            setWallet(accounts[0]);
            setStatus("👆🏽 Write a message in the text-field above.");
          } else {
            setWallet("");
            setStatus("🦊 Connect to Metamask using the top right button.");
          }
        }
      );
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  };

  useEffect(() => {
    async function fetchData() {
      const { address, status } = await getCurrentWalletConnected();
      setWallet(address);
      setStatus(status);

      addWalletListener();
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="body" style={{ paddingTop: "4rem" }}>
        <section className="position-relative">
          <div className="position-relative bg-dark zindex-4 pt-lg-3 pt-xl-5">
            {/* Text  */}
            <div className="container zindex-5 pt-5">
              <div className="row justify-content-center text-center pt-4 pb-sm-2 py-lg-5">
                <div className="col-xl-8 col-lg-9 col-md-10 py-5">
                  <h1 className="display-4 text-light pt-sm-2 pb-1 pb-sm-3 mb-3">
                    Task Management Assistant You Gonna Love
                  </h1>
                  <p className="fs-lg text-light opacity-70 pb-2 pb-sm-0 mb-4 mb-sm-5">
                    We offer you a new generation of task and project management
                    system. Plan, manage and track all your tasks in one
                    flexible software!
                  </p>
                  <a href="#" className="btn btn-primary shadow-primary btn-lg">
                    Get early access
                  </a>
                </div>
              </div>
            </div>
            {/* Bottom shape  */}
            <div
              className="d-flex position-absolute top-100 start-0 w-100 overflow-hidden mt-n4 mt-sm-n1"
              style={{ color: "var(--bs-gray-900);" }}
            >
              <div
                className="position-relative start-50 translate-middle-x flex-shrink-0"
                style={{ width: "3788px;" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3788"
                  height="144"
                  viewBox="0 0 3788 144"
                >
                  <path
                    fill="currentColor"
                    d="M0,0h3788.7c-525,90.2-1181.7,143.9-1894.3,143.9S525,90.2,0,0z"
                  />
                </svg>
              </div>
            </div>
            <div
              className="d-none d-lg-block"
              style={{ height: "300px;" }}
            ></div>
            <div
              className="d-none d-md-block d-lg-none"
              style={{ height: "150px;" }}
            ></div>
          </div>
          <div
            className="position-relative zindex-5 mx-auto"
            style={{ maxWidth: "1250px;" }}
          >
            <div
              className="d-none d-lg-block"
              style={{ marginTop: "-300px;" }}
            ></div>
            <div
              className="d-none d-md-block d-lg-none"
              style={{ marginTop: "-150px;" }}
            ></div>
            {/* Parallax (3D Tilt) gfx */}
            <div
              className="tilt-3d"
              data-tilt
              data-tilt-full-page-listening
              data-tilt-max="12"
              data-tilt-perspective="1200"
            >
              <img
                src="assets/img/landing/saas-2/hero/layer01.png"
                alt="Dashboard"
              />
              <div className="tilt-3d-inner position-absolute top-0 start-0 w-100 h-100">
                <img
                  src="assets/img/landing/saas-2/hero/layer02.png"
                  alt="Cards"
                />
              </div>
            </div>
          </div>
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: "rgba(255,255,255,.05)" }}
          ></div>
        </section>
      </div>
    </>
  );
}

export default Home;
