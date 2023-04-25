import { Box } from "../../components/Box";
import SideNavbar from "../../components/SideNavbar";
import { Col, Row } from "react-bootstrap";
import { H1, P } from "../../components/Typography";
import { Spacer } from "../../components/Spacer";
import Edit from "../../images/profiledit.svg";
import { Button } from "../../components/Button";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Navbar from "../../components/Navbar";
import { Wrapper } from "../../components/Style";

const Scrool = styled.div`
  height: 81vh;
  overflow-y: auto;
  padding: 0px 20px 10px 20px;
  @media (max-width: 768px) {
    height: auto;
  }
`;

export default function Profile() {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <>
      <Row style={{ margin: "0px" }}>
        <Col
          style={
            isResponsive
              ? { padding: "0px", marginBottom: "30px" }
              : { padding: "0px" }
          }
          lg={2}
          md={3}
        >
          <SideNavbar />
        </Col>
        <Col
          className="d-flex justify-content-evenly "
          style={{ padding: "0px", flexDirection: "column" }}
          lg={10}
          md={9}
        >
          <Scrool>
            {/* <SideNavbar /> */}
            <Row
              style={{ padding: isResponsive?"0vw 0vw 0vw 1vw":"0vw 10vw 0vw 1vw" }}
              className=" align-items-center "
            >
              <Col md={2}>
                <H1 color="black" fontSize="24px" weight="500">
                  Basic Info
                </H1>
              </Col>
              <Col md={7}>
                <Box
                  width={isResponsive ? "100%" : "55vw"}
                  padding={
                    isResponsive ? "41px 20px 20px 20px" : "41px 20px 52px 64px"
                  }
                >
                  <Row className="align-items-center">
                    {/* <Col md={5}>
                  <H1 color="black" fontSize="24px" weight="500">
                    Basic Info
                  </H1>
                </Col> */}
                    <Col md={12}>
                      <div>
                        <Row
                          style={
                            isResponsive
                              ? {
                                  background: "#F2F2F2",
                                  padding: "12px 2px 12px 2px",
                                  margin: "0px 20px 0px 0px",
                                  borderRadius: "8px",
                                }
                              : {
                                  background: "#F2F2F2",
                                  padding: "12px 30px 12px 20px",
                                  margin: "0px 20px 0px 0px",
                                  borderRadius: "8px",
                                }
                          }
                        >
                          <Col md={6} sm={6} xs={6}>
                            <P color="black" weight="400">
                              Your Role
                            </P>
                          </Col>
                          <Col md={6} sm={6} xs={6}>
                            <P color="black" weight="300">
                              Business Name
                            </P>
                          </Col>
                        </Row>
                      </div>
                      <Row
                        style={
                          isResponsive
                            ? {
                                padding: "12px 2px 12px 2px",
                                margin: "0px 20px 0px 0px",
                              }
                            : {
                                padding: "12px 30px 12px 20px",
                                margin: "0px 20px 0px 0px",
                              }
                        }
                      >
                        <Col className="mt-4" md={6} sm={6} xs={6}>
                          <P color="black" weight="400">
                            Business Owner
                          </P>
                        </Col>
                        <Col className="mt-4" md={4} sm={4} xs={4}>
                          <P color="black" weight="300">
                            Liquor Browdy
                          </P>
                        </Col>
                        <Col className="mt-4" md={1} sm={1} xs={1}>
                          <img src={Edit} />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Box>
              </Col>
            </Row>
            <Spacer height="10px" />
            <Row
              style={{ padding: isResponsive?"0vw 0vw 0vw 1vw":"0vw 10vw 0vw 1vw" }}
              className=" align-items-center "
            >
              <Col md={2}>
                <H1 color="black" fontSize="24px" weight="500">
                  Liquor Info
                </H1>
              </Col>
              <Col md={7}>
                <Box
                  width={isResponsive ? "100%" : "55vw"}
                  padding={
                    isResponsive ? "41px 20px 20px 20px" : "41px 20px 52px 64px"
                  }
                >
                  <Row className="align-items-center">
                    {/* <Col md={5}>
                  <H1 color="black" fontSize="24px" weight="500">
                    Liquor Info
                  </H1>
                </Col> */}
                    <Col md={12}>
                      <div>
                        <Row
                          style={
                            isResponsive
                              ? {
                                  background: "#F2F2F2",
                                  padding: "12px 2px 12px 2px",
                                  margin: "0px 20px 0px 0px",
                                  borderRadius: "8px",
                                }
                              : {
                                  background: "#F2F2F2",
                                  padding: "12px 30px 12px 20px",
                                  margin: "0px 20px 0px 0px",
                                  borderRadius: "8px",
                                }
                          }
                        >
                          <Col md={6} sm={6} xs={6}>
                            <P color="black" weight="400">
                              License Number
                            </P>
                          </Col>
                          <Col md={6} sm={6} xs={6}>
                            <P color="black" weight="400">
                              Expiry Date
                            </P>
                          </Col>
                        </Row>
                      </div>
                      <Row
                        style={
                          isResponsive
                            ? {
                                padding: "2px 2px 12px 2px",
                                margin: "0px 20px 0px 0px",
                              }
                            : {
                                padding: "12px 30px 12px 20px",
                                margin: "0px 20px 0px 0px",
                              }
                        }
                      >
                        <Col className="mt-4" md={6} sm={6} xs={6}>
                          <P color="black" weight="400">
                            1234567
                          </P>
                        </Col>
                        <Col className="mt-4" md={4} sm={4} xs={4}>
                          <P color="#EF3061" weight="300">
                            03/10/2023
                          </P>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Box>
              </Col>
            </Row>
            <Spacer height="10px" />
            <Row
              style={{ padding: isResponsive?"0vw 0vw 0vw 1vw":"0vw 10vw 0vw 1vw" }}
              className=" align-items-center"
            >
              <Col md={2}>
                <H1 color="black" fontSize="24px" weight="500">
                  Manager Info
                </H1>
              </Col>
              <Col md={7}>
                <Box
                  width={isResponsive ? "100%" : "55vw"}
                  padding={
                    isResponsive ? "41px 20px 20px 20px" : "41px 20px 52px 64px"
                  }
                >
                  <Row className="align-items-center">
                    {/* <Col md={5}>
                  <H1 color="black" fontSize="24px" weight="500">
                    Manager Info
                  </H1>
                </Col> */}
                    <Col md={12}>
                      <div>
                        <Row
                          style={
                            isResponsive
                              ? {
                                  background: "#F2F2F2",
                                  padding: "12px 2px 12px 2px",
                                  margin: "0px 20px 0px 0px",
                                  borderRadius: "8px",
                                }
                              : {
                                  background: "#F2F2F2",
                                  padding: "12px 30px 12px 20px",
                                  margin: "0px 20px 0px 0px",
                                  borderRadius: "8px",
                                }
                          }
                        >
                          <Col md={3} sm={3} xs={3}>
                            <P color="black" weight="400">
                              Name
                            </P>
                          </Col>
                          <Col md={3} sm={3} xs={3}>
                            <P color="black" weight="400">
                              Email
                            </P>
                          </Col>
                          <Col md={3} sm={3} xs={3}>
                            <P color="black" weight="400">
                              License Number
                            </P>
                          </Col>
                          <Col md={3} sm={3} xs={3}>
                            <P color="black" weight="400">
                              Expiry
                            </P>
                          </Col>
                        </Row>
                      </div>
                      <Row
                        style={
                          isResponsive
                            ? {
                                padding: "16px 2px 12px 2px",
                                margin: "0px 20px 0px 0px",
                              }
                            : {
                                padding: "16px 30px 12px 20px",
                                margin: "0px 20px 0px 0px",
                              }
                        }
                      >
                        <Col md={3} sm={3} xs={3}>
                          <P color="black" weight="400">
                            Alex
                          </P>
                        </Col>
                        <Col md={3} sm={3} xs={3}>
                          <P color="black" weight="400">
                            Alex@gmail.com
                          </P>
                        </Col>
                        <Col md={3} sm={3} xs={3}>
                          <P color="black" weight="400">
                            1234567890
                          </P>
                        </Col>
                        <Col md={3} sm={3} xs={3}>
                          <P color="black" weight="300">
                            04/10/2025
                          </P>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Box>
              </Col>
            </Row>
          </Scrool>
          <Spacer />
          <Row style={{ width: "100%", margin: "0",padding: isResponsive?"0vw 1vw 0vw 1vw":"0vw 10vw 0vw 13vw" }}>
          
            <Col md={12}>
              <Button
                style={{
                  width: "100%",
                  padding: "9px 14px",
                  background: "black",
                  color: "white",
                  fontSize: "14px",
                  borderRadius: "3px",
                }}
              >
                Update
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
