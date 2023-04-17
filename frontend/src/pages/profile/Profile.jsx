import { Box } from "../../components/Box";
import SideNavbar from "../../components/SideNavbar";
import { Col, Row } from "react-bootstrap";
import { H1, P } from "../../components/Typography";
import { Spacer } from "../../components/Spacer";
import Edit from "../../images/profiledit.svg";
import { Button } from "../../components/Button";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Navbar from "../../components/Navbar"
import { Wrapper } from "../../components/Style";


const Scrool = styled.div`
  height: 81vh;
  overflow-y: auto;
  padding:0px 20px 10px 20px;
  @media(max-width:768px){
    height:auto;
  }
`;

export default function Profile() {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <>
      <Row style={{ margin: "0px" }}>
        <Col style={isResponsive?{ padding: "0px",marginBottom:"30px" }:{ padding: "0px" }} lg={2} md={3}>
          <SideNavbar />
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          style={{ padding: "0px", flexDirection: "column" }}
          lg={10}
          md={9}
        >
          <Scrool>
            {/* <SideNavbar /> */}
            <Box width={isResponsive?"100%":"55vw"} padding={isResponsive?"41px 20px 20px 20px":"41px 20px 52px 64px"}>
              <Row className="align-items-center">
                <Col md={5}>
                  <H1 color="black" fontSize="24px" weight="500">
                    Basic Info
                  </H1>
                </Col>
                <Col md={7}>
                  <div>
                    <Row
                      style={isResponsive?{
                        background: "#F2F2F2",
                        padding: "12px 2px 12px 2px",
                        margin: "0px 20px 0px 0px",
                        borderRadius: "8px",
                      }:{
                        background: "#F2F2F2",
                        padding: "12px 30px 12px 20px",
                        margin: "0px 20px 0px 0px",
                        borderRadius: "8px",
                      }}
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
                    style={isResponsive?{
                      padding: "12px 2px 12px 2px",
                      margin: "0px 20px 0px 0px",
                    }:{
                      padding: "12px 30px 12px 20px",
                      margin: "0px 20px 0px 0px",
                    }}
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
            <Spacer height="10px" />
            <Box width={isResponsive?"100%":"55vw"} padding={isResponsive?"41px 20px 20px 20px":"41px 20px 52px 64px"}>
              <Row className="align-items-center">
                <Col md={5}>
                  <H1 color="black" fontSize="24px" weight="500">
                    Liquor Info
                  </H1>
                </Col>
                <Col md={7}>
                  <div>
                    <Row
                      style={isResponsive?{
                        background: "#F2F2F2",
                        padding: "12px 2px 12px 2px",
                        margin: "0px 20px 0px 0px",
                        borderRadius: "8px",
                      }:{
                        background: "#F2F2F2",
                        padding: "12px 30px 12px 20px",
                        margin: "0px 20px 0px 0px",
                        borderRadius: "8px",
                      }}
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
                    style={isResponsive?{
                      padding: "2px 2px 12px 2px",
                      margin: "0px 20px 0px 0px",
                    }:{
                      padding: "12px 30px 12px 20px",
                      margin: "0px 20px 0px 0px",
                    }}
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
            <Spacer height="10px" />
            <Box width={isResponsive?"100%":"55vw"} padding={isResponsive?"41px 20px 20px 20px":"41px 20px 52px 64px"}>
              <Row className="align-items-center">
                <Col md={5}>
                  <H1 color="black" fontSize="24px" weight="500">
                    Manager Info
                  </H1>
                </Col>
                <Col md={7}>
                  <div>
                    <Row
                      style={isResponsive?{
                        background: "#F2F2F2",
                        padding: "12px 2px 12px 2px",
                        margin: "0px 20px 0px 0px",
                        borderRadius: "8px",
                      }:{
                        background: "#F2F2F2",
                        padding: "12px 30px 12px 20px",
                        margin: "0px 20px 0px 0px",
                        borderRadius: "8px",
                      }}
                    >
                      <Col md={6} sm={6} xs={6}>
                        <P color="black" weight="400">
                          Manger Name
                        </P>
                      </Col>
                      <Col md={6} sm={6} xs={6}>
                        <P color="black" weight="400">
                          License Expiry Date
                        </P>
                      </Col>
                    </Row>
                  </div>
                  <Row
                    style={isResponsive?{
                      padding: "16px 2px 12px 2px",
                      margin: "0px 20px 0px 0px",
                    }:{
                      padding: "16px 30px 12px 20px",
                      margin: "0px 20px 0px 0px",
                    }}
                  >
                    <Col md={6} sm={6} xs={6}>
                      <P color="black" weight="400">
                        Alex
                      </P>
                    </Col>
                    <Col md={6} sm={6} xs={6}>
                      <P color="black" weight="300">
                        04/10/2025
                      </P>
                    </Col>
                  </Row>
                  <Row
                    style={isResponsive?{
                      padding: "12px 2px 12px 2px",
                      margin: "0px 20px 0px 0px",
                    }:{
                      padding: "12px 30px 12px 20px",
                      margin: "0px 20px 0px 0px",
                    }}
                  >
                    <Col md={6} sm={6} xs={6}>
                      <P color="black" weight="400">
                        Jhon Doe
                      </P>
                    </Col>
                    <Col md={6} sm={6} xs={6}>
                      <P color="black" weight="300">
                        04/10/2024
                      </P>
                    </Col>
                  </Row>
                  <Row
                    style={isResponsive?{
                      padding: "12px 2px 12px 2px",
                      margin: "0px 20px 0px 0px",
                    }:{
                      padding: "12px 30px 12px 20px",
                      margin: "0px 20px 0px 0px",
                    }}
                  >
                    <Col md={6} sm={6} xs={6}>
                      <P color="black" weight="400">
                        Jhon Doe
                      </P>
                    </Col>
                    <Col md={6} sm={6} xs={6}>
                      <P color="#EF3061" weight="300">
                        04/10/2024
                      </P>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Box>
          </Scrool>
          <Spacer />
          <Row style={{ width: "55vw", margin: "0" }}>
            <Col md={6}>
              <Button
              className={isResponsive?"mb-2":""}
                style={{
                  width: "100%",
                  padding: "9px 14px",
                  background: "transparent",
                  border: "1px solid #000000",
                  fontWeight: "600",
                  fontSize: "14px",
                  borderRadius:"3px"
                }}
              >
                DM for edit Request
              </Button>
              
            </Col>
            <Col md={6}>
              <Button
                style={{
                  width: "100%",
                  padding: "9px 14px",
                  background: "black",
                  color: "white",
                  fontSize: "14px",
                  borderRadius:"3px"
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
