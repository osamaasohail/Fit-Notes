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
  background: #caca0f;
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
                    color="#CACA0F"
                    weight="700"
                  >
                    {" "}
                    Single Certificates
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
                    Registering the only Duty Manager at <br /> your business?
                    Don't worry this one is <br /> free
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
                    color="#CACA0F"
                    weight="700"
                  >
                    {" "}
                    2 to 4 Certificates
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
                    This is most popular choice for most <br /> small and medium
                    sized hospitality <br /> businesses, just $7.00 per month.
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
                    color="#CACA0F"
                    weight="700"
                  >
                    {" "}
                    5+ Certificates
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
                    Our large staff certificate <br /> management service, at
                    $10.00 <br /> monthly.
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
