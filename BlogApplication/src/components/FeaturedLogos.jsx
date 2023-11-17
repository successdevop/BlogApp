import { nanoid } from "nanoid";
import { logoA, logoB, logoC, logoD, logoE } from "../utility/icons";

const logoData = [logoA, logoB, logoC, logoD, logoE];

function FeaturedLogos() {
  return (
    <div className="px-4 xlg:flex xlg:gap-8 xlg:items-end justify-center">
      <div className="text-center mb-12 xlg:mb-0">
        <p className="text-[1.4rem] leading-[1.2rem] text=[#6D6E76]n xlg:text-[1rem]">
          We are
        </p>
        <h4 className="text-[2.5rem] font-bold leading-[3rem] text-[#6D6E76] xlg:text-[1.6rem] xlg:leading-[2rem]">
          Featured in
        </h4>
      </div>
      <div className="grid gap-[4.5rem] justify-items-center md:justify-items-start md:grid-cols-3 md:gap-y-10 lmd:grid-cols-4 lg:grid-cols-5 xlg:gap-12">
        {logoData.map((Item) => (
          <Item key={nanoid()} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedLogos;
