import HeroSection from "../components/HeroSection";
import featuredImg from "../assets/images/featuredImgs/featureA.svg";
import discoveryImg from "../assets/images/discovery.png";
import GlobalButton from "../components/GlobalButton";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";
import { authorsList1 } from "../assets/data/data";
import Authors from "../components/Authors";

function HomePage() {
  return (
    <>
      <HeroSection />

      {/* featured post section */}
      <section className="max-w-7xl mx-auto lg:px-4 lg:flex lg:gap-6 pt-[8rem]">
        <div className="my-[2.5rem] lg:mb-[0] lg:mt-[5rem] px-2">
          <h4 className="mb-[.5rem] font-bold text-[#232536] text-[2rem] lg:text-[3.6rem] lg:leading-[4.8rem] lg:tracking-[-.2rem]">
            Featured Post
          </h4>
          <div className="border border-[#6D6E76] p-4">
            <img src={featuredImg} alt="featured image" className="w-full" />
            <div className="mt-[1rem]">
              <p className="text-[#4C4C4C] text=[1.4rem] font-medium leading-[2rem]">
                By <span className="text-[#592EA9]">John Doe</span> l May 23,
                2022
              </p>
              <p className="mb-[1rem] text-[#232536] text-[1.6rem] leading-8 font-medium lg:text-[2.8rem] lg:font-bold lg:leading-[4rem] tracking-[-.1rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <p className="mb-[1.2rem] text-[#6D6E76] text-[13px] lg:text-[1.6rem] lg:leading-[2.8rem]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <GlobalButton text="Read More >" bgColor={"#FFD050"} />
            </div>
          </div>
        </div>
        {/* All post */}
        <div className="">
          <div className="flex items-center justify-between px-2 lg:mt-[5rem]">
            <h2 className="font-bold text-[#232536] text-[2rem] lg:text-[3.6rem] lg:leading-[4.8rem] lg:tracking-[-.2rem]">
              All Posts
            </h2>
            <p className="text-[#592EA9] lg:text-[1.6rem] lg:leading-[2.8rem]">
              View All
            </p>
          </div>
          <div>
            <Link>
              <div className="p-4 transition-all hover:bg-[#FBF6EA]">
                <p className="text-[#4C4C4C] text=[1.4rem] font-medium leading-[2rem]">
                  By <span className="text-[#592EA9]">John Doe</span> l Aug 23,
                  2021
                </p>
                <p className="text-[#232536] font-bold text-[1.6rem] lg:text-[2.4rem] lg:leading-[3.2rem]">
                  8 Figma design systems that you can download for free today.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* about us and mission section */}
      <section className="pt-[10rem] max-w-7xl mx-auto">
        <div className="h-4 grid grid-cols-[1fr_3fr_1fr]">
          <div className="h-4 bg-[#fff]"></div>
          <div className="h-4 bg-[#FFD050]"></div>
          <div className="h-4 bg-[#592EA9]"></div>
        </div>
        {/* about */}
        <div className="bg-[#F4F0F8] p-12 lg:grid grid-cols-2 gap-12">
          <div className="mb-[4rem]">
            <p className="text-[1.2rem] mb-4 font-medium leading-8 tracking-[.3rem] uppercase lg:font-semibold lg:text-[1.6rem]">
              ABOUT US
            </p>
            <h2 className="text-[2.4rem] mb-4 leading-[3.3rem] font-bold tracking-[-0.05rem] lg:leading-[4.8rem] lg:tracking-[-.2rem] lg:text-[3.6rem]">
              We are a community of content writers who share their learnings
            </h2>
            <p className="text-[1.1rem] mb-4 leading-8 lg:text-[1.6rem] lg:leading-[2.8rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link>
              <span className="text-[#592EA9] lg:text-[1.8rem] font-bold leading-[3.2rem]">{`Read More >`}</span>
            </Link>
          </div>
          {/* mission */}
          <div>
            <p className="text-[1.2rem] mb-4 font-medium leading-8 tracking-[.3rem] uppercase lg:font-semibold lg:text-[1.6rem]">
              Our mision
            </p>
            <h2 className="text-[2.4rem] mb-4 leading-[3.3rem] font-bold tracking-[-0.05rem] lg:leading-[4.8rem] lg:tracking-[-.2rem] lg:text-[3.6rem]">
              Creating valuable content for creatives all around the world
            </h2>
            <p className="text-[1.1rem] leading-8 lg:text-[1.6rem] lg:leading-[2.8rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

      {/* category section */}
      <section className="max-w-7xl mx-auto">
        <Categories />
      </section>

      {/* discover section */}
      <section className="max-w-7xl mx-auto mt-[8rem] lg:relative">
        <div>
          <img
            src={discoveryImg}
            alt="discoverImg"
            className="block lg:overflow-hidden"
          />
          <div className="mt-[1rem] pt-4 p-1 bg-[#fff] lg:absolute lg:bottom-0 lg:right-0 lg:w-[55%] lg:h-[70%] lg:px-[5%] lg:py-[7%]">
            <h5 className="text-[#232536] text-[1.1rem] font-semibold leading-[1rem] tracking-[.3rem] uppercase">
              Why we started
            </h5>
            <h4 className="text-[3.5rem] my-4 font-bold leading-[4rem] tracking-[-.1rem] lg:text-[2.5rem] lg:font-medium lg:leading-[3rem]">
              It started out as a simple idea and evolved into our passion
            </h4>
            <p className="text-[1.1rem] mb-6 leading-[2rem] text-[#6D6E76]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <GlobalButton text="Discover our story >" bgColor={"#FFD050"} />
          </div>
        </div>
      </section>

      {/* list of Authors section */}
      <div className="mt-[6rem]">
        <Authors authorsData={authorsList1} />
      </div>
    </>
  );
}

export default HomePage;
