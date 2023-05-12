import styled from "styled-components";

export const Button = styled.button`
  padding: 16px 40px;

  background: ${(props) => (props.background ? props.background : "rgba(177, 149, 56, 1)")};
  border-radius: 8px;
  border: none;
`;
