import styled from "styled-components";
import { H1 } from "./Typography";

const Wrapper = styled.div`
  padding: 118px 0px 118px 0px;
  text-align: center;
  background: ${(props) => (props.background ? props.background : "#161616")};
  @media (max-width: 768px) {
    padding: 60px 0px 60px 0px;
  }
`;
export function Footer({ background, color }) {
  return (
    <>
      <Wrapper background={background}>
        <H1 fontSize="20px" weight="500px" color={color}>
          Copyright © 2023 The Hospitality Guardian Ltd - All Rights Reserved.
        </H1>
      </Wrapper>
    </>
  );
}
