import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function GlobalButton({ href, bgColor, text = "Subscribe", hover }) {
  return (
    <button style={{ background: bgColor }} className={`hover:bg-[${hover}]`}>
      <Link className={`text-[#232536] `} to={href}>
        {text}
      </Link>
    </button>
  );
}

GlobalButton.propTypes = {
  href: PropTypes.string,
  bgColor: PropTypes.string,
  text: PropTypes.string,
  hover: PropTypes.string,
};
export default GlobalButton;
