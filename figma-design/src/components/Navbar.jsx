import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center pt-5 font-play font-medium px-4 md:px-10">
      {/* Logo Section */}
      <div className="flex items-center gap-[5px]">
        <div className="grid grid-cols-3 gap-[1px]  p-2 max-w-max">
          <div className="w-[11.31px] h-[11.31px]  bg-logoBg1 rounded-tr-[100px]"></div>
          <div className="w-[11.31px] h-[11.31px] bg-logoBg2 "></div>
          <div className="w-[11.31px] h-[11.31px]  bg-logoBg2 rounded-tr-[100px]"></div>
          <div className="w-[11.31px] h-[11.31px]  bg-logoBg2"></div>
          <div className="w-[11.31px] h-[11.31px]  bg-none"></div>
          <div className="w-[11.31px] h-[11.31px]  bg-logoBg2 "></div>
          <div className="w-[11.31px] h-[11.31px]  bg-logoBg2 rounded-bl-[100px]"></div>
          <div className="w-[11.31px] h-[11.31px]  bg-logoBg1 rounded-br-[100px]"></div>
          <div className="w-[11.31px] h-[11.31px]  bg-logoBg2 rounded-bl-[100px]"></div>
        </div>
        <div className="hidden custom-lg:block text-[24px] font-bold leading-[22px] tracking-[-0.03px] text-white font-play">
          EthAi
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Menu Links for Desktop */}
      <div className="hidden md:flex items-center justify-evenly w-[653px] h-[64px] rounded-[48px] bg-[rgba(12,43,47,0.7)] backdrop-blur-[10px] text-[rgba(176,250,255,0.7)] text-base font-space font-medium">
        <span>Features</span>
        <span>Why Us</span>
        <span>Tokenomics</span>
        <span>RoadMap</span>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[rgba(12,43,47,0.9)] lg:hidden z-10">
          <div className="flex flex-col items-center py-4 text-white font-space">
            <span className="py-2">Features</span>
            <span className="py-2">Why Us</span>
            <span className="py-2">Tokenomics</span>
            <span className="py-2">RoadMap</span>
          </div>
        </div>
      )}

      {/* Right-side Buttons */}
      <div className="hidden md:flex">
        <button className="w-auto h-12 py-[12.75px] px-0 bg-black text-white font-space text-base font-medium border-none">
          Log in
        </button>
        <button className="ml-[14px] w-[139.71px] h-[44px] px-6 py-3 text-black font-space font-medium text-base rounded-[12px] bg-[#cdfcff] shadow-[0px_1px_4px_0px_rgba(55,197,229,0.12)]">
          Whitepaper
        </button>
      </div>
    </div>
  );
};

export default Navbar;
