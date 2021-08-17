import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import ButtonWrapper from "./index.style";

const Button = ({
  className,
  type = "default",
  buttonType = "button",
  ...props
}) => {
  return (
    <ButtonWrapper
      className={cn(type, className, { text02: type === "icon" })}
      type={buttonType}
      {...props}
    />
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(["default", "secondary", "icon"]),
  buttonType: PropTypes.string,
};

export default Button;
