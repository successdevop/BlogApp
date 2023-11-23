import GlobalButton from "../components/GlobalButton";
import Categories from "../components/Categories";
import JoinOurTeam from "../components/JoinOurTeam";
import { useSelector } from "react-redux";
import SinglePost from "../components/SinglePost";
import { nanoid } from "nanoid";

function BlogPage() {
  const { dataBase } = useSelector((store) => store.pagination);

  return (
    <div>
      {/* featured page */}
      <section className="bg-[#F4F0F8]">
        <div className="p-[4rem] lmd:flex gap-20 max-w-[128rem] mx-auto xlg:gap-[7rem]">
          <div>
            <h5 className="text-[#232536] text-[1.6rem] font-medium leading-8 tracking-[.3rem] uppercase mb-8">
              Featured Post
            </h5>
            <h2 className="max-w-[62.4rem] font-Sen text-[3.6rem] font-bold leading-[4.8rem] tracking-[-.2rem] mb-[1.6rem]">
              Step-by-step guide to choosing great font pairs
            </h2>
            <p className="text-[#4C4C4C] text-[1.4rem] font-medium leading-[2rem] mb-[1.6rem]">
              By <span className="text-[#592EA9]">John Doe</span> l May 23, 2022{" "}
            </p>
            <p className="text-[#6D6E76] max-w-[62.4rem] text-[1.6rem] leading-[2.8rem] mb-[3.2rem]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <GlobalButton text="Read More >" className={"bg-[#FFD050]"} />
          </div>
          <div className="mt-[4rem] lmd:mt-0">
            <img
              src={dataBase[0].posts[0].postImage}
              alt="features img"
              className="lmd:h-[33rem] lmd:w-[33rem] object-cover lg:min-h-full lg:min-w-[40rem]"
            />
          </div>
        </div>
      </section>

      {/* All Pages section */}
      <section className="p-[4rem] max-w-[128rem] mx-auto">
        <div className="mb-[4rem]">
          <h1 className="mb-8 text-[#232536] font-Sen text-[4.8rem] font-bold leading-[6.4rem] tracking-[-.2ren]">
            All posts
          </h1>
          <hr />
        </div>
        <div className="grid gap-12 lg:gap-[5rem]">
          {dataBase.map((item) => {
            const { id, posts } = item;
            console.log(posts);
            return <SinglePost key={nanoid()} id={id} posts={posts} />;
          })}
        </div>
        <div className="flex items-center justify-center gap-10 mt-12">
          <span className="text-[#6D6E76] cursor-pointer font-Sen text-[2rem] hover:text-[#232536] font-semibold leading-[3.2rem]">
            {"< Prev"}
          </span>
          <span className="text-[#6D6E76] cursor-pointer font-Sen text-[2rem] hover:text-[#232536] font-semibold leading-[3.2rem]">
            {"Next >"}
          </span>
        </div>
      </section>

      {/* categories */}
      <div className="max-w-[128rem] mx-auto">
        <Categories />
      </div>

      {/* join our team */}
      <div className="max-w-[128rem] mx-auto my-[10rem]">
        <JoinOurTeam />
      </div>
    </div>
  );
}

export default BlogPage;
