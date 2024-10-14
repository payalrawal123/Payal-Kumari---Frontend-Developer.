import React from "react";
import "../styles/exploreCard.css";
const ExploreCard = () => {
  return (
    <div className="container">
      <div className="innercont">
        <p className="header">
          Explore Our <span style={{ color: "#62f0fe" }}>dApp</span>
        </p>
        <p className="para">
          EthAi is an AI-powered dApp designed to help traders make smarter,
          data-driven decisions. <br /> By tracking smart money flows, monitoring key
          wallets, and providing real-time market <br /> insights, EthAi empowers users
          to stay ahead of trends. The platform offers intuitive AI <br /> features for
          asset recommendations, market analysis, and personalized crypto Q&A, <br />
          making it the ultimate tool for both novice and experienced traders.
        </p>
        <button className="open-btn">Open dApp</button>
      </div>
    </div>
  );
};

export default ExploreCard;
