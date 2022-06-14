import React from "react";

function FAQ() {
  return (
    <section>
      <div className="pt-lg-3 pt-xl-5">
        <div className="container" style={{ minHeight: "100vh" }}>
          <div className="accordion" id="accordionAlt">
            {/* <!-- Item --> */}
            <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
              <h3 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button shadow-none rounded-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={{ padding: "2rem 1.5rem" }}
                >
                  How much does it cost to mint something?
                </button>
              </h3>
              <div
                className="accordion-collapse collapse show"
                id="collapseOne"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionAlt"
              >
                <div className="accordion-body pt-0">
                  Minting items is extremely cheap on the Gnosis Chain (formerly
                  xDai) costing around $0.0004 per NFT. You read that correct,
                  it is less than 1 cent USD.
                </div>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
              <h3 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button shadow-none rounded-3 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={{ padding: "2rem 1.5rem" }}
                >
                  Why is it so cheap to mint an NFT?
                </button>
              </h3>
              <div
                className="accordion-collapse collapse"
                id="collapseTwo"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionAlt"
              >
                <div className="accordion-body pt-0">
                  While you can use this contract on the Ethereum network, we
                  reccomend our users use the{" "}
                  <a href="https://gnosis.io/" target="_blank">
                    Gnosis Chain
                  </a>{" "}
                  (formerly xDai). Gnosis Chain is built on top of Ethereum with
                  faster transaction speeds and signifigantly reduced
                  transaction costs.
                </div>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
              <h3 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button shadow-none rounded-3 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={{ padding: "2rem 1.5rem" }}
                >
                  How can I view at my NFT?
                </button>
              </h3>
              <div
                className="accordion-collapse collapse"
                id="collapseThree"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionAlt"
              >
                <div className="accordion-body pt-0">
                  Currently you will navigate to your NFT contract on{" "}
                  <a
                    href="https://blockscout.com/xdai/mainnet/"
                    target="_blank"
                  >
                    Block Scout{" "}
                  </a>
                  and click on your token number in the line{" "}
                  <b>'TokenID [YOURTOKENNUMBER] DCD'</b>. Ex:
                  <a
                    href="https://blockscout.com/xdai/mainnet/token/0x73b81c9c6bf85538685415b4da21050b0df8033b/instance/0/token-transfers"
                    target="_blank"
                  >
                    https://blockscout.com/xdai/mainnet/token/0x73b81c9c6bf85538685415b4da21050b0df8033b/instance/0/token-transfers
                  </a>
                  . We plan to add NFT functionality and a proprietary wallet in
                  the future.
                </div>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
              <h3 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button shadow-none rounded-3 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                  style={{ padding: "2rem 1.5rem" }}
                >
                  What can I do with my NFT?
                </button>
              </h3>
              <div
                className="accordion-collapse collapse"
                id="collapseFour"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionAlt"
              >
                <div className="accordion-body pt-0">
                  At the moment, NFTs are static files stroed on the blockchain.
                  This is true for Decent Data's NFT's and all other NFT's. Our
                  goal is to bring NFTs to life through 3D rendering allowing
                  any user who holds an NFT to access the represented object in
                  the metaverse.
                </div>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
              <h3 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button shadow-none rounded-3 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                  style={{ padding: "2rem 1.5rem" }}
                >
                  What is IPFS?
                </button>
              </h3>
              <div
                className="accordion-collapse collapse"
                id="collapseFive"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionAlt"
              >
                <div className="accordion-body pt-0">
                  <a href="https://ipfs.io/" target="_blank">
                    IPFS
                  </a>{" "}
                  - Interplanetary File System - is a new decentralized internet
                  protocol that aims to surpass https. When you add a file to
                  IPFS, your file is split into smaller chunks,
                  cryptographically hashed, and given a unique fingerprint. This
                  fingerprint represents both the data and the location (url).
                  We use IPFS to store your NFT data.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
