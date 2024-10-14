import Navbar from "./Navbar";

import React from "react";

const Header = () => {
  return (
    <div className="relative w-full h-[700px] overflow-hidden ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src='https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/c4f4/4749/-c85c-4755-a1c0-4646ee276bd5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ClUd5f4zdna33~4ZVbPonPB9~8CtIEinsoLYa1fh4v-SigdD6Rm~sJa1SC6r7xbl5-Fr2VaFS0BVWni2vwwn-mKUfs1HGVbQ7DCGVqVb1H-mZntY6Q2QMs-ZE7m9VAAl2cSGA4~mip1BDlGpMSbRGknsvFf0hjL7NhNiMAG76dr6IZOitZVa-8D-UUKoMO-iDdb4oDVNrOgALkBwUH7J0eiDBL7oyJg4IB3ZxjO-Ef7pvbVgkWw9JGm0AItcRPJ7G17VkbWMW~Bb~nWLdkGkPoTpuBzhyLozoDyTciop1pyDvOUjZ5DzTGvoEMUyhYBIMqLQ~mhrNJjRMW2hlh7upQ__'
        autoPlay
        loop
        muted
      />

      <div className="relative z-30">
        <Navbar />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white -mt-35">
      <h1 className="text-[35px]  sm:text-[54px] md:text-[64px] lg:text-[72px] font-medium font-space">
  <span>When Innovation</span>
  
  <br />
  <span>Meets</span>{" "}
  <span className="bg-investment rounded-full py-1 px-5 text-black font-medium">
    Investment
  </span>
</h1>

        <p className=" text-[20px] font-normal mt-8 font-space text-fontColor">
          Empowering Trading Through Advanced Technology
        </p>
        <button
          className="mt-8 h-[44px] border-dAppBorder border-[1px] text-white rounded-[12px] 
               px-[24px] transition duration-300 bg-dApp
             font-space text-[16px] 
             hover:bg-navButtonColor hover:text-black hover:font-medium"
        >
          Open dApp
        </button>
      </div>
    </div>
  );
};

export default Header;

<source src="https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/c4f4/4749/-c85c-4755-a1c0-4646ee276bd5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ClUd5f4zdna33~4ZVbPonPB9~8CtIEinsoLYa1fh4v-SigdD6Rm~sJa1SC6r7xbl5-Fr2VaFS0BVWni2vwwn-mKUfs1HGVbQ7DCGVqVb1H-mZntY6Q2QMs-ZE7m9VAAl2cSGA4~mip1BDlGpMSbRGknsvFf0hjL7NhNiMAG76dr6IZOitZVa-8D-UUKoMO-iDdb4oDVNrOgALkBwUH7J0eiDBL7oyJg4IB3ZxjO-Ef7pvbVgkWw9JGm0AItcRPJ7G17VkbWMW~Bb~nWLdkGkPoTpuBzhyLozoDyTciop1pyDvOUjZ5DzTGvoEMUyhYBIMqLQ~mhrNJjRMW2hlh7upQ__" type="video/mp4" />