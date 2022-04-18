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
import layer01 from "./assets/img/home/layer01.png";
import layer02 from "./assets/img/home/layer02.png";

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
                  system. Plan, manage and track all your tasks in one flexible
                  software!
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
            style={{ color: "#131022" }}
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
          <div className="d-none d-lg-block" style={{ height: "300px;" }}></div>
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
      <section className="container mt-n1 mt-md-0 py-5 position-relative zindex-5">
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "#ffffff0d" }}
        ></div>
        <div className="row justify-content-center text-center pt-md-3 pb-4 py-lg-5 mb-1">
          <div className="col-xl-8 col-lg-9 col-md-10">
            <h2 className="h1 mb-lg-4">Integrate Top Work Tools</h2>
            <p className="fs-lg text-muted mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              volutpat mollis egestas. Nam luctus facilisis ultrices.
              Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
            </p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 g-sm-3 g-lg-4 pb-md-3 pb-lg-5">
          {/* <!-- Item --> */}
          <div className="col">
            <div className="card card-body card-hover bg-light border-0">
              <img
                src="assets/img/brands/google.svg"
                className="d-block mb-4"
                width="56"
                alt="Google"
              />
              <p className="mb-0">
                Lorem magnis pretium sed curabitur nunc facilisi nunc cursus
                sagittis pretium.
              </p>
            </div>
          </div>

          {/* <!-- Item --> */}
          <div className="col">
            <div className="card card-body card-hover bg-light border-0">
              <img
                src="assets/img/brands/zoom.svg"
                className="d-block mb-4"
                width="56"
                alt="Zoom"
              />
              <p className="mb-0">
                In eget a mauris quis. Tortor dui tempus quis integer est sit
                natoque placerat dolor.
              </p>
            </div>
          </div>

          {/* <!-- Item --> */}
          <div className="col">
            <div className="card card-body card-hover bg-light border-0">
              <img
                src="assets/img/brands/slack.svg"
                className="d-block mb-4"
                width="56"
                alt="Slack"
              />
              <p className="mb-0">
                Id mollis consectetur congue egestas egestas suspendisse blandit
                justo.
              </p>
            </div>
          </div>

          {/* <!-- Item --> */}
          <div className="col">
            <div className="card card-body card-hover bg-light border-0">
              <img
                src="assets/img/brands/gmail.svg"
                className="d-block mb-4"
                width="56"
                alt="Gmail"
              />
              <p className="mb-0">
                Rutrum interdum tortor, sed at nulla. A cursus bibendum elit
                purus cras praesent.
              </p>
            </div>
          </div>

          {/* <!-- Item --> */}
          <div className="col">
            <div className="card card-body card-hover bg-light border-0">
              <img
                src="assets/img/brands/trello.svg"
                className="d-block mb-4"
                width="56"
                alt="Trello"
              />
              <p className="mb-0">
                Congue pellentesque amet, viverra curabitur quam diam
                scelerisque fermentum urna.
              </p>
            </div>
          </div>

          {/* <!-- Item --> */}
          <div className="col">
            <div className="card card-body card-hover bg-light border-0">
              <img
                src="assets/img/brands/mailchimp.svg"
                className="d-block mb-4"
                width="56"
                alt="Mailchimp"
              />
              <p className="mb-0">
                A elementum, imperdiet enim, pretium etiam facilisi in aenean
                quam mauris integer.
              </p>
            </div>
          </div>

          {/* <!-- Item --> */}
          <div className="col">
            <div className="card card-body card-hover bg-light border-0">
              <img
                src="assets/img/brands/dropbox.svg"
                className="d-block mb-4"
                width="56"
                alt="Dropbox"
              />
              <p className="mb-0">
                Ut in turpis consequat odio diam lectus elementum. Est faucibus
                blandit platea.
              </p>
            </div>
          </div>

          {/* <!-- Item --> */}
          <div className="col">
            <div className="card card-body card-hover bg-light border-0">
              <img
                src="assets/img/brands/evernote.svg"
                className="d-block mb-4"
                width="56"
                alt="Evernote"
              />
              <p className="mb-0">
                Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id.
                Sit facilisis dolor arcu.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="position-relative py-5">
        <div className="container position-relative zindex-5 pb-md-4 pt-md-2 pt-lg-3 pb-lg-5">
          <div className="row justify-content-center text-center pb-3 mb-sm-2 mb-lg-3">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <h2 className="h1 mb-lg-4">What Do You Get with Our Tool?</h2>
              <p className="fs-lg text-muted mb-0">
                Make sure all your tasks are organized so you can set the
                priorities and focus on important.
              </p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-0 pb-xl-3">
            {/* <!-- Item --> */}
            <div className="col position-relative">
              <div className="card border-0 bg-transparent rounded-0 p-md-1 p-xl-3">
                <div className="d-table bg-secondary rounded-3 p-3 mx-auto mt-3 mt-md-4">
                  <img
                    src="assets/img/landing/saas-2/features/comments.svg"
                    width="40"
                    alt="Comments"
                  />
                </div>
                <div className="card-body text-center">
                  <h3 className="h5 pb-1 mb-2">Comments on Tasks</h3>
                  <p className="mb-0">
                    Id mollis consectetur congue egestas egestas suspendisse
                    blandit justo.
                  </p>
                </div>
              </div>
              <hr className="position-absolute top-0 end-0 w-1 h-100 d-none d-sm-block" />
              <hr className="position-absolute top-100 start-0 w-100 d-none d-sm-block" />
            </div>

            {/* <!-- Item --> */}
            <div className="col position-relative">
              <div className="card border-0 bg-transparent rounded-0 p-md-1 p-xl-3">
                <div className="d-table bg-secondary rounded-3 p-3 mx-auto mt-3 mt-md-4">
                  <img
                    src="assets/img/landing/saas-2/features/analytics.svg"
                    width="40"
                    alt="Analytics"
                  />
                </div>
                <div className="card-body text-center">
                  <h3 className="h5 pb-1 mb-2">Tasks Analytics</h3>
                  <p className="mb-0">
                    Non imperdiet facilisis nulla tellus Morbi scelerisque eget
                    adipiscing vulputate.
                  </p>
                </div>
              </div>
              <hr className="position-absolute top-0 end-0 w-1 h-100 d-none d-md-block" />
              <hr className="position-absolute top-100 start-0 w-100 d-none d-sm-block" />
            </div>

            {/* <!-- Item --> */}
            <div className="col position-relative">
              <div className="card border-0 bg-transparent rounded-0 p-md-1 p-xl-3">
                <div className="d-table bg-secondary rounded-3 p-3 mx-auto mt-3 mt-md-4">
                  <img
                    src="assets/img/landing/saas-2/features/group.svg"
                    width="40"
                    alt="Group"
                  />
                </div>
                <div className="card-body text-center">
                  <h3 className="h5 pb-1 mb-2">Multiple Assignees</h3>
                  <p className="mb-0">
                    A elementum, imperdiet enim, pretium etiam facilisi in
                    aenean quam mauris.
                  </p>
                </div>
              </div>
              <hr className="position-absolute top-0 end-0 w-1 h-100 d-none d-sm-block d-md-none" />
              <hr className="position-absolute top-100 start-0 w-100 d-none d-sm-block" />
            </div>

            {/* <!-- Item --> */}
            <div className="col position-relative">
              <div className="card border-0 bg-transparent rounded-0 p-md-1 p-xl-3">
                <div className="d-table bg-secondary rounded-3 p-3 mx-auto mt-3 mt-md-4">
                  <img
                    src="assets/img/landing/saas-2/features/notifications.svg"
                    width="40"
                    alt="Notifications"
                  />
                </div>
                <div className="card-body text-center">
                  <h3 className="h5 pb-1 mb-2">Notifications</h3>
                  <p className="mb-0">
                    Diam, suspendisse velit cras ac. Lobortis diam volutpat,
                    eget pellentesque viverra.
                  </p>
                </div>
              </div>
              <hr className="position-absolute top-0 end-0 w-1 h-100 d-none d-md-block" />
              <hr className="position-absolute top-100 start-0 w-100 d-none d-sm-block d-md-none" />
            </div>

            {/* <!-- Item --> */}
            <div className="col position-relative">
              <div className="card border-0 bg-transparent rounded-0 p-md-1 p-xl-3">
                <div className="d-table bg-secondary rounded-3 p-3 mx-auto mt-3 mt-md-4">
                  <img
                    src="assets/img/landing/saas-2/features/tasks.svg"
                    width="40"
                    alt="Tasks"
                  />
                </div>
                <div className="card-body text-center">
                  <h3 className="h5 pb-1 mb-2">Sections &amp; Subtasks</h3>
                  <p className="mb-0">
                    Mi feugiat hac id in. Sit elit placerat lacus nibh lorem
                    ridiculus lectus.
                  </p>
                </div>
              </div>
              <hr className="position-absolute top-0 end-0 w-1 h-100 d-none d-sm-block" />
            </div>

            {/* <!-- Item --> */}
            <div className="col position-relative">
              <div className="card border-0 bg-transparent rounded-0 p-md-1 p-xl-3">
                <div className="d-table bg-secondary rounded-3 p-3 mx-auto mt-3 mt-md-4">
                  <img
                    src="assets/img/landing/saas-2/features/security.svg"
                    width="40"
                    alt="Security"
                  />
                </div>
                <div className="card-body text-center">
                  <h3 className="h5 pb-1 mb-2">Data Security</h3>
                  <p className="mb-0">
                    Aliquam malesuada neque eget elit nulla vestibulum nunc
                    cras.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(255,255,255,.05);" }}
        ></div>
      </section>
    </>
  );
}

export default Home;
