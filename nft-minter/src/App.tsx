import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { connectWallet, getCurrentWalletConnected } from "./utils/interact";
import Home from "./Home";
import Minter from "./components/Minter";
import Roadmap from "./components/Roadmap";
import FAQ from "./components/FAQ";
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
import GettingStarted from "./components/GettingStarted";

function App() {
  const [darkModeEnabled, setDarkModeEnabled] = useState<boolean>(false);
  const [walletAddress, setWallet] = useState<string>("");
  const [status, setStatus] = useState<any>();
  const [chainID, setChainID] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const { address, status } = await getCurrentWalletConnected();
      setWallet(address);
      setStatus(status);
      addWalletListener();
      detectChain();
      detectDarkModeOnLoad();
    }
    fetchData();
  }, []);

  function detectDarkModeOnLoad(): void {
    var lsdm = localStorage.getItem("theme");
    if (lsdm === "dark") {
      setDarkModeEnabled(true);
    }
  }

  const darkModeHandler = () => {
    localStorage.setItem("theme", !darkModeEnabled ? "dark" : "");
    setDarkModeEnabled(!darkModeEnabled);
  };

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  async function detectChain() {
    const cid = await (window as any).ethereum.request({
      method: "eth_chainId",
    });
    setChainID(cid);

    (window as any).ethereum.on("chainChanged", (_chainId: string) => {
      //window.location.reload();
      setChainID(_chainId);
      console.log(_chainId);
    });
  }

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
            chainID={chainID}
          />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="getting-started"
                element={<GettingStarted walletAddress={walletAddress} />}
              />
              <Route
                path="minter"
                element={<Minter walletAddress={walletAddress} />}
              />
              <Route path="roadmap" element={<Roadmap />} />
              <Route path="faq" element={<FAQ />} />
              <Route
                path="*"
                element={
                  <main className="pt-5" style={{ padding: "1rem" }}>
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
