import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const ExploreCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <div className="bg-backgrd w-full h-auto px-6 sm:px-12 md:px-24 py-12 font-space">
      <div  data-aos="zoom-in" className="w-full max-w-[960px] h-auto p-8 sm:p-10 md:p-14 gap-6 rounded-[20px] bg-[#011c24] shadow-inner shadow-[#63f2ff1a] mx-auto">
        <p className="text-[24px] sm:text-[32px] md:text-[40px] leading-[28px] sm:leading-[36px] md:leading-[44px] text-white text-center">
          Explore Our <span className="text-[#62f0fe]">dApp</span>
        </p>
        <p className="font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#B0FAFFB2] text-center mt-5">
          EthAi is an AI-powered dApp designed to help traders make smarter,
          data-driven decisions. <br className="hidden sm:block" /> By tracking smart
          money flows, monitoring key wallets, and providing real-time market <br className="hidden sm:block" /> insights, EthAi empowers users to stay ahead of trends. The platform
          offers intuitive AI <br className="hidden sm:block" /> features for asset recommendations, market analysis, and personalized crypto Q&A, <br className="hidden sm:block" /> making it the ultimate tool for both novice and experienced traders.
        </p>
        <button className="w-full max-w-[140px] h-auto px-6 py-3 rounded-lg mt-8 mx-auto block bg-[#CDFCFF] shadow-inner shadow-[#4CDDFD] text-[16px] leading-[20px]">
          Open dApp
        </button>
      </div>
    </div>
  );
};

export default ExploreCard;
