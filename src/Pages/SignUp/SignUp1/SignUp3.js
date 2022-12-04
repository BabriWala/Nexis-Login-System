import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp3 = () => {
  const location = useLocation();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  // console.log(
  //   location.state.first_name,
  //   location.state.last_name,
  //   location.state.phone_number,
  //   location.state.email
  // );
  const handleSignUp = (data) => {
    const first_name = location.state.first_name;
    const last_name = location.state.last_name;
    const phone_number = location.state.phone_number;
    const email = location.state.email;
    const password = data.password;
    // console.log(first_name, last_name, phone_number, email, password);
    const user = {
      first_name,
      last_name,
      phone_number,
      email,
      password,
    };
    // console.log(JSON.stringify(user))
    if (!(password.length > 8)) {
      setError("Password Should be At Least 8 Characters");
    } else {
      return axios
        .post("https://test.nexisltd.com/signup", user)
        .then((res) => {
          // console.log(res)
          toast.success("You have Sign Up");
          if (res.data.sucess) {
            navigate("/login");
          }
        });
      /* fetch('https://test.nexisltd.com/signup', {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res=> res.json())
    .then(data => console.log(data)) */
    }
  };
  return (
    <div className=" border rounded text-center shadow-lg p-5 md:p-[74px]">
      <h2 className=" text-xl font-semibold mb-24 text-center">SignUp Form</h2>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <input
          type="password"
          className="w-full border-b-2 outline-none pl-2"
          placeholder="Write Password"
          {...register("password", { required: true })}
        />
        {error ? (
          <p className="pl-2 text-left text-red-400 mb-16">{error}</p>
        ) : (
          <p className="pl-2 text-xs mb-16 text-left mt-1 text-[#7E7E7E]">
            Your password must be 8 character
          </p>
        )}
        <div className="flex items-center">
          <Link to={"/signUp2"}>
            <span className="font-bold mr-16 ml-2 text-[#767676] text-xs">
              Back
            </span>
          </Link>
          <button type="submit">
            <Button>Sign Up</Button>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp3;
