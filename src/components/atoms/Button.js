import React from "react";

const Button = ({
  type,
  roundedType,
  avatar,
  children,
  onClick,
  color,
  disabled,
  buttonSize,
}) => {
  return (
    <button
      className={`${roundedType} ${avatar} ${color} ${buttonSize}`}
      type={`${type}`}
      style={{ marginRight: '8px' }}
      //   disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
