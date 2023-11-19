import BackgroundImage from "../assets/images/bgImgB.png";
import GlobalButton from "./GlobalButton";

function HeroSection() {
  return (
    <div
      className=""
      style={{
        background: `linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.8)), url(${BackgroundImage}) no-repeat center/cover`,
      }}
    >
      <div
        className={`px-8 py-[2rem] text-center grid gap-4 max-w-7xl mx-auto justify-items-center lg:justify-items-start lg:text-left lg:py-[6rem] lg:gap-0`}
      >
        <p className="text-[#e2e2e2] text-[12px] uppercase font-medium leading-[2rem] tracking-[.3rem] md:text-[1.6rem] mb-4">
          posted on <span className="font-black text-white">startup</span>
        </p>

        <h5 className="text-[3rem]  text-white max-w-[60.3rem] md:text-[5.6rem] md:mb-[2.4rem] md:tracking-[-.2rem] md:font-bold md:leading-[6.4rem] lmd:max-w-[60rem]">
          Step-by-step guide to choosing great font pairs
        </h5>
        <div className="mb-[2rem] md:mb-[2.9rem]">
          <p className="text-[#e2e2e2] md:text-[1.6rem] leading-[2.8rem] font-normal md:mb-[1.6rem]">
            By <span className="text-[#FFD050]">James West</span> | May 23, 2022
          </p>
          <p className="text-[#e2e2e2] leading-8 md:text-[1.6rem] md:leading-[2.8rem] font-normal lmd:max-w-[53rem]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>
        <GlobalButton
          text="Read More >"
          bgColor={"#FFD050"}
          hover={"#EDC14A"}
        />
      </div>
    </div>
  );
}

export default HeroSection;
