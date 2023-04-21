import styled from "styled-components";

export const Box = styled.div`
  background: #ffffff;
  box-shadow: -37px 19px 17px rgba(138, 133, 133, 0.01),
    -21px 11px 14px rgba(138, 133, 133, 0.05),
    -9px 5px 10px rgba(138, 133, 133, 0.09),
    -2px 1px 6px rgba(138, 133, 133, 0.1), 0px 0px 0px rgba(138, 133, 133, 0.1);
  border-radius: 8px;
  width: ${(props) => (props.width ? props.width : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "0px")};
`;
