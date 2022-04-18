import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { connectWallet, getCurrentWalletConnected } from "./utils/interact";
import Home from "./Home";
import Minter from "./components/Minter";
import Roadmap from "./components/Roadmap";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/theme.min.css";
import "./assets/scss/theme.scss";
import "./assets/css/custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./index.css";

function App() {
  const [darkModeEnabled, setDarkModeEnabled] = useState<boolean>(false);
  const [walletAddress, setWallet] = useState<string>("");
  const [status, setStatus] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      const { address, status } = await getCurrentWalletConnected();
      setWallet(address);
      setStatus(status);

      addWalletListener();
    }
    fetchData();
  }, []);

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

  return (
    <>
      <div className={`App ${darkModeEnabled ? "dark-mode" : ""}`}>
        <div className="body" style={{ paddingTop: "4rem" }}>
          <Navigation
            darkModeHandler={darkModeHandler}
            connectWalletPressed={connectWalletPressed}
            walletAddress={walletAddress}
          />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="minter" element={<Minter />} />
              <Route path="roadmap" element={<Roadmap />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <h1>There's nothing here!</h1>
                  </main>
                }
              />
            </Routes>
          </BrowserRouter>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
