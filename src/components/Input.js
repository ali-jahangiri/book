import React from "react";

const Input = ({ autoFocus, value, valueSetter, placeholder }) => {
  return (
    <input
      autoFocus={autoFocus && autoFocus}
      className="rounded-lg border-2 p-2 outline-none border-purple-400 focus:ring-4 focus:ring-purple-500 focus:ring-opacity-10 transition duration-200 my-2"
      value={value}
      onChange={({ target: { value } }) => valueSetter(value)}
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Input;
