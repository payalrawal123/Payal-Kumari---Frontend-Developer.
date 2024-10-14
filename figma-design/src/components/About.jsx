import React from "react";

const About = () => {
  return (
    <div className="w-full h-auto pt-[72px] bg-[#00161d]">
      <h3 className="text-white text-[40px] font-medium font-spaceGrotesk text-center">
        About EthAi
      </h3>
      <p className="text-[#B0FAFFB2] text-[16px] font-spaceGrotesk font-normal text-center my-[10px] px-4 md:px-0">
        At EthAi, we’re all about making crypto trading easier and more
        intuitive. We provide tools <br className="hidden md:inline" />
        that help traders keep up with all new market trends, track top traders’
        movements.
      </p>
      <button className="w-[108.91px] h-[40px] py-[7px] px-[10px] bg-[#cdfcff] text-black font-spaceGrotesk font-medium text-[14px] rounded-[12px] mx-auto mt-[30px] shadow-[0px_6px_20px_0px_rgba(55,197,229,0.12)] block">
        Read More
      </button>

      <div className="w-full h-auto mx-auto mt-[50px] p-4 md:p-[48px] bg-[#08252A] rounded-[20px] max-w-[744px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mx-auto">
          <div className="flex flex-col items-start gap-[12px]">
            <span
              className="material-symbols-outlined"
              style={{ color: "#61f0fe" }}
            >
              terminal
            </span>
            <h3 className="font-spaceGrotesk font-medium text-[18px] text-white">
              Stay Ahead
            </h3>
            <p className="text-[#B0FAFFB2] font-spaceGrotesk font-normal text-[16px]">
              No more guesswork—get clear, trustable insights.
            </p>
          </div>
          <div className="flex flex-col items-start gap-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#61f0fe"
            >
              <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h280v80H280v40h280v80H280v480h400v-80h80v200q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm440-240L520-600l56-56 104 104v-288h80v288l104-104 56 56-200 200ZM280-800v-40 40Zm0 640v40-40Z" />
            </svg>
            <h3 className="font-spaceGrotesk font-medium text-[18px] text-white">
              Know Your Assets
            </h3>
            <p className="text-[#B0FAFFB2] font-spaceGrotesk font-normal text-[16px]">
              Always stay on top of how your investments are performing.
            </p>
          </div>
          <div className="flex flex-col items-start gap-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#61f0fe"
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v80h-80v-80H200v560h560v-80h80v80q0 33-23.5 56.5T760-120H200Zm480-160-56-56 103-104H360v-80h367L624-624l56-56 200 200-200 200Z" />
            </svg>
            <h3 className="font-spaceGrotesk font-medium text-[18px] text-white">
              Simple, Not Overwhelming
            </h3>
            <p className="text-[#B0FAFFB2] font-spaceGrotesk font-normal text-[16px]">
              Our tools are designed to make complex market analysis easy to
              understand and act on.
            </p>
          </div>
          <div className="flex flex-col items-start gap-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#61f0fe"
            >
              <path d="M600-240v-80h160v80H600Zm0-320v-80h280v80H600Zm0 160v-80h240v80H600ZM120-640H80v-80h160v-60h160v60h160v80h-40v360q0 33-23.5 56.5T440-200H200q-33 0-56.5-23.5T120-280v-360Zm80 0v360h240v-360H200Zm0 0v360-360Z" />
            </svg>
            <h3 className="font-spaceGrotesk font-medium text-[18px] text-white">
              Future-Proof
            </h3>
            <p className="text-[#B0FAFFB2] font-spaceGrotesk font-normal text-[16px]">
              We’re constantly improving, adding new features to help you make
              the most informed decisions possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
