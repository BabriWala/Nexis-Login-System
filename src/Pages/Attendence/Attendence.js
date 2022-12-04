import React from "react";
import { useLocation } from "react-router";
import Logo from "../../Assets/logo.png";
import AttendencePerson from "./AttendencePerson";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";

const Attendence = () => {
  const location = useLocation();
  const data = Object.values(location.state);

  return (
    <div className="p-5">
      <div className="flex justify-between items-center gap-5 mb-5">
        <div className="">
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <Link to="/" className="mr-5">
            <Button className="btn btn-outline">Home</Button>
          </Link>
          <Link to="/login">
            <Button className="btn btn-outline">LogOut</Button>
          </Link>
        </div>
      </div>
      <div className="text-center">
        <h2 className=" font-semibold rounded text-xl md:text-3xl lg:text-4xl bg-[#1678CB] py-3 md:py-5 px-8 md:px-12 my-10 md:mb-20 text-white text-center inline-block">
          Attendance information
        </h2>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Username</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <AttendencePerson key={i} d={d}></AttendencePerson>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendence;
