import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function GlobalButton({ href, className, text = "Subscribe", onclick }) {
  const buttonStyles = {
    borderRadius: "3px",
    border: "1px solid transparent",
    padding: "1.6rem 4.8rem",
    fontSize: "1.8rem",
    fontWeight: 700,
    fontFamily: "inherit",
    cursor: "pointer",
    transition: "all 0.25s",
  };

  return (
    <button style={buttonStyles} className={className ?? ""} onClick={onclick}>
      <Link className={`text-[#232536]`} to={href}>
        {text}
      </Link>
    </button>
  );
}

GlobalButton.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  onclick: PropTypes.func,
};
export default GlobalButton;
