import { LeftArrorIcon, RightArrorIcon } from "../utility/icons";
import { imgA } from "../utility/images";

function Testimonials() {
  return (
    <div className="bg-[#FBF6EA] p-12 grid gap-[3rem] lmd:grid-cols-2">
      <div className=" border-b-4 pb-[3rem] lmd:pb-0 lmd:border-r-2 lmd:border-b-0 lmd:pr-[1.5rem]">
        <h6 className="text-[1.2rem] font-semibold leading-[1.5rem] tracking-[.3rem] uppercase text-[#232536]">
          TESTIMONIALs
        </h6>
        <h3 className="text-[2.7rem] font-bold my-6 leading-[3rem] tracking-[-.05rem] text-[#232536]">
          What people say about our blog
        </h3>
        <p className="text-[#232536] text-[1.3rem] leading-[2.5rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>

      {/* carousel box */}
      <div>
        <div className="grid gap-[4rem]">
          <p className="text-[1.6rem] font-medium leading-[2.5rem] text-[#232536]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="relative">
            <div className="flex gap-4 items-center">
              <img
                src={imgA}
                alt="testimonial images"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h5 className="text-[#232536] text-[1.3rem] font-bold">
                  Jonathan Vallem
                </h5>
                <p className="text-[#6D6E76] text-[1rem] leading-[1rem]">
                  New york, USA
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-4 justify-center h-[2.6rem] lmd:absolute lmd:bottom-0 lmd:right-[1rem]">
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
