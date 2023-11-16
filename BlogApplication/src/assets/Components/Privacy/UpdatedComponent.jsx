import React from "react";

function UpdatedComponent(props) {
  const {
    title,

    content,

    secondTitle,

    secondContent,
  } = props;

  return (
    <div className="flex flex-col items-center mx-[10.5rem] justify-center mt-[8rem]  lg:mx-[40rem] sm:max-w-[48rem]">
      <h1
        className="text-gray-800 text-[1.4rem] md:text-5xl font-bold"
      >
        {title}
      </h1>
      <p
        className={`text-neutral-600 mt-[2rem] text-base leading-7 `}
      >
        {content}
      </p>
      <h2
        className="text-gray-800 text-4xl font-bold leading-10 tracking-tighter mt-[2rem]"
      >
        {secondTitle}
      </h2>
      <p
        className="text-neutral-600 text-base leading-7 mt-[2rem]"
      >
        {secondContent}
      </p>
    </div>
  );
}

export default UpdatedComponent;
