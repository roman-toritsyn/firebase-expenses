import React from "react";

type TPrimaryButton = {
  clickHandler?: () => void;
  type?: "submit" | "button" | "reset";
  name: string;
  borderPosition?: "left" | "right";
};

const PrimaryButton: React.FC<TPrimaryButton> = ({
  clickHandler,
  name,
  type = "button",
  borderPosition = "",
}) => {
  const border = borderPosition === "left" ? "border-l-2" : "border-r-2";

  return (
    <button
      type={type}
      aria-label={type}
      className={`${borderPosition && border} border-slate-900 bg-slate-950 hover:bg-slate-900 p-3 text-xl text-white`}
      onClick={clickHandler}
    >
      {name}
    </button>
  );
};

export default PrimaryButton;
