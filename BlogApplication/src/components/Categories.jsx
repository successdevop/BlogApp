import { nanoid } from "nanoid";
import {
  BusinessIcon,
  EconomyIcon,
  StartUpIcon,
  TechnologyIcon,
} from "../utility/icons";
import PropTypes from "prop-types";

function Categories({ marginTop = 8, textAlign, text = "Choose A Catagory" }) {
  return (
    <div className={`mt-[${marginTop}rem]`}>
      <h4
        className={`text-${textAlign} text-[#232536] text-[2.8rem] mb-6 font-bold leading-[4.8rem] tracking-[-.2rem]`}
      >
        {text}
      </h4>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {categoryData.map((category) => (
          <div
            key={category.id}
            className={`bg-[${category.color}] border border-[#6D6E76] p-8 flex-[1_0_25%]`}
          >
            <category.icon className={"h-[2rem] w-[2rem]"} />

            <h5 className="text-[2.2rem] font-bold leading-[4rem] tracking-[-.1rem]">
              {category.header}
            </h5>
            <p className="text-[1.1rem] leading-[2rem]">{category.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Categories.propTypes = {
  marginTop: PropTypes.number,
  textAlign: PropTypes.string,
  text: PropTypes.string,
};

export default Categories;

const categoryData = [
  {
    id: nanoid(),
    icon: BusinessIcon,
    header: "Business",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    color: "#fff",
  },
  {
    id: nanoid(),
    icon: StartUpIcon,
    header: "Startup",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    color: "#FFD050",
  },
  {
    id: nanoid(),
    icon: EconomyIcon,
    header: "Economy",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    color: "#fff",
  },
  {
    id: nanoid(),
    icon: TechnologyIcon,
    header: "Technology",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    color: "#fff",
  },
];
