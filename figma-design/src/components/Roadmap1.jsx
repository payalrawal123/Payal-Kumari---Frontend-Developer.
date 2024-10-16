import React, { useEffect } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Roadmap = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <div className="mx-auto p-4 gap-8 text-white flex flex-col bg-backgrd">
      <h1 className="text-white font-space text-[40px] font-medium text-center mb-8">
          Roadmap
        </h1>
        {/* PHASE 1 */}
        <div className="flex flex-col md:flex-row w-full gap-8 mb-8">
          <div
            className="w-full ml-32 md:w-[50%] p-4 flex flex-col items-center justify-center gap-6"
            data-aos="fade-right"
          >
            <div className="flex flex-col items-center md:items-start sm:items-start custom-sm:items-start w-full">
              <button className="bg-white text-black w-[71px] h-[28px] rounded-[4px] px-[12px] py-[6px] font-space text-[12px] font-medium mb-4">
                PHASE 1
              </button>
              <p className="text-[40px] font-space font-medium text-center md:text-[32px]">
                Kicking Off
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full ">
              {/* Example checkmark item */}
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Launch of EthAi: Officially
                </p>
              </div>
              {/* Repeat for other checkmarks */}
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Development of Core Ai Agents
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Use Onboarding Campaign
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Community Engagement Initiatives
                </p>
              </div>
            </div>
          </div>

          <div
            className="w-full md:w-[50%] video-section relative"
            data-aos="fade-left"
          >
            <div
              className="absolute inset-0"
              style={{
                background: `
                linear-gradient(180deg, #00161D 0%, rgba(0, 22, 29, 0) 37.69%), 
                linear-gradient(180deg, rgba(0, 22, 29, 0) 81.47%, #00161D 100%), 
                linear-gradient(270deg, rgba(0, 22, 29, 0) 82.85%, #00161D 100%)`,
                zIndex: 1,
                pointerEvents: "none",
              }}
            />
            <video
              className="w-full h-auto object-cover"
              src="https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/037f/7f94/-dbe5-4e84-a0d0-34a0193e07d6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k2eVQlf66fcfeu5aqk3pSXxFxARn31u2PoC4aQMKXyDeC3N1vDJzJYPcNFS49mpz78bk6kHNuAWVKLuv-zxdbq9vYGtm7ads4yJNFtvqKYLBwQUQO7c3vUnKbZFeGpZ-rkJx56p3bIEMx~0yREMmXVj1c9OnSeHpxa7tfQfbiHKNAHe5UYyi2lXdQ1LvtmrztHR7TEGQfaDnJOAA-KvNCDX-JelTc-GPb6ZmKtutplhI0nMS9RcfLHJvDS-GwueDeMEhS~vfTnnnuCQNEW8EafGFiB-gN9-Vh6XUUQvXnVRfzJtxY0ABjGKSOODRyzgUTA7ObXOidFjsJh0-cLSbKg__"
              autoPlay
              loop
              muted
              style={{
                zIndex: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>

        {/* PHASE 2 */}
        <div className="flex flex-col md:flex-row-reverse w-full gap-8 mb-8">
          <div
            className="w-full ml-32 md:w-[50%] p-4 flex flex-col items-center justify-center gap-6"
            data-aos="fade-left"
          >
            <div className="flex flex-col items-center md:items-start sm:items-start custom-sm:items-start w-full">
              <button className="bg-white text-black w-[71px] h-[28px] rounded-[4px] px-[12px] py-[6px] font-space text-[12px] font-medium mb-4">
                PHASE 2
              </button>
              <p className="text-[40px] font-space font-medium text-center md:text-[32px]">
                Bigger Insights
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full ">
              {/* Example checkmark item */}
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Introduction of Advanced AI Agents
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Strategic Partnerships
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  User Interface Optimization
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Comprehensive Marketing Campaign
                </p>
              </div>
              {/* Repeat for other checkmarks */}
            </div>
          </div>

          <div
            className="w-full md:w-[50%] video-section relative"
            data-aos="fade-right"
          >
            <div
              className="absolute inset-0"
              style={{
                background: `
                linear-gradient(180deg, #00161D 0%, rgba(0, 22, 29, 0) 37.69%), 
                linear-gradient(180deg, rgba(0, 22, 29, 0) 81.47%, #00161D 100%), 
                linear-gradient(270deg, rgba(0, 22, 29, 0) 82.85%, #00161D 100%)`,
                zIndex: 1,
                pointerEvents: "none",
              }}
            />
            <video
              className="w-full h-auto object-cover"
              src="https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/cb86/a228/-0cff-4aa8-9d9a-c49552d1766c?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KTNvAIBzPrPjNmpZXye0ckBOYZnlZ11FzblBWls1xX6FpKLNUTC22YA7nIVDmEZLvgFD7iFevF6mt~ajj12GEDAQkS0yF8JTj9SYctj49p-IOV8ApKCiW0JVJVYbApwJhV1Rh-asA7Bpm2csJkmD~CERIKEZf5YwhR2jrLmPJo7Tn6mMlCCwv6vCHD5r--1sPJsg3CPD-gOVQjIgcHJIpKQqHzm9N-6BtlKY61zc1EWilZ5Z6x8XM0GjXW6PIFpcrmqtPBSoXHeq-BnSW5lzBQJ~BTrQOMkppo5GSGNh54In-LOhKscQQYrRDs0wYLhKoYsAhpo13jO-8yhfjIT92A__"
              autoPlay
              loop
              muted
              style={{
                zIndex: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>

        {/* PHASE 3 */}
        <div className="flex flex-col md:flex-row w-full gap-8 mb-8">
          <div
            data-aos="fade-left"
            className="w-full ml-32 md:w-[50%] p-4 flex flex-col items-center justify-center gap-6"
          >
            <div className="flex  flex-col items-center md:items-start sm:items-start custom-sm:items-start w-full">
              <button className="bg-white text-black w-[71px] h-[28px] rounded-[4px] px-[12px] py-[6px] font-space text-[12px] font-medium mb-4">
                PHASE 3
              </button>
              <p className="text-[40px] font-space font-medium text-center md:text-[32px]">
                Full Power
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full ">
              <div className="flex items-center w-full ">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Introduction of Enhanced Features
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  API Integration for Data Access
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Launch of Community-Driven Initiatives
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Continuous Improvement and Updates
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-right"
            className="w-full md:w-[50%] video-section relative"
          >
            <div
              className="absolute inset-0"
              style={{
                background: `
          linear-gradient(180deg, #00161D 0%, rgba(0, 22, 29, 0) 37.69%), 
          linear-gradient(180deg, rgba(0, 22, 29, 0) 81.47%, #00161D 100%), 
          linear-gradient(270deg, rgba(0, 22, 29, 0) 82.85%, #00161D 100%)
        `,
                zIndex: 1,
                pointerEvents: "none",
              }}
            />
            <video
              className="w-full h-auto object-cover"
              src='https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/86e0/aff1/-c5e4-4b3f-b0ee-214e16d683f4?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VIvgvLO64Rv6IWUacSFhIyxGDdrR6J4K7f3mjTT82w2kn99znhte4WUDRgqJNR7x6X9OQ1GahqOzuGxUgxzlKht~nuuF1j-lTFBlYdMGMgL0dqa11rCr-O0U6yonoqLqGxBz7VeaFfRMYwbeo1VMO5xr~r7TkMVNo2084lOnu-Unn9OFqdfP0A~KUfL7jgoVmPGUTN4VoiarZQEQhIqlUUXl2lKH5T8UK9GmpQDpOQHjM6sdSCbm2uXq9V5E0koiN73C3TF9yVZRuGOn1wkg6El2VpeKjoQQKzrrSlaErGKLCueghNT5WzLegJ61EydZ4mZbyyXj64FMXTtIgV7B6A__'
              autoPlay
              loop
              muted
              style={{
                zIndex: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>

        {/* Add additional phases if needed */}
      
    </>
  );
};




export default Roadmap;

