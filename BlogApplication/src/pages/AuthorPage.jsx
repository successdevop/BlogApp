import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SinglePost from "../components/SinglePost";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import GlobalButton from "../components/GlobalButton";

const AuthorPage = () => {
  const { id } = useParams();
  const { dataBase } = useSelector((store) => store.pagination);
  const author = dataBase.authors.find((author) => author.id === id);
  const navigate = useNavigate();

  const newDataBase = dataBase.posts.filter((item) => item.authorId === id);

  return (
    <div>
      <div className="bg-[#F4F0F8]">
        <div className="max-w-[77.3rem] mx-auto">
          <div className="flex gap-12 py-[5rem]">
            <div className="mt-[4rem] lmd:mt-0">
              <img src={author.authorImage} alt="author img" />
            </div>
            <div>
              <h2 className="max-w-[62.4rem] font-Sen text-[3.6rem] font-bold leading-[4.8rem] tracking-[-.2rem] mb-[0.5rem]">
                Hey there, I’m {author.authorName} and welcome to my Blog
              </h2>
              <p className="text-[#6D6E76] max-w-[64.5rem] text-[1.6rem] leading-[2.8rem] mb-[1.5rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus.
              </p>
              <div className="flex gap-4">
                <FaFacebook size={"2.4rem"} fill="#232536" />
                <FaTwitter size={"2.4rem"} fill="#232536" />
                <FaInstagram size={"2.4rem"} fill="#232536" />
                <FaLinkedin size={"2.4rem"} fill="#232536" />
              </div>
            </div>
          </div>
          <div className="h-6 grid grid-cols-[1fr_3fr]">
            <div className="h-6 bg-[#FFD050]"></div>
            <div className="h-6 bg-[#592EA9]"></div>
          </div>
        </div>
      </div>
      <div className="max-w-[128rem] mx-auto my-16 pl-[5rem]">
        <GlobalButton
          text="Go Back"
          className={"bg-[#FFD050]"}
          onclick={() => navigate(-1)}
        />
      </div>
      <div className="p-[4rem] max-w-[128rem] mx-auto">
        <div className="mb-[4rem]">
          <h1 className="mb-8 text-[#232536] font-Sen text-[4.8rem] font-bold leading-[6.4rem] tracking-[-.2ren]">
            My posts
          </h1>
          <hr />
        </div>
        <div className="grid gap-12 lg:gap-[5rem]">
          {newDataBase.map((item) => {
            return <SinglePost key={item.postId} {...item} />;
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
      </div>
    </div>
  );
};

export default AuthorPage;
