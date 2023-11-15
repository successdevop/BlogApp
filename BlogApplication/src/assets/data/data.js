import { nanoid } from "nanoid";
import { ABOUT, BLOG, CONTACT, HOME } from "../constants/routePaths";

export const navLinks = [
  { id: nanoid(), text: "Home", href: HOME },
  { id: nanoid(), text: "Blog", href: BLOG },
  { id: nanoid(), text: "About Us", href: ABOUT },
  { id: nanoid(), text: "Contact Us", href: CONTACT },
];
