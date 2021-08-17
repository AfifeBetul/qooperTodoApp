import styled from "styled-components";
import WithDirection from "../../theme/withDirection";

const TaskItemWrapper = styled.div`
  width: 100%;
  min-height: 64px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  box-sizing: border-box;
`;

export default WithDirection(TaskItemWrapper);
