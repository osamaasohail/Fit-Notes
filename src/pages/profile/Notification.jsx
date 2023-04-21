import { Box } from "../../components/Box";
import SideNavbar from "../../components/SideNavbar";
import { Col, Row } from "react-bootstrap";
import { H1, P } from "../../components/Typography";
import { Spacer } from "../../components/Spacer";
import Edit from "../../images/profiledit.svg";
import { Button } from "../../components/Button";
import styled from "styled-components";
import { Input } from "../../components/Input";
import Search from "../../images/search.svg";
import circle from "../../images/active.svg";
import notification from "../../images/notficationpic.svg";
import { useMediaQuery } from "react-responsive";


const Scrool = styled.div`
  height: 81vh;
  overflow-y: auto;
  padding: 0px 20px 10px 20px;
`;
const data = [
  {
    image: notification,
    msg: "Jhon Registered as business owner",
    active: true,
    status: "Just Now",
    time: "11:48 AM",
  },
  {
    image: notification,
    msg: "Jhon Registered as business owner",
    active: true,
    status: "Just Now",
    time: "11:48 AM",
  },
];
export default function Notification() {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <>
      <Row style={{ margin: "0px" }}>
        <Col style={{ padding: "0px" }} lg={2} md={3}>
          <SideNavbar />
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          style={{ padding: "0px", flexDirection: "column" }}
          lg={10}
          md={9}
        >
          <Box
            style={{ background: "none", boxShadow: "none" }}
            width={isResponsive?"100%":"55vw"}
            padding={isResponsive?"41px 30px 20px 30px":"41px 20px 52px 64px"}
          >
            <Row>
              <Col md={7}>
                <H1 fontSize="24px" weight="500" color="black">
                  Notification
                </H1>
              </Col>
              <Col md={5}>
                <div style={{ position: "relative" }}>
                  <Input
                    style={{
                      fontSize: "14px",
                      background: "#FCFCFC",
                      width: "100%",
                    }}
                    placeholder="Search here"
                  />
                  <div
                    style={{ position: "absolute", top: "22%", right: "5%" }}
                  >
                    <img src={Search} />
                  </div>
                </div>
              </Col>
            </Row>
          </Box>
          <Scrool>
            {/* <SideNavbar /> */}

            <Spacer height={isResponsive?"20px":"59px"} />
            {data.map((item, index) => {
              return (
                <>
                  <Box width={isResponsive?"100%":"55vw"} padding="20px">
                    <div className="d-flex align-items-end">
                        {
                            item.active? <img alt="active" src={circle} />:""
                        }
                     
                      <div className="d-flex justify-content-between w-100 align-items-center">
                        <div className="d-flex align-items-center">
                          <img className="mx-1" src={notification} />
                          <P className="mx-1" color="black" weight="400">
                            {item.msg}
                          </P>
                        </div>
                        <div className="d-flex ">
                          <P
                            className="mx-2"
                            style={{ opacity: "0.5" }}
                            color="black"
                            weight="400"
                          >
                            {item.status}
                          </P>
                          <P
                            style={{ opacity: "0.5" }}
                            fontSize="14px"
                            color="black"
                            weight="400"
                          >
                           {item.time}
                          </P>
                        </div>
                      </div>
                    </div>
                  </Box>
                  <Spacer height="10px"/>
                </>
              );
            })}
          </Scrool>
        </Col>
      </Row>
    </>
  );
}
