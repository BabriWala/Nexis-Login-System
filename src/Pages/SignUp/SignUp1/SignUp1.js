import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import { useForm } from "react-hook-form";

const SignUp1 = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    const first_name = data.firstName;
    const last_name = data.lastName;
    // console.log(first_name, last_name);
    // console.log("Ok")
    navigate("/signUp2", {
      state: {
        first_name,
        last_name,
      },
    });
  };

  return (
    <div className="border rounded text-center shadow-lg p-5 md:p-[74px]">
      <h2 className=" text-xl font-semibold mb-24 text-center">SignUp Form</h2>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <input
          className="w-full mb-16 border-b-2 outline-none pl-2"
          placeholder="Write First Name"
          type="text"
          {...register("firstName", { required: true })}
        />
        <input
          type="text"
          className="w-full mb-16 border-b-2 outline-none pl-2"
          placeholder="Write Last Name"
          {...register("lastName", { required: true })}
        />
        <button type="submit">
          {/* <Link to={"/signUp2"}> */}
          <Button>
            Next Step <AiOutlineArrowRight />
          </Button>
          {/* </Link> */}
        </button>
      </form>
      <h2 className="mt-20 text-right text-xs text-[#7E7E7E]">
        Already have an account?
        <Link to={"/login"}>
          <span className=" text-sm font-semibold text-[#1678CB] underline ml-2">
            LOGIN HERE!
          </span>
        </Link>
      </h2>
    </div>
  );
};

export default SignUp1;
