import React from "react";

type TTotalCount = {
  total: number;
};

const TotalCount: React.FC<TTotalCount> = ({ total }) => {
  return (
    <div className="flex justify-between p-3">
      <span>Total</span>
      <span>${total}</span>
    </div>
  );
};

export default TotalCount;
