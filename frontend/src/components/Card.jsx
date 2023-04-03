import styled from "styled-components";
import { H1, P } from "./Typography";
import HeroSection from "./HeroSection";
import { Flex } from "./Style";
import CardImage1 from "../images/cardimage1.svg";
import CardImage2 from "../images/cardimage2.svg";

import CardImage3 from "../images/cardimage3.svg";

const CardWrape = styled.div`
  background: black;
  text-align: center;
  //   padding: 50px;
  padding-top: 45px;
  padding-bottom: 25px;
  border-radius: 25px;
  height: 601px;
  margin: 0 55px 0 55px;
`;
export default function Card() {
  return (
    <>
      <div className="row">
        <div className="col-lg-4">
          <CardWrape>
            <Flex
              alignItems="space-between"
              style={{ flexDirection: "column", height: "100%" }}
            >
              <H1 color="#CACA0F" fontSize="32px" fontWeight="700">
                Getting Started
              </H1>
              <P weight="400" lHeight="36px" fontSize="24px">
                Signing up is easy, quick <br /> and affordable.
              </P>
              <div style={{ margin: "0 20px 0 20px" }}>
                <HeroSection
                  image={CardImage1}
                  buttonText={"SignUp"}
                  box={true}
                />
              </div>
            </Flex>
          </CardWrape>
        </div>
        <div className="col-lg-4">
          <CardWrape>
            <Flex
              alignItems="space-between"
              style={{ flexDirection: "column", height: "100%" }}
            >
              <H1 color="#CACA0F" fontSize="32px" fontWeight="700">
                Getting Started
              </H1>
              <P weight="400" lHeight="36px" fontSize="24px">
                We are here to make it <br /> easy for businesses to <br />{" "}
                manage their Duty <br /> Manager certificates <br /> and Liquor
                licenses
              </P>
              <div style={{ margin: "0 20px 0 20px" }}>
                <HeroSection image={CardImage2} box={true} />
              </div>
            </Flex>
          </CardWrape>
        </div>
        <div className="col-lg-4">
          <CardWrape>
            <Flex
              alignItems="space-between"
              style={{ flexDirection: "column", height: "100%" }}
            >
              <H1 color="#CACA0F" fontSize="32px" fontWeight="700">
                Getting Started
              </H1>
              <P weight="400" lHeight="36px" fontSize="24px">
                For a more detailed <br /> step-by-step process, <br /> please
                click the link <br /> below
              </P>
              <div style={{ margin: "0 20px 0 20px" }}>
                <HeroSection
                  image={CardImage3}
                  buttonText={"Learn More"}
                  box={true}
                />
              </div>
            </Flex>
          </CardWrape>
        </div>
      </div>
    </>
  );
}
