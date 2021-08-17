import styled from "styled-components";
import WithDirection from "../../theme/withDirection";

const TopbarWrapper = styled.div`
  background-color: var(--gray02);
  height: var(--topbar-height);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 16px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  button {
    margin-left: 32px;
  }
`;

export default WithDirection(TopbarWrapper);
