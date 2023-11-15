import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function GlobalButton({ href }) {
  return (
    <button>
      <Link className="text-[#232536]" to={href}>
        Subscribe
      </Link>
    </button>
  );
}

GlobalButton.propTypes = {
  href: PropTypes.string,
};
export default GlobalButton;
