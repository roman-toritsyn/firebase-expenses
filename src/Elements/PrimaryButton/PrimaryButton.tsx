import React from "react";

type TPrimaryButton = {
  clickHandler?: () => void;
  type?: "submit" | "button" | "reset";
  name: string;
};

const PrimaryButton: React.FC<TPrimaryButton> = ({
  clickHandler,
  name,
  type = "button",
}) => {
  return (
    <button
      type={type}
      aria-label={name}
      className="bg-slate-950 hover:bg-slate-900 p-3 text-xl text-white"
      style={{ border: "2px solid red" }}
      onClick={clickHandler}
    >
      <span className="text-white">{name}</span>
    </button>
  );
};

export default PrimaryButton;
