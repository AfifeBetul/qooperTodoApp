import styled from "styled-components";
import WithDirection from "../../theme/withDirection";

const ButtonWrapper = styled.button`
  height: 45px;
  padding: 12px 32px;
  border: none;
  cursor: pointer;
  color: var(--white);
  transition: var(--transition);

  &.default {
    background-color: var(--blue01);
  }

  &.secondary {
    background-color: var(--purple01);
  }

  &.icon {
    padding: 0;
    background-color: var(--gray04);
    border-radius: 50%;
    line-height: 24px;
    height: 24px;
    width: 24px;
    text-align: center;
  }

  &:hover {
    opacity: 0.9;
  }
`;

export default WithDirection(ButtonWrapper);
