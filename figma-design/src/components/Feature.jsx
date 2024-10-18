import React from "react";
import "../styles/Feature.css";
import glassImage from "../assets/glass.png";
import reactangle from "../assets/Rectangle.png";
import Ai from "../assets/Ai.png";
import marketInsight from "../assets/marketInsight.png";

const Features = () => {
  return (
    <div className="flex flex-col item-center justify-center h-[832px] custom:sm-h-[1000px] mt-[30px] mb-[200px] lg:mt-[50px] md:mt-[50px] sm:mt-[100px] custom-sm:mt-[100px] sm:h-[auto]">
      <div className="container m-auto">
        <div
          className="box rounded-tl-[56px] flex flex-col items-center justify-center sm:rounded-tl-[16px] lg:rounded-tl-[56px] custom-sm:rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] bg-navColor border-1 border-navBorder p-4"
          id="box1"
        >
          <img
            className="mt-4 w-full h-full mt-4 lg:w-[60%] md:w-[20%] md:h-auto sm:w-[30%] sm:h-auto custom-sm:w-[30%] custom-sm:h-auto"
            src={reactangle}
            alt="Trade Optimizer"
          />
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h3 className="text-white font-space text-[22px] md:text-[20px] sm:text-[18px] font-medium">
              Trade Optimizer
            </h3>
            <p className="font-space text-[16px] md:text-[12px] sm:text-[8px] font-normal text-fontColor">
              Find the right moments to buy or sell, with personalized trade
              suggestions designed to help you make the most of every
              opportunity.
            </p>
          </div>
        </div>

        <div
          className="box max-w-[608px] rounded-[16px] p-[18px] bg-navColor bg-no-repeat bg-right bg-cover lg:w-full sm:w-[50%] custom-sm:w-[93%] md:w-[52%]"
          id="box2"
          style={{
            backgroundImage: `url(${marketInsight})`,
            backgroundSize: "20% 100%",
            backgroundPosition: "right center",
          }}
        >
          <div>
            <h3 className="text-white font-space text-[22px] md:text-[20px] sm:text-[18px] font-medium text-start md:text-center sm:text-center custom-sm:text-center">
              Market Insight
            </h3>
            <p className="text-fontColor font-space text-[16px] md:text-[12px] sm:text-[8px] font-normal text-start md:text-center sm:text-center custom-sm:text-center">
              Stay ahead of the market. Get real-time updates on market trends,
              track top trade movements, and spot signals from key influencers.
            </p>
          </div>
        </div>

        <div
          className="box bg-navColor flex flex-col items-center justify-center rounded-tl-[16px] rounded-br-[16px] rounded-tr-[56px] lg:rounded-tr-[56px] rounded-bl-[16px] border-1 border-navBorder p-4 h-full sm:rounded-tr-[16px] custom-sm:rounded-tr-[16px]"
          id="box4"
        >
          <div className="flex flex-col items-center justify-center h-full text-center order-1 lg:order-2 md:order-1 sm:order-1 custom-sm:order-1 ">
            <h3 className="text-white font-space text-[22px] md:text-[20px] sm:text-[18px] font-medium">
              Risk Guard
            </h3>
            <p className="font-space text-[16px] md:text-[12px] sm:text-[8px] font-normal text-fontColor">
              Get alerts on market swings and potential risks before they impact
              your portfolio. This agent helps you navigate volatility and stay
              prepared for anything.
            </p>
          </div>

          <img
            className="w-full h-full mt-4 lg:w-[70%] md:w-[40%] md:h-auto sm:w-[30%] sm:h-auto custom-sm:w-[30%] custom-sm:h-auto order-2 lg:order-1 md:order-1 sm:order-1 custom-sm:order-1"
            src={Ai}
            alt="Ai"
          />
        </div>

        <div
          className="box max-w-[608px] bg-navColor border-1 border-navBorder rounded-[16px] text-white font-space text-[42px] md:text-[40px] sm:text-[36px] font-medium flex justify-center items-center lg:block md:hidden sm:hidden custom-sm:hidden"
          id="box6"
          style={{
            boxShadow: "inset 0px 1px 25px 0px rgba(29, 206, 242, 0.25)",
            padding: "16px",
          }}
        ></div>

        <div className="flex flex-col sm:flex-col custom-sm:flex-col md:flex-col lg:flex-row items-center gap-[10px] justify-center w-[1290px] max-w-[1070px] xl:w-[1070px] lg:w-[830px] md:w-[400px] sm:w-[450px] custom-sm:w-[400px]">
          <div className="w-[40%] sm:w-[80%] custom-sm:w-[100%] md:w-[100%] lg:w-[40%] h-[220px] text-white font-space text-[16px] md:text-[12px] sm:text-[8px] font-medium bg-navColor border-1 border-navBorder rounded-tl-[16px] rounded-br-[16px] rounded-tr-[16px] rounded-bl-[56px] lg:rounded-bl-[56px] sm:rounded-bl-[16px] custom-sm:rounded-bl-[16px]">
            <div className="flex flex-col justify-center h-full sm:ml-0 custom-sm:ml-0 md:ml-0 lg:ml-12 sm:items-center custom-sm:items-center md:items-center lg:items-start">
              <h3 className="text-white font-space text-[22px] md:text-[20px] sm:text-[16px] custom-sm:text-[16px] font-medium text-start">
                Portfolio Sync
              </h3>
              <p className="text-fontColor font-space text-[16px] md:text-[12px] sm:text-[8px] custom-sm:text-[12px] font-normal text-start w-[300px] max-w-[300px] md:w-[300px] sm:w-[300px] h-[130px] custom-sm:text-[16px] custom-sm:w-[300px] pr-4">
                Easily manage your portfolio. You'll always know what you own,
                how it's performing, and where it's headed.
              </p>
            </div>
          </div>

          <div
            className="w-[60%] flex sm:w-[80%] custom-sm:w-[100%] md:w-[100%] h-[220px] text-white font-space text-[16px] md:text-[12px] sm:text-[8px] font-medium bg-navColor border-1 border-navBorder rounded-tl-[16px] rounded-br-[16px] rounded-tr-[16px] rounded-bl-[56px] lg:rounded-br-[56px] custom-sm:rounded-bl-[16px]"
            style={{
              backgroundImage: `url(${glassImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "30% 100%",
              backgroundPosition: "right center",
            }}
          >
            <div className="flex flex-col justify-center h-full sm:ml-4 custom-sm:ml-0 md:ml-0 lg:ml-12 sm:items-center custom-sm:items-center md:items-center lg:items-start">
              <h3 className="text-white font-space text-[22px] md:text-[20px] sm:text-[16px] custom-sm:text-[16px] font-medium text-start">
                Opportunity Scout
              </h3>
              <p className="text-fontColor font-space text-[16px] md:text-[12px] sm:text-[8px] custom-sm:text-[12px] font-normal text-start w-[300px] max-w-[300px] md:w-[300px] sm:w-[300px] h-[130px] custom-sm:text-[13px] custom-sm:w-[300px] pl-8 lg:pl-0">
                Find exciting new projects, events and tokens that others might
                be missing. Identifying promising opportunities early, so you
                never miss out the next big thing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
