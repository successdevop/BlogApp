import PropTypes from "prop-types";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Authors({ authorsData }) {
  return (
    <div className="max-w-7xl mx-auto">
      <h5 className="text-[#232536] text-[2rem] font-bold leading-[3.8rem] tracking-[-.05rem] text-center mb-6">
        List of Authors
      </h5>
      <Link>
        <div className="grid gap-6 lmd:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4">
          {authorsData.map((author) => (
            <div
              key={author.id}
              className="bg-[#F4F4F4] transition-all hover:bg-[#FBF6EA] grid gap-10 justify-items-center text-center p-4"
            >
              <img src={author.img} alt="author's image" />
              <div className="grid gap-7">
                <h5 className="text-[#232536] text-[2rem] font-semibold leading-[2rem]">
                  {author.name}
                </h5>
                <p className="text-[#6D6E76] text-[1.2rem] leading-[1rem]">
                  {author.job}
                </p>
                <div className="flex gap-4 justify-center">
                  <FaFacebook size={"2.4rem"} fill="#232536" />
                  <FaTwitter size={"2.4rem"} fill="#232536" />
                  <FaInstagram size={"2.4rem"} fill="#232536" />
                  <FaLinkedin size={"2.4rem"} fill="#232536" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
}

Authors.propTypes = {
  authorsData: PropTypes.array,
};
export default Authors;
