import styled from "styled-components";
import WithDirection from "../../theme/withDirection";

const TodosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 640px;
  width: 100%;
  h1 {
    margin: 32px 0;
  }
  .text01 {
    color: var(--purple01);
    text-align: center;
  }
`;

export default WithDirection(TodosWrapper);
