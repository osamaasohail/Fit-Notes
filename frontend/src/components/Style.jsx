import styled from "styled-components";
export const Flex = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.JustifyContent ? props.JustifyContent : "space-between"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "")};
`;

export const Wrapper = styled.div`
  background: #161616;
`;

export const Margin = styled.div`
  margin: 0 83px 0px 83px;
`;
