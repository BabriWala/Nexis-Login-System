import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const LogIn = () => {
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const handleLogIn = (data) => {
    const email = data.email;
    const password = data.password;
    // console.log(email, password)
    const user = {
      email,
      password,
    };
    if (!(password.length > 8)) {
      setError("Password Should be At Least 8 Characters");
    } else {
      return axios.post("https://test.nexisltd.com/login", user).then((res) => {
        // console.log(res)
        if (res.data.access_token) {
          axios
            .get("https://test.nexisltd.com/test", {
              headers: {
                authorization: `bearer ${res.data.access_token}`,
              },
            })
            .then((res) => {
              // console.log(res)
              if (res.status === 200) {
                toast.success("You have successfully Log In");
                navigate("/attendence", {
                  state: res.data,
                });
              }
            });
        }
      });
    }
  };

  return (
    <div className="mx-auto border rounded text-center shadow-lg p-5 md:p-[74px]">
      <h2 className=" text-xl font-semibold mb-24 text-center">Log in Form</h2>
      <form onSubmit={handleSubmit(handleLogIn)}>
        <input
          className="w-full mb-16 border-b-2 outline-none pl-2"
          placeholder="Write Email Address"
          type="email"
          {...register("email", { required: true })}
        />
        <input
          type="password"
          className="w-full  border-b-2 outline-none pl-2"
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
        <button type="submit">
          <Button>Log In</Button>
        </button>
      </form>
      <h2 className="mt-20 text-right text-xs text-[#7E7E7E]">
        Already have an account?
        <Link to={"/"}>
          <span className=" text-sm font-semibold text-[#1678CB] underline ml-2">
            SIGNUP HERE!
          </span>
        </Link>
      </h2>
    </div>
  );
};

export default LogIn;
