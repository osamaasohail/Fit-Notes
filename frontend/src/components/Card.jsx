import styled from "styled-components";
import { H1, P } from "./Typography";
import HeroSection from "./HeroSection";
import { Flex } from "./Style";
import CardImage1 from "../images/cardimage1.svg";
import CardImage2 from "../images/cardimage2.svg";

import CardImage3 from "../images/cardimage3.svg";
import { Col, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { Spacer } from "./Spacer";

const CardWrape = styled.div`
  background: black;
  text-align: center;
    padding: 20px;
  padding-top: 45px;
  padding-bottom: 25px;
  border-radius: 25px;
  height: 650px;
  // margin: 0 20px 0 20px;
  width:100%;
  @media (max-width: 998px) {
    height: 100%;
    margin-bottom: 40px;
    width: 100%;
    margin: 0px !important;
  }
  @media(min-width:1760px){
    height:700px;
  }
  @media(min-width:2000px){
    height:800px;
  }
  @media screen and (min-width: 990px) and (max-width:1464px) {

   
    height:600px;
    }
  
  @media screen and (min-width: 768px) and (max-width:990px) {

    p {
    
      line-height:40px;
    
    }
    
    }
`;
export default function Card() {
  const isResponsive = useMediaQuery({
    query: "(max-width: 990px)",
  });
  return (
    <>
      <Row style={isResponsive?{ margin: "0px",padding:"0px" }:{ margin: "0px",padding:"0 40px 0 40px" }}>
        <Col
          style={
            isResponsive ? { marginBottom: "20px" } : { marginBottom: "0px" }
          }
          lg={4}
        >
          <CardWrape>
            <Flex
              JustifyContent={isResponsive ? "" : "space-between"}
              alignItems="space-between"
              style={{ flexDirection: "column", height: "100%" }}
            >
              <H1 color="rgba(177, 149, 56, 1)" fontSize="32px" weight="700">
                Getting Started
              </H1>
              <P
                style={
                  isResponsive
                    ? { marginTop: "20px", marginBottom: "20px" }
                    : { margin: "0" }
                }
                weight="400"
                lHeight={isResponsive ? "28px" : "36px"}
                fontSize="24px"
              >
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
        </Col>
        <Col
          style={
            isResponsive ? { marginBottom: "20px" } : { marginBottom: "0px" }
          }
          lg={4}
        >
          <CardWrape>
            <Flex
              alignItems="space-between"
              style={{ flexDirection: "column", height: "100%" }}
            >
              <H1 color="rgba(177, 149, 56, 1)" fontSize="32px" weight="700">
                Getting Started
              </H1>
              <P
                style={
                  isResponsive
                    ? { marginTop: "20px", marginBottom: "20px" }
                    : { margin: "0" }
                }
                weight="400"
                lHeight={isResponsive ? "21px" : "36px"}
                fontSize="24px"
              >
                We are here to make it <br /> easy for businesses to <br />{" "}
                manage their Duty <br /> Manager certificates <br /> and Liquor
                licenses
              </P>
              <div style={{ margin: "0 20px 0 20px" }}>
                <HeroSection image={CardImage2} box={true} />
              </div>
            </Flex>
          </CardWrape>
        </Col>
        <Col
          style={
            isResponsive ? { marginBottom: "20px" } : { marginBottom: "0px" }
          }
          lg={4}
        >
          <CardWrape>
            <Flex
              alignItems="space-between"
              style={{ flexDirection: "column", height: "100%" }}
            >
              <H1 color="rgba(177, 149, 56, 1)" fontSize="32px" weight="700">
                Getting Started
              </H1>
              <P
                style={
                  isResponsive
                    ? { marginTop: "20px", marginBottom: "20px" }
                    : { margin: "0" }
                }
                weight="400"
                lHeight={isResponsive ? "21px" : "36px"}
                fontSize="24px"
              >
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
        </Col>
      </Row>
    </>
  );
}
