import React from "react";
import Button from "../Button";
import Span from "../Span";
import TopbarWrapper from "./index.style";

export default () => {
  return (
    <TopbarWrapper>
      <Span className="text01">Welcome, #firstname#</Span>
      <Button>LOGOUT</Button>
    </TopbarWrapper>
  );
};
