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
  @media (max-width: 768px) {
    padding: 30px 0 30px 0px;
  }
`;

export default function AboutUs() {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <>
      <Wrapper>
        <Navbar />
        <Margin>
          <HeroSection boxText={"About Us"} image={AboutImage} />
        </Margin>
        <Spacer />
        <WhosText>
          <H1 fontSize="32px" color="rgba(177, 149, 56, 1)" weight="700">
            Who we are?
          </H1>
          <Spacer height={isResponsive ? "20px" : "51px"} />
          <P
            style={
              isResponsive
                ? { padding: "0px 10px 0 10px" }
                : { padding: "0px " }
            }
            fontSize="24px"
            weight="400"
            lHeight={isResponsive ? "21px" : "36px"}
          >
            {/* We are a small New Zealand owned business that aim to make expired
            certification and <br /> licensing a thing of the past. We make it
            easy to take away the hassle of managing Duty <br /> Manager's
            certificate expiry and Venue Liquor licensing expiry. Additionally,
            we provide
            <br /> the option to include your Gaming license, along with its
            expiration date, for <br />
            comprehensive license management. */}
            At our small New Zealand owned business, our goal is to eliminate
            the hassle <br/> of having expired certifications and licenses creep up
            unexpectedly.We understand <br/>the inconvenience firsthand, having
            experienced the frustration of reapplying due to<br/>expiring
            certification ourselves. We offer a simple solution to manage
            comprehensive<br/>reminders for Duty Manager's certificate expiry, Venue
            Liquor licensing expiry, Gaming <br/>licenses, and Certificates of
            Approval (CoA) for security staff. Our comprehensive license<br/>
            management system ensures you never have to worry about expiration
            dates again.<br/>With us, you can focus on running your business while
            we keep tabs on when your<br/> important certification is due for
            renewal. Say goodbye to the headaches of remembering<br/> expiring
            certifications and licenses and enjoy a smoother, more efficient
            process<br/>with our automated reminder systems. Join us in making
            expired certification and licensing<br/> a thing of the past. Experience
            the convenience and peace of mind of our streamlined<br/>license
            management solution. Let us handle the complexities while you focus
            on<br/> what truly matters.
          </P>
          <Spacer height={isResponsive ? "23px" : "20px"} />
        </WhosText>

        <Footer background={"rgba(177, 149, 56, 1)"} color={"black"} />
      </Wrapper>
    </>
  );
}
