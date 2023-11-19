import { LeftArrorIcon, RightArrorIcon } from "../utility/icons";
import { imgA } from "../utility/images";

function Testimonials() {
  return (
    <div className="bg-[#FBF6EA] p-12 grid gap-[3rem] lmd:grid-cols-[1.5fr_2fr] lmd:p-[7rem]">
      <div className="grid justify-items-center text-center border-b-4 pb-[3rem] lmd:block lmd:text-left lmd:pb-0 lmd:border-r-2 lmd:border-b-0 lmd:pr-[3rem]">
        <h6 className="text-[#232536] text-[1.6rem] font-semibold leading-[2rem] tracking-[.3rem] uppercase">
          TESTIMONIALs
        </h6>
        <h3 className="max-w-[34.5rem] mt-[1.2rem] mb-[1.6rem] font-Sen text-[3.6rem] font-bold leading-[4.8rem] tracking-[-.2rem] text-[#232536]">
          What people say about our blog
        </h3>
        <p className="max-w-[34.9rem] text-[#232536] text-[1.6rem] leading-[2.8rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>

      {/* carousel box */}
      <div>
        <div className="grid gap-[4rem] justify-items-center text-center">
          <p className="max-w-[46.9rem] font-Sen text-[2.4rem] font-bold leading-[3.2rem] text-[#232536]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mt-[5rem] relative lmd:justify-self-stretch">
            <div className="flex gap-[1.6rem] items-center">
              <img
                src={imgA}
                alt="testimonial images"
                className="w-[4.8rem] h-[4.8rem] rounded-full"
              />
              <div>
                <h5 className="text-[#232536] font-Sen text-[2rem] font-bold leading-[1.6rem]">
                  Jonathan Vallem
                </h5>
                <p className="text-[#6D6E76] text-[1.4rem] leading-[2.8rem] lmd:text-left">
                  New york, USA
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-4 justify-center h-[2.6rem] lmd:absolute lmd:bottom-0 lmd:right-[0rem] lmd:justify-self-end">
              <span className="h-[2.6rem]">
                <LeftArrorIcon
                  className={
                    "h-[2rem] w-[2rem] bg-white rounded-full p-1 transition-all active:h-[2.5rem] active:w-[2.5rem] hover:text-white hover:bg-[#232536]"
                  }
                />
              </span>
              <span className="">
                <RightArrorIcon
                  className={
                    "h-[2rem] w-[2rem] bg-white rounded-full p-1 transition-all active:h-[2.5rem] active:w-[2.5rem] hover:text-white hover:bg-[#232536]"
                  }
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
