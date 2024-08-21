import React from "react";

interface Container {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<Container> = ({ children, className, ...props }) => {
  return (
    <div className={`container ${className ?? ""}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
