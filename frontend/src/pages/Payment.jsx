import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Vodka from "../images/vodka.svg";
import { H1, P } from "../components/Typography";
import { Spacer } from "../components/Spacer";
import { Input } from "../components/Input";
import Check from "../images/check.svg";
import { Button } from "../components/Button";

const Wrapper = styled.div`
  // height:100vh;
`;
export default function Payment() {
  return (
    <>
      {/* style={{padding:"3vw 10vw 0vw 10vw"}} */}
      <Wrapper>
        <Row style={{ height: "100%" }}>
          <Col md={8}>
            <div style={{padding:"2vw 15vw 0vw 15vw"}}>
              <H1 weight="700" fontSize="22px" color="black">
                Liquor License Reminder
              </H1>
              <Spacer height="24px"/>
              <div>
                <P color="#161616" fontSize="14px" weight="500">
                  Business Name<span style={{ color: "red" }}>*</span></P>
                  <Spacer height="2px"/>
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
                <P color="#161616" fontSize="14px" weight="500">
                  Select your Role<span style={{ color: "red" }}>*</span>
                </P>
                <Spacer height="10px"/>
                <div className="d-flex">
                  <div className="d-flex align-items-center ">
                    <Input
                      style={{
                        fontSize: "14px",
                        //   background: "#FCFCFC",
                        width: "20px",
                      }}
                      type="radio"
                      placeholder="Liquor Browdy"
                    />
                    <P color="#161616" fontSize="14px" weight="500">
                      Business Owner
                    </P>

                    <Spacer height="32px" />
                  </div>
                  <div className="d-flex mx-2 align-items-center">
                    <Input
                      style={{
                        fontSize: "14px",
                        //   background: "#FCFCFC",
                        width: "20px",
                      }}
                      type="radio"
                      placeholder="Liquor Browdy"
                    />
                    <P color="#161616" fontSize="14px" weight="500">
                      Business Owner
                    </P>

                    <Spacer height="16px" />
                  </div>
                </div>
              </div>
              <Spacer height="32px"/>

              <div>
                <P color="#161616" fontSize="14px" weight="500">
                  Liquor license number<span style={{ color: "red" }}>*</span>
                  <div style={{ position: "relative" }}>
                    <Input
                      style={{
                        fontSize: "14px",
                        //   background: "#FCFCFC",
                        width: "100%",
                      }}
                      placeholder="12345"
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
              <Spacer height="24px"/>


              <div>
                <P color="#161616" fontSize="14px" weight="500">
                  liquor license Expiry Date
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
              <Spacer height="24px"/>

              <Row>
                <Col md={4}>
                  <div>
                    <P color="#161616" fontSize="14px" weight="500">
                      Add Duty Manager<span style={{ color: "red" }}>*</span>
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
                          style={{
                            position: "absolute",
                            top: "15%",
                            right: "2%",
                          }}
                        >
                          <img src={Check} />
                        </div>
                        <Spacer height="16px" />
                      </div>
                    </P>
                  </div>
                </Col>
                <Col md={4}>
                  <div>
                    <P color="#161616" fontSize="14px" weight="500">
                      License Expiry Date<span style={{ color: "red" }}>*</span>
                      <div style={{ position: "relative" }}>
                        <Input
                          style={{
                            fontSize: "14px",
                            //   background: "#FCFCFC",
                            width: "100%",
                          }}
                          placeholder="Liquor Browdy"
                          type="date"
                        />
                       
                        <Spacer height="16px" />
                      </div>
                    </P>
                  </div>
                </Col>
                <Col md={4}></Col>
              </Row>
              <Spacer height="24px"/>

              <Row>
                <Col md={6}>
                  <div>
                    <P color="#161616" fontSize="14px" weight="500">
                      Gaming License Number
                      <span style={{ color: "red" }}>*</span>
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
                          style={{
                            position: "absolute",
                            top: "15%",
                            right: "2%",
                          }}
                        >
                          <img src={Check} />
                        </div>
                        <Spacer height="16px" />
                      </div>
                    </P>
                  </div>
                </Col>
                <Col md={6}>
                  <div>
                    <P color="#161616" fontSize="14px" weight="500">
                      License Expiry Date<span style={{ color: "red" }}>*</span>
                      <div style={{ position: "relative" }}>
                        <Input
                          style={{
                            fontSize: "14px",
                            //   background: "#FCFCFC",
                            width: "100%",
                          }}
                          placeholder="Liquor Browdy"
                          type="date"
                        />
                        
                        <Spacer height="16px" />
                      </div>
                    </P>
                  </div>
                </Col>
                <Col md={4}></Col>
              </Row>
              <Spacer height="24px"/>

              <div>
                <P color="#161616" fontSize="14px" weight="500">
                  Notification preference before expiry Date
                  <span style={{ color: "red" }}>*</span>
                </P>
              <Spacer height="20px"/>

                <div className="d-flex">
                  <div className="d-flex">
                    <Input
                      style={{
                        fontSize: "14px",
                        //   background: "#FCFCFC",
                        width: "50px",
                      }}
                      type="checkbox"
                      placeholder="Liquor Browdy"
                    />
                    <P color="#161616" fontSize="14px" weight="500">
                      60 days
                    </P>

                    <Spacer height="16px" />
                  </div>
                  <div className="d-flex">
                    <Input
                      style={{
                        fontSize: "14px",
                        //   background: "#FCFCFC",
                        width: "50px",
                      }}
                      type="checkbox"
                      placeholder="Liquor Browdy"
                    />
                    <P color="#161616" fontSize="14px" weight="500">
                      50 days
                    </P>

                    <Spacer height="16px" />
                  </div>
                  <div className="d-flex">
                    <Input
                      style={{
                        fontSize: "14px",
                        //   background: "#FCFCFC",
                        width: "50px",
                      }}
                      type="checkbox"
                      placeholder="Liquor Browdy"
                    />
                    <P color="#161616" fontSize="14px" weight="500">
                      50 days
                    </P>

                    <Spacer height="16px" />
                  </div>
                  <div className="d-flex">
                    <Input
                      style={{
                        fontSize: "14px",
                        //   background: "#FCFCFC",
                        width: "50px",
                      }}
                      type="checkbox"
                      placeholder="Liquor Browdy"
                    />
                    <P color="#161616" fontSize="14px" weight="500">
                      30 days
                    </P>

                    <Spacer height="16px" />
                  </div>
                </div>
              <Spacer height="12px"/>

                <Spacer height="16px" />
                <div className="d-flex">
                  <Input
                    style={{
                      fontSize: "14px",
                      //   background: "#FCFCFC",
                      width: "50px",
                    }}
                    type="checkbox"
                    placeholder="Liquor Browdy"
                  />
                  <P color="#161616" fontSize="14px" weight="500">
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
          <Col md={4}>
            <img width={"100%"} height={"100%"} src={Vodka} />
          </Col>
        </Row>
      </Wrapper>
    </>
  );
}
