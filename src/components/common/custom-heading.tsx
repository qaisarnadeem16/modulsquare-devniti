import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string; // If you want to pass additional styles
}

const Heading: React.FC<Props> = ({ children, className }) => {
  return (
    <h1
      className={`md:text-[80px] font-alice outlined-heading  text-stroke text-stroke-primary  font-bold text-3xl md:leading-[73px] capitalize text-primary   ${className}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
