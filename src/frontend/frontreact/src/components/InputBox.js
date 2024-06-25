import React from "react";

const InputBox = ({ type, placeholder, required, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputBox;
