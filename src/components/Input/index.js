import React from "react";

import InputWrapper from "./index.style";

export default ({ ...props }) => {
  return <InputWrapper type="text" {...props} />;
};
