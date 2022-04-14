import React from "react";

function Minter() {
  return (
    <div className="body" style={{ paddingTop: "4rem" }}>
      <section className="position-relative">
        <div className="position-relative zindex-4 pt-lg-3 pt-xl-5">
          <div className="container zindex-5 pt-5">
            <div className="row justify-content-center text-center pt-4 pb-sm-2 py-lg-5">
              <div className="col-md-4">
                <h1 className="mb-md-4">Mint an NFT</h1>
                <p className="fs-lg pb-2">
                  Simply add your asset's link, name, and description, then
                  press "Mint."
                </p>
              </div>

              <form
                className="col-xl-7 col-md-8 offset-xl-1 needs-validation"
                noValidate
              >
                <div className="row">
                  <div className="col-sm-12 mb-4 text-left">
                    <h2>🖼 Link to asset:</h2>
                    <input
                      type="text"
                      id="name"
                      className="form-control form-control-lg"
                      placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
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
                      required
                      placeholder="e.g. car title"
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <h2>📃 Asset description</h2>
                    <textarea
                      id="asset-description"
                      className="form-control form-control-lg"
                      required
                    ></textarea>
                    <div className="invalid-feedback">
                      Please write your description
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg shadow-primary mt-4"
                >
                  Mint
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Minter;
