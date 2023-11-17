import PropTypes from "prop-types";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Authors({ authorsData }) {
  return (
    <div className="max-w-7xl mx-auto">
      <h5 className="text-[#232536] text-[2rem] font-bold leading-[3.8rem] tracking-[-.05rem] text-center mb-6">
        List of Authors
      </h5>
      <div className="grid gap-6 lmd:grid-cols-2 lg:grid-cols-4">
        {authorsData.map((author) => (
          <div
            key={author.id}
            className="bg-[#F4F4F4] grid gap-10 justify-items-center text-center py-8"
          >
            <img src={author.img} alt="author's image" />
            <div className="grid gap-7">
              <h5 className="text-[#232536] text-[2.5rem] font-bold leading-[2.5rem]">
                {author.name}
              </h5>
              <p className="text-[#6D6E76] text-[1.3rem] leading-[2rem]">
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
    </div>
  );
}

Authors.propTypes = {
  authorsData: PropTypes.array,
};
export default Authors;
