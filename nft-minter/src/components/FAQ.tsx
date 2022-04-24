import React from "react";

function FAQ() {
  return (
    <section>
      <div className="pt-lg-3 pt-xl-5">
        <div className="container" style={{ minHeight: "100vh" }}>
          <div className="accordion" id="accordionAlt">
            {/* <!-- Item --> */}
            <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
              <h3 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button shadow-none rounded-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="true"
                  aria-controls="collapseFour"
                  style={{ padding: "2rem 1.5rem" }}
                >
                  How much does it cost to mint something?
                </button>
              </h3>
              <div
                className="accordion-collapse collapse show"
                id="collapseFour"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionAlt"
              >
                <div className="accordion-body pt-0">
                  This is the first item's accordion body. It is hidden by
                  default, until the collapse plugin adds the appropriate
                  classNamees that we use to style each element.
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
                  Where is my data stored?
                </button>
              </h3>
              <div
                className="accordion-collapse collapse"
                id="collapseFive"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionAlt"
              >
                <div className="accordion-body pt-0">
                  This is the second item's accordion body. It is hidden by
                  default, until the collapse plugin adds the appropriate
                  classNamees that we use to style each element.
                </div>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="accordion-item border-0 rounded-3 shadow-sm">
              <h3 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button shadow-none rounded-3 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                  style={{ padding: "2rem 1.5rem" }}
                >
                  How can I look at my NFT?
                </button>
              </h3>
              <div
                className="accordion-collapse collapse"
                id="collapseSix"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionAlt"
              >
                <div className="accordion-body pt-0">
                  This is the third item's accordion body. It is hidden by
                  default, until the collapse plugin adds the appropriate
                  classNamees that we use to style each element.
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
