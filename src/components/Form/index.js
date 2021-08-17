import React from "react";

import FormWrapper from "./index.style";

export default ({ children, ...props }) => {
  return <FormWrapper {...props}>{children}</FormWrapper>;
};
