import React from "react";

const AttendencePerson = (props) => {
  const person = props.d;
//   console.log(person)
console.log(person)
// console.log(new Date())
  const { branch, name, position, profile_pic, attendance, username } = person;
//   console.log(attendance)
// console.log(attendance)
console.log()
  return (
      <tr>
        <td>{name}</td>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold">{position}</div>
              <div className="text-sm opacity-50">{branch}</div>
            </div>
          </div>
        </td>
        <td>{username}</td>
        <td>
          {/* {Object.keys(attendance)} */}
          {(Object.keys(attendance))[0]}
          <br />
          <span className="badge badge-ghost badge-sm">{(attendance[(Object.keys(attendance))[0]]).status}</span>
        </td>
      </tr>
  );
};

export default AttendencePerson;
