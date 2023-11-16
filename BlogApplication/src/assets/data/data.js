import { nanoid } from "nanoid";
import { ABOUT, BLOG, CONTACT, HOME } from "../constants/routePaths";
import authorA from "../images/authorsImg/authorA.png";
import authorB from "../images/authorsImg/authorB.png";
import authorC from "../images/authorsImg/authorC.png";
import authorD from "../images/authorsImg/authorD.png";

export const navLinks = [
  { id: nanoid(), text: "Home", href: HOME },
  { id: nanoid(), text: "Blog", href: BLOG },
  { id: nanoid(), text: "About Us", href: ABOUT },
  { id: nanoid(), text: "Contact Us", href: CONTACT },
];

export const authorsList1 = [
  {
    id: nanoid(),
    img: authorA,
    name: "Floyd Miles",
    job: "Content Writer @Company",
  },
  {
    id: nanoid(),
    img: authorB,
    name: "Dianne Russell",
    job: "Content Writer @Company",
  },
  {
    id: nanoid(),
    img: authorC,
    name: "Jenny Wilson",
    job: "Content Writer @Company",
  },
  {
    id: nanoid(),
    img: authorD,
    name: "Leslie Alexander",
    job: "Content Writer @Company",
  },
];
