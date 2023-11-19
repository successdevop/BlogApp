import JoinOurTeam from "../components/JoinOurTeam";
import WhatNextPost from "../components/WhatNextPost";
import { StartUpIcon } from "../utility/icons";
import { featurePageImage, twoWomen } from "../utility/images";

function BlogPostPage() {
  return (
    <div>
      {/* top */}
      <div className="pt-16 pb-[6.4rem] px-4 max-w-[76rem] mx-auto">
        <div className="flex gap-4 items-center">
          <img
            src={twoWomen}
            alt="women"
            className="h-[4.8rem] w-[4.8rem] rounded-full object-cover"
          />
          <div>
            <h4 className="text-[#592EA9] font-Sen text-[2.8rem] font-bold leading-[4rem] tracking-[-.1rem]">
              Andrew Jonson
            </h4>
            <p className="text-[#6D6E76] text-[1.6rem] leading-[2rem]">
              Posted on 27th January 2022
            </p>
          </div>
        </div>
        <h1 className="mt-[2.4rem] mb-[3.4rem] max-w-[76.8rem] text-[#232536] font-Sen text-[4.8rem] font-bold leading-[6.4rem] tracking-[-.2rem]">
          Step-by-step guide to choosing great font pairs
        </h1>
        <div className="flex items-center gap-4">
          <StartUpIcon />
          <span className="text-[#232536] font-Sen text-[2.4rem] font-bold leading-[3.2rem]">
            Startup
          </span>
        </div>
      </div>

      {/* body */}
      <div className="max-w-[128rem] mx-auto">
        <img src={featurePageImage} alt="f" className="w-full" />
        <div>
          <div className="max-w-[80rem] mx-auto mt-[6rem]">
            <h2 className="mb-[1.6rem] text-[#232536] font-Sen text-[3.6rem] font-bold leading-[4.8rem] tracking-[-.2rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </h2>
            <p className="text-[#6D6E76] text-[1.6rem] leading-[2.8rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus. Sociis natoque penatibus
              et magnis dis parturient montes. Ridiculus mus mauris vitae
              ultricies leo. Neque egestas congue quisque egestas diam. Risus in
              hendrerit gravida rutrum quisque non.
            </p>
          </div>
          <div className="max-w-[80rem] mx-auto mt-[6rem]">
            <h2 className="mb-[1.6rem] text-[#232536] font-Sen text-[3.6rem] font-bold leading-[4.8rem] tracking-[-.2rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </h2>
            <p className="mb-[2.4rem] text-[#6D6E76] text-[1.6rem] leading-[2.8rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus. Sociis natoque penatibus
              et magnis dis parturient montes. Ridiculus mus mauris vitae
              ultricies leo. Neque egestas congue quisque egestas diam. Risus in
              hendrerit gravida rutrum quisque non.
            </p>

            <p className="text-[#6D6E76] text-[1.6rem] leading-[2.8rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus. Sociis natoque penatibus
              et magnis dis parturient montes. Ridiculus mus mauris vitae
              ultricies leo. Neque egestas congue quisque egestas diam. Risus in
              hendrerit gravida rutrum quisque non.
            </p>

            <ul className="my-[2.4rem] list-disc pl-[2.5rem] grid gap-4">
              <li className="text-[#16172294] font-Sen text-[2.4rem] font-bold leading-[3.2rem]">
                Lorem ipsum dolor sit amet
              </li>
              <li className="text-[#16172294] font-Sen text-[2.4rem] font-bold leading-[3.2rem]">
                Non blandit massa enim nec scelerisque
              </li>
              <li className="text-[#16172294] font-Sen text-[2.4rem] font-bold leading-[3.2rem]">
                Neque egestas congue quisque egestas
              </li>
            </ul>

            <p className="text-[#6D6E76] text-[1.6rem] leading-[2.8rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus. Sociis natoque penatibus
              et magnis dis parturient montes. Ridiculus mus mauris vitae
              ultricies leo. Neque egestas congue quisque egestas diam. Risus in
              hendrerit gravida rutrum quisque non.
            </p>
          </div>
          <div className="max-w-[80rem] mx-auto mt-[6rem]">
            <h2 className="mb-[1.6rem] text-[#232536] font-Sen text-[3.6rem] font-bold leading-[4.8rem] tracking-[-.2rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </h2>
            <p className="text-[#6D6E76] text-[1.6rem] leading-[2.8rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus. Sociis natoque penatibus
              et magnis dis parturient montes. Ridiculus mus mauris vitae
              ultricies leo. Neque egestas congue quisque egestas diam. Risus in
              hendrerit gravida rutrum quisque non.
            </p>
          </div>
        </div>
      </div>

      {/* what to read next */}
      <div className="mt-[10rem] max-w-[128rem] mx-auto">
        <h2 className="text-[#000] font-Sen text-[3.6rem] font-bold leading-[4.8rem] tracking-[-.2rem]">
          What to read next
        </h2>
        <div className="mt-[5rem] border-b-2 pb-[2rem] lmd:flex gap-[3rem]">
          <WhatNextPost />
          <WhatNextPost />
          <WhatNextPost />
        </div>
      </div>

      {/* join our team */}
      <div className="my-[6rem]">
        <JoinOurTeam />
      </div>
    </div>
  );
}

export default BlogPostPage;
