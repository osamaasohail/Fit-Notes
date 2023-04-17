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



const Wrapper = styled.div`
  // height:100vh;
`;

const Logo = styled(H1)`
color:black;
  font-size: 20px;
  font-weight: 700;
  padding-left:50px;
//   padding-top:10px;
  cursor: pointer;
  :hover {
    color: #caca0f;
  }
  @media(max-width:768px){
  padding-left:5px;

    
  }
`;
export default function Payment() {
  const navigate = useNavigate();

  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <>
      {/* style={{padding:"3vw 10vw 0vw 10vw"}} */}
      <Wrapper>
        <Row style={{ height: "100%",margin:"0px" }}>
        <Row className="my-3">
            <Col md={6}>
              <Logo
                onClick={() => {
                  navigate("/");
                }}
              >
                The Hospitality Guardian
              </Logo>
            </Col>
            {
              isResponsive?"": 
               <Col  md={6}>
              <H1 color="black" fontSize="20px" weight="700" style={{textAlign:"right"}}
               
              >
                info@hospitalityguardian.co.nz
              </H1>
            </Col>
            }
            
           
          </Row>
          <Col md={7}>
            <div style={isResponsive?{ padding: "5vw 5vw 3vw 5vw" }:{ padding: "1vw 10vw 0vw 10vw" }}>
              <H1 weight="700" fontSize="22px" color="black">
                Liquor License Reminder
              </H1>
              <Spacer height="24px" />
              <div>
                <P color="#161616" fontSize="14px" weight="600">
                  Business Name<span style={{ color: "red" }}>*</span>
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
                    
                  < div className="d-flex  align-items-center">
                    <Input
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
                      Manager
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
              <Spacer height="24px" />

              <div>
                <P color="#161616" fontSize="14px" weight="600">
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
              <Spacer height="24px" />

              <Row className="align-items-center">
                <Col md={4}>
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
                    <P color="#161616" fontSize="14px" weight="600">
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
                <Col className="mt-2" md={4}>
                  <Button
                    style={{
                      padding: "0px 8px 0px 8px",
                      color: "white",
                      fontSize: "17px",
                      fontWeight: "500",
                    }}
                    background="#11AF22"
                  >
                    +
                  </Button>
                  {/* <p>+</p> */}
                  <Button
                    style={{
                      padding: "0px 8px 0px 8px",
                      color: "white",
                      fontSize: "17px",
                      fontWeight: "500",
                      marginLeft: "10px",
                    }}
                    background="#FF1B1B"
                  >
                    -
                  </Button>
                </Col>
              </Row>
              <Spacer height="24px" />

              <Row>
                <Col md={6}>
                  <div>
                    <P color="#161616" fontSize="14px" weight="600">
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
                    <P color="#161616" fontSize="14px" weight="600">
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
              <Spacer height="24px" />

              <div>
                <P color="#161616" fontSize="14px" weight="600">
                  Notification preference before expiry Date
                  <span style={{ color: "red" }}>*</span>
                </P>
                <Spacer height="20px" />

                {/* <div className="d-flex"> */}
                <Row>
                  <Col className="mb-2" lg={3} md={6} sm={6} >
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

                      {/* <Spacer height="16px" /> */}
                    </div>
                  </Col>
                  <Col className="mb-2" lg={3} md={6} sm={6}>
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

                      {/* <Spacer height="16px" /> */}
                    </div>
                  </Col>
                  <Col className="mb-2" lg={3} md={6} sm={6}>
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

                      {/* <Spacer height="16px" /> */}
                    </div>
                  </Col>
                  <Col className="mb-2" lg={3} md={6} sm={6}>
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

                      {/* <Spacer height="16px" /> */}
                    </div>
                  </Col>
                </Row>
                {/* </div> */}
                <Spacer height="12px" />

                <Spacer height="16px" />
                <div className="d-flex">
                  <Input
                    style={{
                      fontSize: "14px",
                      //   background: "#FCFCFC",
                      width: "30px",
                    }}
                    type="checkbox"
                    placeholder="Liquor Browdy"
                  />
                  <P className="mx-2" color="#161616" fontSize="14px" weight="500">
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
          {
            isResponsive?"":
            <Col md={5}>
            <img width={"100%"} height={"100%"} src={Vodka} />
          </Col>
          }
          
        </Row>
      </Wrapper>
    </>
  );
}
