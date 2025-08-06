import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string; // If you want to pass additional styles
}

const SubHeading: React.FC<Props> = ({ children, className }) => {
  return (
    <h1
      className={`font-alice  text-stroke text-stroke-primary  font-bold text-3xl capitalize text-primary   ${className}`}
    >
      {children}
    </h1>
  );
};

export default SubHeading;
