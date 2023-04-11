import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutImage from "../images/aboutImage.svg";
import { Margin, Wrapper } from "../components/Style";
import { Footer } from "../components/Footer";
import styled from "styled-components";
import { H1, P } from "../components/Typography";
import { Spacer } from "../components/Spacer";
import { Button } from "../components/Button";
import { useMediaQuery } from "react-responsive";


const WhosText = styled.div`
  background: black;
  text-align: center;
  padding: 120px 0 120px 0px;
  @media(max-width:768px){
    padding:30px 0 30px 0px
  }
`;

export default function AboutUs() {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <>
      <Wrapper>
        {/* <Navbar /> */}
        <Margin>
          <HeroSection boxText={"About Us"} image={AboutImage} />
        </Margin>
        <Spacer  />
        <WhosText>
          <H1 fontSize="32px" color="#CACA0F" weight="700">
            Who we are?
          </H1>
          <Spacer height={isResponsive?"20px":"51px"} />
          <P style={isResponsive?{padding:"0px 10px 0 10px"}:{padding:"0px "}} fontSize="24px" weight="400" lHeight={isResponsive?"21px":"36px"}>
            We are a small New Zealand owned business that aim to make expired
            certification and <br /> licensing a thing of the past. We make it
            easy to take away the hassle of managing Duty <br /> Manager's
            certificate expiry and Venue Liquor licensing expiry.
            Additionally, we provide<br/> the option to include your Gaming license,
            along with its expiration date, for <br />comprehensive license management.
          </P>
          <Spacer height={isResponsive?"23px":"89px"} />

          <Button>Find out More</Button>
        </WhosText>

        <Footer background={"#CACA0F"} color={"black"} />
      </Wrapper>
    </>
  );
}
