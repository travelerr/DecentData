import { useState, useEffect } from "react";
import { addToNetwork } from "../utils/chainlist";
import GnosisLogo from "../assets/img/icons/gnosis-green.png";
import axios from "axios";

interface IGettingStartedProps {
  walletAddress?: string;
}

function GettingStarted(props: IGettingStartedProps) {
  const [chains, setChains] = useState<any>(null);
  const [gnosisChain, setGnosisChain] = useState<any>(null);

  const { walletAddress } = props;

  useEffect(() => {
    getChainsAsync();
  }, []);

  async function getChainsAsync() {
    axios({
      method: "get",
      url: "https://chainid.network/chains.json",
      responseType: "json",
    }).then(function (response) {
      setChains(response.data);
      setGnosisChain(response.data?.filter((c: any) => c.chain === "GNO")[0]);
    });
  }
  return (
    <section className="jarallax" style={{ minHeight: "100vh" }}>
      <div className="pt-5 pt-lg-3 pt-xl-5">
        <div className="container" style={{ minHeight: "100vh" }}>
          <h4>
            <span className="purple-text ">Step 1:</span> Install{" "}
            <a
              style={{ textDecoration: "underline" }}
              href="https://metamask.io/"
            >
              Meta Mask
            </a>{" "}
            🦊
          </h4>
          <h4>
            <span className="purple-text">Step 2:</span> Add Gnosis Chain to
            Metamask
          </h4>
          <div className="d-flex justify-content-center mb-3 chainlink-card">
            <div className="card border-primary card-hover w-50">
              <div className="card-body">
                <div className="d-flex align-items-center chainlink-logo">
                  <img
                    style={{ width: "50px" }}
                    className="rounded"
                    alt="gnosis chain logo"
                    src={GnosisLogo}
                  />
                  <h5 style={{ marginLeft: "0px" }} className="mb-0">
                    Gnosis Chain
                  </h5>
                </div>
                <h5 className="card-title">Chain ID</h5>
                <h6>{gnosisChain && gnosisChain.chainId}</h6>
                <h5>Currency</h5>
                <h6>
                  {gnosisChain && gnosisChain.nativeCurrency
                    ? gnosisChain.nativeCurrency.symbol
                    : "none"}
                </h6>
                <button
                  className="btn shadow-primary mt-1 p-4 btn-primary"
                  onClick={() => addToNetwork(walletAddress, gnosisChain)}
                >
                  Add To Metamask
                </button>
              </div>
            </div>
          </div>
          <h4 className="mb-3">
            <span className="purple-text">Step 3:</span> Get Some xDai with{" "}
            <a
              style={{ textDecoration: "underline" }}
              target="_blank"
              rel="noreferrer"
              href="https://ramp.network/"
            >
              Ramp
            </a>
          </h4>
          <h4 className="mb-3">
            <span className="purple-text">Step 4:</span> You're Ready to{" "}
            <a style={{ textDecoration: "underline" }} href="/minter">
              Mint
            </a>
            !
          </h4>
        </div>
      </div>
    </section>
  );
}

export default GettingStarted;
