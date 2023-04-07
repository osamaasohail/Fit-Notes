import styled from "styled-components";
import { H1, P } from "./Typography";
import { Spacer } from "./Spacer";
import LeftTriangle from "../images/lefttrinangle.svg";
import RightTopCross from "../images/topCross.svg";
import BottomRightCross from "../images/BottomCross.svg"
import { useMediaQuery } from "react-responsive";

const Wrapper = styled.div`
  background: black;
  height: 90vh;
  position: relative;
  @media(max-width:768px){
    height:100%;
    padding:50px;
  }
`;
const TextContainer = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TopTriangle = styled.div`
  position: absolute;
  top: 6%;
  left: 5%;
`;
const RightCross = styled.div`
  position: absolute;
  top: 5%;
  right: 7%;
`;
const BottomTriangle=styled.div`
position: absolute;
  bottom: 6%;
  left: 5%;
`
const BottomCross=styled.div`
position: absolute;
  bottom: 5%;
  right: 7%;

`
export default function LoginInfo() {
    const isResponsive = useMediaQuery({
        query: "(max-width: 768px)",
      });
  return (
    <>
      <Wrapper>
     
        <TextContainer>
          <TopTriangle>
            <img src={LeftTriangle} />
          </TopTriangle>
          <RightCross>
            <img src={RightTopCross} />
          </RightCross>

          <div>
            <H1 color="#CACA0F" weight="700" fontSize="48px">
              Welcome to our Platform
            </H1>
            <Spacer height="20px" />
            <P fontSize="16px" lHeight="31px">
              By signing up, you're taking the first step in ensuring your{" "}
              <br /> business stays compliant with liquor laws. Our platform{" "}
              <br /> is designed to help you manage your liquor license and{" "}
              <br /> duty manager certificate expiry dates, so you can focus{" "}
              <br /> on what you do best - running your business.
            </P>
          </div>
          <BottomTriangle>
            <img src={LeftTriangle} />
          </BottomTriangle>
          <BottomCross>
            <img src={BottomRightCross} />
          </BottomCross>
        </TextContainer>
    
      </Wrapper>
    </>
  );
}
