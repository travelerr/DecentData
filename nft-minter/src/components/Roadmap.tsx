import React from "react";

function Roadmap() {
  const roadmapData = [
    {
      title: "Decent Data Starts Operations",
      date: "January 2022",
      completed: "true",
      body: "A lot has changed in the past 8 months. Our ideas, design and purpose have and will continue to evolve. But one thing remains consistent, to bring open and reliable data minting to everyone at affordable costs",
    },
    {
      title: "Launch Decent Data App",
      date: "July 2022",
      completed: "true",
      body: "Our app, minter and home-base is live for the world to interact with. We have much work ahead of us. Comeback here to checkout our progress!",
    },
    {
      title: "Getting Started Page",
      date: "",
      completed: "false",
      body: "Make it easy for users to understand and use this tool",
    },
    {
      title: "Wallet and Test Token Distribution (Faucet)",
      date: "",
      completed: "false",
      body: "Utilize account verification via Twitter to generate wallets for uses preconfigured to Gnosis chain with test tokens.",
    },
    {
      title: "Shopify Web3 Checkout Integration",
      date: "",
      completed: "false",
      body: "Feature is currently built, awaiting public access",
    },
  ];
  return (
    <section className="position-relative p-3">
      <div className="position-relative zindex-4 pt-lg-3 pt-xl-5">
        <div className="container zindex-5 pt-5">
          <ul className="timeline">
            {roadmapData.map((x: any, index: number) => {
              return (
                <li
                  key={index}
                  className={`timeline-item mb-5 ${
                    x.completed === "true" ? "completed" : ""
                  }`}
                >
                  <h5 className="fw-bold">{x.title}</h5>
                  <p className="text-muted mb-2 fw-bold">{x.date}</p>
                  <p className="text-muted">{x.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
