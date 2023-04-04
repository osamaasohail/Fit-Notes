import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutImage from "../images/aboutImage.svg";
import { Margin, Wrapper } from "../components/Style";
import { Footer } from "../components/Footer";
import styled from "styled-components";
import { H1, P } from "../components/Typography";
import { Spacer } from "../components/Spacer";
import { Button } from "../components/Button";

const WhosText = styled.div`
  background: black;
  text-align: center;
  padding: 120px 0 120px 0px;
`;

export default function AboutUs() {
  return (
    <>
      <Wrapper>
        <Navbar />
        <Margin>
          <HeroSection boxText={"About Us"} image={AboutImage} />
        </Margin>
        <Spacer />
        <WhosText>
          <H1 fontSize="32px" color="#CACA0F" weight="700">
            Who we are?
          </H1>
          <Spacer height="51px" />
          <P fontSize="24px" weight="400" lHeight="36px">
            We are a small New Zealand owned business that aim to make expired
            certification and <br /> licensing a thing of the past. We make it
            easy to take away the hassle of managing Duty <br /> Manager's
            certificate expiry and Venue Liquor licensing expiry.
          </P>
          <Spacer height="89px" />
          <Button>Find out More</Button>
        </WhosText>

        <Footer background={"#CACA0F"} color={"black"} />
      </Wrapper>
    </>
  );
}
