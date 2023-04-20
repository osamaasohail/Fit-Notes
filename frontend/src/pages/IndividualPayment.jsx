import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Vodka from "../images/vodka.svg";
import { H1, P } from "../components/Typography";
import { Spacer } from "../components/Spacer";
import { Input } from "../components/Input";
import Check from "../images/check.svg";
import { Button } from "../components/Button";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
`;
const Logo = styled(H1)`
  color: black;
  font-size: 20px;
  font-weight: 700;
  padding-left: 50px;
  //   padding-top:10px;
  cursor: pointer;
  :hover {
    color: #caca0f;
  }
  @media (max-width: 768px) {
    padding-left: 5px;
  }
`;

export default function IndividualPayment() {
  const navigate = useNavigate();
  const checkData = [
    { id: 1, name: "60", isChecked: false },
    { id: 2, name: "50", isChecked: false },
    { id: 3, name: "40", isChecked: false },
    { id: 4, name: "30", isChecked: false },
  ];
  const [data, setData] = useState(checkData);
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });

  function handleChange(e) {
    const value = e.target.value;
    const modifiedData = [...data];
    modifiedData.map((item) => {
      item.isChecked = item.id === +value;
      return item;
    });
    setData(modifiedData);
  }
  return (
    <>
      <Wrapper>
        <Row style={{ height: "100%", margin: "0px" }}>
          <Row className="mt-3">
            <Col md={6}>
              <Logo
                onClick={() => {
                  navigate("/");
                }}
              >
                The Hospitality Guardian
              </Logo>
            </Col>
            {isResponsive ? (
              ""
            ) : (
              <Col md={6}>
                <H1
                  color="black"
                  fontSize="20px"
                  weight="700"
                  style={{ textAlign: "right" }}
                >
                  info@hospitalityguardian.co.nz
                </H1>
              </Col>
            )}
          </Row>
          <Col lg={8} md={6}>
            <div
              style={
                isResponsive
                  ? { padding: "5vw 5vw 3vw 5vw" }
                  : { padding: "1vw 10vw 0vw 10vw" }
              }
            >
              <H1 weight="800" fontSize="22px" color="black">
                Liquor License Reminder
              </H1>
              <Spacer height="24px" />
              <div>
                <P color="#161616" fontSize="14px" weight="600">
                  Full Name<span style={{ color: "red" }}>*</span>
                </P>
                <Spacer height="2px" />
                <div style={{ position: "relative" }}>
                  <Input
                    style={{
                      fontSize: "14px",
                      //   background: "#FCFCFC",
                      width: "100%",
                    }}
                    placeholder="Liquor Browdy"
                  />
                  <div
                    style={{ position: "absolute", top: "15%", right: "2%" }}
                  >
                    <img src={Check} />
                  </div>
                  <Spacer height="24px" />
                </div>
              </div>
              <div>
                <P color="#161616" fontSize="14px" weight="600">
                  Select your Role<span style={{ color: "red" }}>*</span>
                </P>
                <Spacer height="10px" />
                {/* <div className="d-flex"> */}
                <Row>
                  <Col md={6}>
                    <div className="d-flex align-items-center ">
                      <Input
                      name="a"
                        style={{
                          fontSize: "14px",
                          //   background: "#FCFCFC",
                          width: "20px",
                          height: "20px",
                          marginRight: "10px",
                        }}
                        type="radio"
                        placeholder="Liquor Browdy"
                      />
                      <P color="#161616" fontSize="14px" weight="500">
                        Business Owner
                      </P>

                      <Spacer height="32px" />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex  align-items-center">
                      <Input
                      name="a"
                        style={{
                          fontSize: "14px",
                          //   background: "#FCFCFC",
                          width: "20px",
                          height: "20px",
                          marginRight: "10px",
                        }}
                        type="radio"
                        placeholder="Liquor Browdy"
                      />
                      <P color="#161616" fontSize="14px" weight="500">
                        Individual
                      </P>

                      <Spacer height="16px" />
                    </div>
                  </Col>
                </Row>
              </div>
              {/* </div> */}
              <Spacer height="32px" />

              <div>
                <P color="#161616" fontSize="14px" weight="600">
                  Add Duty Manager<span style={{ color: "red" }}>*</span>
                  <div style={{ position: "relative" }}>
                    <Input
                      style={{
                        fontSize: "14px",
                        //   background: "#FCFCFC",
                        width: "100%",
                      }}
                      placeholder="Name"
                    />
                    <div
                      style={{ position: "absolute", top: "15%", right: "2%" }}
                    >
                      <img src={Check} />
                    </div>
                    <Spacer height="16px" />
                  </div>
                </P>
              </div>
              <Spacer height="24px" />
              <div>
                <P color="#161616" fontSize="14px" weight="600">
                  Add Duty Manager Email<span style={{ color: "red" }}>*</span>
                  <div style={{ position: "relative" }}>
                    <Input
                      style={{
                        fontSize: "14px",
                        //   background: "#FCFCFC",
                        width: "100%",
                      }}
                      placeholder="Email"
                    />
                    <div
                      style={{ position: "absolute", top: "15%", right: "2%" }}
                    >
                      <img src={Check} />
                    </div>
                    <Spacer height="16px" />
                  </div>
                </P>
              </div>
              <Spacer height="24px" />

              <div>
                <P color="#161616" fontSize="14px" weight="600">
                  Manager’s license Expiry Date
                  <span style={{ color: "red" }}>*</span>
                  <div style={{ position: "relative" }}>
                    <Input
                      style={{
                        fontSize: "14px",
                        //   background: "#FCFCFC",
                        width: "100%",
                      }}
                      type="date"
                      placeholder="12345"
                    />

                    <Spacer height="16px" />
                  </div>
                </P>
              </div>
              <Spacer height="24px" />

              <div>
                <P color="#161616" fontSize="14px" weight="600">
                  Notification preference before expiry Date
                  <span style={{ color: "red" }}>*</span>
                </P>
                <Spacer height="20px" />

                {/* <div className="d-flex"> */}
                <Row>
                  {data.map((item, index) => {
                    return (
                      <>
                        <Col className="mb-2" lg={3} md={6} sm={6}>
                          <div className="d-flex">
                            <Input
                            value={item.id}
                            onChange={(e) => handleChange(e)}
                              
                              style={{
                                fontSize: "14px",
                                //   background: "#FCFCFC",
                                width: "50px",
                              }}
                              type="checkbox"
                              placeholder="Liquor Browdy"
                              checked={item.isChecked}
                            />
                            <P color="#161616" fontSize="14px" weight="500">
                              {item.name} days
                            </P>

                            {/* <Spacer height="16px" /> */}
                          </div>
                        </Col>
                      </>
                    );
                  })}
                </Row>
                {/* </div> */}
                <Spacer height="12px" />

                <Spacer height="16px" />
                <div className="d-flex">
                  <Input
                    className="inputGreen"
                    style={{
                      fontSize: "14px",
                      //   background: "#FCFCFC",
                      width: "20px",
                    }}
                    type="checkbox"
                    placeholder="Liquor Browdy"
                  />
                  <P
                    className="mx-2"
                    color="#161616"
                    fontSize="14px"
                    weight="500"
                  >
                    By creating an account you are agreeing to our Terms and
                    Conditions and Privacy Policy
                  </P>
                </div>
                <Spacer />
                <Button
                  background="black"
                  style={{ color: "white", width: "100%" }}
                >
                  Proceed to Payment
                </Button>
              </div>
            </div>
          </Col>
          {isResponsive ? (
            ""
          ) : (
            <Col lg={4} md={6}>
              <img width={"100%"} height={""} src={Vodka} />
            </Col>
          )}
        </Row>
      </Wrapper>
    </>
  );
}
