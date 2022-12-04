import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import { useForm } from "react-hook-form";

const SignUp2 = () => {
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSignUp = (data) => {
    const first_name = location.state.first_name;
    const last_name = location.state.last_name;
    const phone_number = data.mobileNumber;
    const email = data.email;
    // console.log(data.mobileNumber)
    // console.log((data.mobileNumber.length)>10)
    console.log(!(phone_number.length > 10));
    if (!(phone_number.length > 10)) {
      setError("Mobile Number Should be At Least 11 Characters");
    } else {
      // console.log(first_name, last_name, phone_number, email);
      return navigate("/signUp3", {
        state: {
          first_name,
          last_name,
          phone_number,
          email,
        },
      });
    }
  };
  console.log(error);
  return (
    <div className=" border rounded text-center shadow-lg p-5 md:p-[74px]">
      <h2 className=" text-xl font-semibold mb-24 text-center">SignUp Form</h2>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div className="grid grid-cols-6 gap-2">
          <input
            className={
              error
                ? "w-full border-b-2 outline-none pl-2"
                : "w-full mb-16 border-b-2 outline-none pl-2"
            }
            placeholder="+880"
            type="text"
          />
          <input
            className={
              error
                ? "w-full border-b-2 outline-none pl-2 col-start-2 col-end-7"
                : "w-full mb-16 border-b-2 outline-none pl-2 col-start-2 col-end-7"
            }
            placeholder="1XXXXXXX"
            type="text"
            {...register("mobileNumber", { required: true })}
          />
        </div>
        {error && <p className=" text-red-400 mb-16">{error}</p>}
        <input
          type="email"
          className="w-full mb-16 border-b-2 outline-none pl-2"
          placeholder="Write Email Address"
          {...register("email", { required: true })}
        />
        <div className="flex items-center">
          <Link to={"/"}>
            <span className="font-bold mr-16 ml-2 text-[#767676] text-xs">
              Back
            </span>
          </Link>
          <button type="submit">
            <Button>
              Next Step <AiOutlineArrowRight />
            </Button>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp2;
