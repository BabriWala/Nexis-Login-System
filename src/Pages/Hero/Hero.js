import React from "react";
import PeopleImg from "../../Assets/people.png";
import Logo from "../../Assets/logo.png";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
const Hero = () => {
  return (
    <>
      <div className="p-5">
        <div className="flex justify-between items-center gap-5 mb-5">
          <div className="">
            <img src={Logo} alt="Logo" />
          </div>
          <div>
            <Link to="/login" className=" mr-5">
              <Button className="btn btn-outline">Login</Button>
            </Link>
            <Link to="/">
              <Button className="btn btn-outline">SignUp</Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-40">
          <div className="mx-auto lg:mx-0">
            <img className="ml-0 lg:ml-9" src={PeopleImg} alt="People" />
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Hero;
