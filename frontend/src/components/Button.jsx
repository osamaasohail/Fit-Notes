import styled from "styled-components";

export const Button = styled.button`
  padding: 16px 40px;

  background: ${(props) => (props.background ? props.background : "#caca0f")};
  border-radius: 8px;
  border: none;
`;
