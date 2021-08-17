import React, { forwardRef } from "react";

const Block = forwardRef(({ children, ...otherProps }, ref) => {
  return (
    <div {...otherProps} ref={ref}>
      {children}
    </div>
  );
});

export default Block;
