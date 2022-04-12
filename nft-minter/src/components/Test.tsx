import React from "react";

function Test() {
  return (
    <div className="row pt-4 mt-lg-3 pb-5 mb-lg-4 mb-xl-5">
      <div className="col-md-4">
        <h1 className="mb-md-4">Mint an NFT</h1>
        <p className="fs-lg pb-2">
          Simply add your asset's link, name, and description, then press
          "Mint."
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
            <h2>✍️ Asset description</h2>
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
        <div className="form-check mb-4 d-flex justify-content-center">
          <input
            type="checkbox"
            id="terms"
            className="form-check-input"
            style={{ marginRight: ".5em" }}
            required
          />
          <label htmlFor="terms" className="form-check-label fs-base">
            I agree to the <a href="#">Terms &amp; Conditions</a>
          </label>
        </div>
        <button type="submit" className="btn btn-primary btn-lg shadow-primary">
          Mint
        </button>
      </form>
    </div>
  );
}

export default Test;
