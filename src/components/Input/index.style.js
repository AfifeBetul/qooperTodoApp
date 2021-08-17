import styled from "styled-components";
import WithDirection from "../../theme/withDirection";

const InputWrapper = styled.input`
  border: 1px solid var(--gray03);
  background-color: var(--gray02);
  width: 100%;
  height: 40px;
  padding: 0 16px;
  border-radius: 0;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1px;
  box-sizing: border-box;
  transition: var(--transition);

  &::placeholder {
    color: var(--gray04);
  }

  &:hover,
  &:focus {
    border-radius: 0;
    border-color: var(--blue01);
  }
  &:focus-visible {
    outline: none;
  }
`;

export default WithDirection(InputWrapper);
