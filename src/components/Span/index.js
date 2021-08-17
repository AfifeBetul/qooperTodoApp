import React, { forwardRef } from "react";

const Span = forwardRef(({ type = "span", ...otherProps }, ref) => {
  const Tag = type;
  return <Tag {...otherProps} ref={ref} />;
});

export default Span;
