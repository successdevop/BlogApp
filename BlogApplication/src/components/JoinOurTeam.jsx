import GlobalButton from "./GlobalButton";

function JoinOurTeam() {
  return (
    <div className="flex gap-8 flex-col items-center text-center">
      <h4 className="text-[#232536] text-[3.6rem] font-bold leading-[3.5rem] tracking-[-.2rem] max-w-[41.4rem]">
        Join our team to be a part of our story
      </h4>
      <p className="text-[#6D6E76] text-[1.6rem] leading-[2rem] max-w-[40.5rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <GlobalButton bgColor={"#FFD050"} />
    </div>
  );
}

export default JoinOurTeam;
