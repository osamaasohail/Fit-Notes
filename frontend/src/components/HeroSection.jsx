import HomeImage from "../images/aboutImage.svg";
import styled from "styled-components";
import { Button } from "./Button";
import { H1 } from "./Typography";
import { useMediaQuery } from "react-responsive";


const Wrapper = styled.div`
  position: relative;
`;
const Box = styled.div`
  background:rgba(177, 149, 56, 1);
  // padding: 59px 57px 93px 57px;
  border-radius: 5px;
  position: absolute;
  height: 252px;
  width: 552px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 1080px) {
    height: 180px;
    width: 400px;
  }
  @media (max-width: 768px) {
    height: 140px;
    width: 300px;
  }
  @media (max-width: 600px) {
    height: 9vh;
    width: 40vw;
    h1{
      font-size:15px
    }
  }
  @media (max-width: 361px) {
    height: 9vh;
    width: 45vw;
    h1{
      font-size:15px
    }
  }
`;
const Buttons = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  color: #161616;
  border-radius: 8px;
`;

export default function HeroSection({ box, buttonText, image, boxText }) {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <>
      <Wrapper>
        <img width={"100%"} height={"100%"} src={image} />
        {box ? (
          buttonText ? (
            <Buttons style={isResponsive?{fontSize:"12px",padding:"12px 15px"}:{fontSize:""}}>{buttonText}</Buttons>
          ) : (
            ""
          )
        ) : (
          <Box>
            {boxText ? (
              <H1

                lHeight="137%"
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
                fontSize="36px"
                weight="700"
                color="black"
              >
                {boxText}
              </H1>
            ) : (
              <H1
                lHeight="137%"
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
                fontSize="36px"
                weight="700"
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
