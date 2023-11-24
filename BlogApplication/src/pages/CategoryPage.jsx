import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import SinglePost from "../components/SinglePost";
import { setPageHandler } from "../features/pagination/paginationSlice";
import {
  BusinessIcon,
  EconomyIcon,
  StartUpIcon,
  TechnologyIcon,
} from "../utility/icons";

const iconArr = [StartUpIcon, BusinessIcon, TechnologyIcon, EconomyIcon];
console.log(iconArr);

function CategoryPage() {
  const { postCategory } = useParams();
  const { dataBase, page, maxPagePost } = useSelector(
    (store) => store.pagination
  );

  const dispatch = useDispatch();

  const sortedArr = dataBase.posts.filter(
    (item) => item.postCategory === postCategory
  );

  return (
    <div>
      <div>
        <div className="bg-[#F4F0F8] py-[8rem] grid gap-6">
          <h2 className="text-[#232536] text-center font-Sen text-[5.2rem] font-bold leading-[6.4rem] tracking-[-.2rem]">
            {postCategory}
          </h2>
          <p className="mb-4 max-w-[51.5rem] text-center mx-auto text-[#6D6E76] text-[1.6rem] leading-[2.8rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <p className="text-center text-[#232536] text-[1.6rem] font-medium leading-[2rem] tracking-[.3rem] uppercase">
            Blog {">"} Business
          </p>
        </div>
      </div>
      <div>
        <div className="p-[4rem] max-w-[128rem] mx-auto">
          <div className="grid gap-12 lg:gap-[5rem]">
            {sortedArr
              .slice(
                `${page * maxPagePost - maxPagePost}`,
                `${page * maxPagePost}`
              )
              .map((item) => {
                return <SinglePost key={item.postId} {...item} />;
              })}
          </div>
          <div className="flex items-center justify-center gap-10 mt-12">
            <span
              onClick={() => dispatch(setPageHandler(page - 1))}
              className={`${
                page > 1 ? "" : "opacity-0 invisible"
              } text-[#6D6E76] cursor-pointer font-Sen text-[2rem] hover:text-[#232536] font-semibold leading-[3.2rem]`}
            >
              {"< Prev"}
            </span>
            <span
              onClick={() => dispatch(setPageHandler(page + 1))}
              className={`${
                page < sortedArr.length / maxPagePost
                  ? ""
                  : "opacity-0 invisible"
              } text-[#6D6E76] cursor-pointer font-Sen text-[2rem] hover:text-[#232536] font-semibold leading-[3.2rem]`}
            >
              {"Next >"}
            </span>
          </div>
        </div>
        <div>
          <Link to={``}>
            <div
              className={`border border-[#6D6E76] p-8 flex-[1_0_25%] group transition-all hover:bg-[#FFD050]`}
            >
              {/* <category.icon
                className={
                  "h-[8rem] w-[8rem] bg-[#FBF6EA] rounded-[1rem] p-6 group-hover:bg-white"
                }
              /> */}
              icon
              <h5 className="text-[#232536] font-Sen text-[2.8rem] font-bold leading-[4rem] tracking-[-.rem] mt-6">
                {/* {category.header} */}hello
              </h5>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
