import React from "react";

const Frequent = () => {
  return (
    <div className="w-full h-auto bg-[#00161D] px-6 sm:px-12 md:px-36 py-12">
      <div className="w-full max-w-[1200px] h-auto p-6 sm:p-10 md:p-12 gap-6 mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-[385px] h-auto mb-10 md:mb-0">
          <p className="text-white text-[24px] sm:text-[32px] md:text-[40px] leading-[44px]">
            Frequently Asked Questions
          </p>
        </div>
        <div className="ml-0 md:ml-12 mt-0 md:mt-[-40px]">
          {[
            "What is EthAi?",
            "How can EthAi help me as a Trader?",
            "Who can use EthAi?",
            "How does EthAi track smart money flow?",
            "How does EthAi ensure data security?",
          ].map((question, idx) => (
            <div key={idx} className="flex items-center mt-6 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#B0F9FF"
              >
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
              </svg>
              <p className="text-white text-[16px] font-light ml-2">{question}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frequent;
