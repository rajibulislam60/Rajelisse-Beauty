import React from "react";

const Button = ({ btnName, className }) => {
  return <button className={`${className} rounded-md`}>{btnName}</button>;
};

export default Button;
