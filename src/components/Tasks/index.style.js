import styled from "styled-components";
import WithDirection from "../../theme/withDirection";

const TasksWrapper = styled.div`
  width: 100%;
  background-color: var(--gray03);
  .taskItem + .taskItem {
    position: relative;
    margin-top: 1px;

    &:before {
      content: "";
      position: absolute;
      top: -1px;
      left: 2px;
      right: 2px;
      background-color: var(--white);
      height: 1px;
    }
  }
`;

export default WithDirection(TasksWrapper);
