import { nanoid } from "nanoid";
import { ABOUT, BLOG, CONTACT, HOME } from "../constants/routePaths";
import {
  authorA,
  authorB,
  authorC,
  authorD,
  authorE,
  authorF,
  authorG,
  authorH,
} from "../../utility/images";

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

export const authorsList2 = [
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
  {
    id: nanoid(),
    img: authorE,
    name: "Guy Hawkins",
    job: "Content Writer @Company",
  },
  {
    id: nanoid(),
    img: authorF,
    name: "Eleanor Pena",
    job: "Content Writer @Company",
  },
  {
    id: nanoid(),
    img: authorG,
    name: "Robert Fox",
    job: "Content Writer @Company",
  },
  {
    id: nanoid(),
    img: authorH,
    name: "Jacob Jones",
    job: "Content Writer @Company",
  },
];
