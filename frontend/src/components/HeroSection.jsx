import HomeImage from "../images/Homeimage.svg";
import styled from "styled-components";
import { Button } from "./Button";
import { H1 } from "./Typography";

const Wrapper = styled.div`
  position: relative;
`;
const Box = styled.div`
  background: #caca0f;
  padding: 59px 57px 93px 57px;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Buttons = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export default function HeroSection({ box, buttonText, image, boxText }) {
  return (
    <>
      <Wrapper>
        <img width={"100%"} height={"100%"} src={image} />
        {box ? (
          buttonText ? (
            <Buttons>{buttonText}</Buttons>
          ) : (
            ""
          )
        ) : (
          <Box>
            {boxText ? (
              <H1
                lHeight="137%"
                style={{ textAlign: "center" }}
                fontSize="36px"
                fontWeight="700"
                color="black"
              >
                {boxText}
              </H1>
            ) : (
              <H1
                lHeight="137%"
                style={{ textAlign: "center" }}
                fontSize="36px"
                fontWeight="700"
                color="black"
              >
                Welcome to The <br /> Hospitality Guardian
              </H1>
            )}
          </Box>
        )}
      </Wrapper>
    </>
  );
}
