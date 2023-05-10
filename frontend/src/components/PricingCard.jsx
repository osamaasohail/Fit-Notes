// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pricing from "../images/pricing1.svg";
import Pricing2 from "../images/pricing2.svg";
import Pricing3 from "../images/pricig3.svg";

import { Col, Container, Row } from "react-bootstrap";
import { H1 } from "./Typography";
import { P } from "./Typography";
import { Button } from "./Button";
import { Margin } from "./Style";
import { Spacer } from "./Spacer";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Wrapper = styled.div`
  background: rgba(177, 149, 56, 1);
  padding: 46px 0 46px 0;
  text-align: center;
`;

function PricingCard() {
  const isResponsive = useMediaQuery({
    query: "(max-width: 358px)",
  });
  return (
    <>
      <Margin>
        <Row>
          <Col lg={4}>
            <Card
              style={{
                background: "black",
                textAlign: "center",
                paddingTop: "45px",
                paddingBottom: "45px",
                borderRadius: "30px",
                marginBottom: "10px",
              }}
            >
              <div>
                <Card.Img
                  style={
                    isResponsive
                      ? {
                          width: "100%",
                          height: "243px",
                        }
                      : {
                          width: "243px",
                          height: "243px",
                        }
                  }
                  variant="top"
                  src={Pricing}
                />
              </div>
              <Card.Body>
                <Card.Title>
                  <H1
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                    fontSize="32px"
                    color="rgba(177, 149, 56, 1)"
                    weight="700"
                  >
                    {" "}
                    Single Certificates
                  </H1>
                  <H1
                    style={{ marginTop: "20px", marginBottom: "20px" }}
                    fontSize="24px"
                    color="rgba(177, 149, 56, 1)"
                    weight="400"
                  >
                    {" "}
                    5NZD/Year
                  </H1>
                </Card.Title>
                <Card.Text>
                  <P
                    style={{
                      marginBottom: "100px",
                    }}
                    lHeight="30px"
                    weight="400"
                    fontSize="20px"
                  >
                    {" "}
                    Get peace of mind with our <br /> certification expiry date
                    registration <br /> service for just $5.00 NZD per <br />{" "}
                    certificate. Whether you’re an <br /> individual or a
                    business of any size, <br />
                    we’ve got you covered!
                  </P>
                </Card.Text>
                <Button style={{ fontWeight: "600" }}>Apply Here</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card
              style={{
                background: "black",
                textAlign: "center",
                paddingTop: "45px",
                paddingBottom: "45px",
                borderRadius: "30px",
                marginBottom: "10px",
              }}
            >
              <div>
                <Card.Img
                  style={
                    isResponsive
                      ? {
                          width: "100%",
                          height: "243px",
                        }
                      : {
                          width: "243px",
                          height: "243px",
                        }
                  }
                  variant="top"
                  src={Pricing2}
                />
              </div>
              <Card.Body>
                <Card.Title>
                  <H1
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                    fontSize="32px"
                    color="rgba(177, 149, 56, 1)"
                    weight="700"
                  >
                    {" "}
                    2 to 4 Certificates
                  </H1>
                  <H1
                    style={{ marginTop: "20px", marginBottom: "30px" }}
                    fontSize="24px"
                    color="rgba(177, 149, 56, 1)"
                    weight="400"
                  >
                    {" "}
                    20NZD/Year
                  </H1>
                </Card.Title>
                <Card.Text>
                  <P
                    style={{
                      marginBottom: "30px",
                    }}
                    lHeight="30px"
                    weight="400"
                    fontSize="20px"
                  >
                    {" "}
                    Don’t let your certifications expiry <br /> dates surprise
                    you - register with us <br /> today for just $5.00 NZD per{" "}
                    <br /> certificate. Our registration service is <br />{" "}
                    perfect for small to medium-sized <br /> liquor businesses
                    or larger <br /> enterprises with multiple certificates{" "}
                    <br /> to manage.
                  </P>
                </Card.Text>
                <Button style={{ fontWeight: "600" }}>Apply Here</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card
              style={{
                background: "black",
                textAlign: "center",
                paddingTop: "45px",
                paddingBottom: "45px",
                borderRadius: "30px",
                marginBottom: "10px",
              }}
            >
              <div>
                <Card.Img
                  style={
                    isResponsive
                      ? {
                          width: "100%",
                          height: "243px",
                        }
                      : {
                          width: "243px",
                          height: "243px",
                        }
                  }
                  variant="top"
                  src={Pricing3}
                />
              </div>
              <Card.Body>
                <Card.Title>
                  <H1
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                    fontSize="32px"
                    color="rgba(177, 149, 56, 1)"
                    weight="700"
                  >
                    {" "}
                    5+ Certificates
                  </H1>
                  <H1
                    style={{ marginTop: "20px", marginBottom: "30px" }}
                    fontSize="24px"
                    color="rgba(177, 149, 56, 1)"
                    weight="400"
                  >
                    {" "}
                    +20NZD/Year
                  </H1>
                </Card.Title>
                <Card.Text>
                  <P
                    style={{
                      marginBottom: "30px",
                    }}
                    lHeight="30px"
                    weight="400"
                    fontSize="20px"
                  >
                    {" "}
                    Stay on top of your certification <br /> game with our affordable <br />
                    registration service, starting at just <br /> $5.00 NZD per
                    certificate. Whether <br /> you have one or multiple certificates <br />
                    and licenses, we make it easy to <br /> manage your expiry dates
                    and <br /> maintain compliance.
                  </P>
                </Card.Text>
                <Button style={{ fontWeight: "600" }}>Apply Here</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Margin>

      <Spacer height="84px" />
      <Wrapper>
        <P color="black" weight="400" fontSize="20px">
          All prices are in NZD and exclude GST.
        </P>
      </Wrapper>
    </>
  );
}

export default PricingCard;
