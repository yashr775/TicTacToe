import React from "react";

interface BoxProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Box: React.FC<BoxProps> = ({ onClick }) => {
  return (
    <div
      className=" box bg-slate-500 h-20 w-20 p-4 rounded-lg cursor-pointer hover:h-24 hover:w-24 m-2 "
      onClick={onClick}
    ></div>
  );
};

export default Box;
