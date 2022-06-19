import { useEffect, useState } from "react";
import {
  connectWallet,
  getCurrentWalletConnected,
  mintNFT,
} from "../utils/interact.js";

function Minter() {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [statusURL, setStatusURL] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");

  const onMintPressed = async () => {
    const { success, status } = await mintNFT(url, name, description);
    setStatus(status);
    if (success) {
      setName("");
      setDescription("");
      setURL("");
      var msg = status.split("Block Scout:")[0];
      var msgUrl = status.split("Block Scout:")[1].trim();
      setStatusMessage(status.split("Block Scout:")[0]);
      setStatusURL(status.split("Block Scout:")[1].trim());
    }
  };

  return (
    <section className="position-relative jarallax">
      <div className="position-relative zindex-4 pt-lg-3 pt-xl-5">
        <div className="container zindex-5 pt-5">
          <div className="row justify-content-center text-center pt-4 pb-sm-2 py-lg-5">
            <div className="col-md-4">
              <h1 className="mb-md-4">Mint an NFT</h1>
              <p className="fs-lg pb-2">
                Simply add your asset's link, name, and description, then press
                "Mint."
              </p>
            </div>
            <div className="col-xl-7 col-md-8 offset-xl-1">
              <form className="needs-validation" noValidate>
                <div className="row">
                  <div className="col-sm-12 mb-4 text-left">
                    <h2>🖼 Link to asset:</h2>
                    <input
                      type="text"
                      id="name"
                      className="form-control form-control-lg"
                      placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
                      onChange={(event) => setURL(event.target.value)}
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter a valid asset link
                    </div>
                  </div>
                  <div className="col-sm-12 mb-4">
                    <h2>🤔 Asset name:</h2>
                    <input
                      type="text"
                      id="asset-name"
                      className="form-control form-control-lg"
                      onChange={(event) => setName(event.target.value)}
                      required
                      placeholder="e.g. car title"
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <h2>📃 Asset description</h2>
                    <textarea
                      id="asset-description"
                      className="form-control form-control-lg"
                      onChange={(event) => setDescription(event.target.value)}
                      required
                      placeholder="Description.."
                    ></textarea>
                    <div className="invalid-feedback">
                      Please write your description
                    </div>
                  </div>
                </div>
              </form>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <button
                  type="submit"
                  onClick={onMintPressed}
                  className="btn btn-primary btn-lg shadow-primary mt-1 p-4"
                  style={{ minWidth: "175px" }}
                >
                  Mint
                </button>
                {statusMessage && statusURL ? (
                  <>
                    <p className="mt-3 text-danger">{statusMessage}</p>
                    <a
                      id="status"
                      href={statusURL}
                      target="_blank"
                      className="text-danger"
                    >
                      {statusURL}
                    </a>
                  </>
                ) : (
                  <p id="status" className="text-danger mt-3">
                    {status}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Minter;
