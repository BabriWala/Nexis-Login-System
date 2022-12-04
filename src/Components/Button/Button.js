import React from "react";

const Button = ({ children }) => {
  // console.log(children)
  return (
    <>
      {children.length === 2 ? (
        <span className="bg-[#1678CB] cursor-pointer rounded-2xl inline-block text-white py-2 px-3 md:py-4 md:px-5">
          <span className=" text-base font-medium text-white flex items-center">
            <span className=" mr-2">{children[0]}</span>
            {children[1]}
          </span>
        </span>
      ) : (
        <span className="bg-[#1678CB] cursor-pointer rounded-2xl text-white py-2 px-3 md:py-4 md:px-5">
          <span className=" text-base font-medium text-white">{children}</span>
        </span>
      )}
    </>
  );
};

export default Button;
