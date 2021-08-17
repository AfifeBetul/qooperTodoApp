import styled from "styled-components";
import WithDirection from "../../theme/withDirection";

const MasterPageWrapper = styled.div`
  .page-wrapper {
    margin-top: var(--topbar-height);
    padding: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default WithDirection(MasterPageWrapper);
