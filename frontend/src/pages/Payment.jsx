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
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch, useSelector } from "react-redux";
import { businessLicense } from "../service/redux/middleware/licenses";

const Wrapper = styled.div`
  // height:100vh;
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
export default function Payment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [businessName, setBusinessName] = useState("");
  const [role, setRole] = useState(null);
  const [bussinerOwnerEmail, setBussinerOwnerEmail] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [liquorLicenseExpiry, setLiquorLicenseExpiry] = useState("");
  const [gamingLicense, setGamingLicense] = useState("");
  const [gamingLicenseExpiry, setGamingLicenseExpiry] = useState("");
  const [totalPayment, setTotalPayment] = useState(0);
  const [term, setTerm] = useState(false);

  const [userData, token] = useSelector((state) => {
    return [state.signin.signInData.data.user, state.signin.signInData.data.token];
  });
  useEffect(() => {
    setBusinessName(userData.name);
    setBussinerOwnerEmail(userData.email);
  }, [userData]);

  const [dutyManagers, setDutyManagers] = useState([
    { name: "", email: "", licenseNumber: "", expiryDate: "" },
  ]);

  const [data, setData] = useState([
    { id: 60, isChecked: false },
    { id: 50, isChecked: false },
    { id: 40, isChecked: false },
    { id: 30, isChecked: false },
  ]);

  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const onDutyManagerAdd = () => {
    setDutyManagers([
      ...dutyManagers,
      { name: "", email: "", licenseNumber: "", expiryDate: "" },
    ]);
  };

  const onDutyManagerRemove = (index) => {
    const list = [...dutyManagers];
    list.splice(index, 1);
    setDutyManagers(list);
  };

  const handleDutyManagerChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...dutyManagers];
    list[index][name] = value;
    setDutyManagers(list);
  };

  function handleReminderChange(e) {
    const value = e.target.value;
    const newArray = [...data];
    const index = newArray.findIndex((obj) => obj.id == value);
    const updatedObject = {
      ...newArray[index],
      isChecked: !newArray[index].isChecked,
    };
    newArray[index] = updatedObject;
    setData(newArray);
  }

  const handlePaymentAndSubmit = () => {
    var userData = {
      name: businessName,
      role: parseInt(role),
      licenseNumber: licenseNumber,
      expiryDate: liquorLicenseExpiry,
      dutyManagers: dutyManagers,
      gamingLicense: gamingLicense,
      gamingLicenseExpiry: gamingLicenseExpiry,
      sendNotiBeforeExpiry: data
        .map((obj) => obj.id)
        .filter((obj) => obj.isChecked),
    };
    var calculateQuantity = dutyManagers?.length;
    if ((gamingLicense && gamingLicenseExpiry) !== "") {
      calculateQuantity += 1;
    }
    userData.quantity = calculateQuantity;
    dispatch(businessLicense(userData, token)).then((res) => {
      window.location.href = res.payload.data.url;
    });
  };
  return (
    <>
      {/* style={{padding:"3vw 10vw 0vw 10vw"}} */}
      <Wrapper>
        <Row style={{ height: "100%", margin: "0px" }}>
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
          <Col md={7}>
            <div
              style={
                isResponsive
                  ? { padding: "5vw 5vw 3vw 5vw" }
                  : { padding: "1vw 10vw 0vw 10vw" }
              }
            >
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
                    onChange={(e) => {
                      setBusinessName(e.target.value);
                    }}
                    value={businessName}
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
              <Spacer height="24px" />

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
                        onChange={(e) => {
                          console.log("Value", e.target.value);
                          setRole(e.target.value);
                        }}
                        value={1}
                        name="a"
                        style={{
                          fontSize: "14px",
                          width: "20px",
                          height: "20px",
                          marginRight: "10px",
                        }}
                        type="radio"
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
                        onChange={(e) => {
                          console.log("Value", e.target.value);
                          setRole(e.target.value);
                        }}
                        value={2}
                        name="a"
                        style={{
                          fontSize: "14px",
                          width: "20px",
                          height: "20px",
                          marginRight: "10px",
                        }}
                        type="radio"
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
                  Business Owner Email<span style={{ color: "red" }}>*</span>
                </P>
                <Spacer height="2px" />
                <div style={{ position: "relative" }}>
                  <Input
                    value={bussinerOwnerEmail}
                    onChange={(e) => {
                      setBussinerOwnerEmail(e.target.value);
                    }}
                    disabled={true}
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
                  <Spacer height="24px" />
                </div>
              </div>
              <div>
                <P color="#161616" fontSize="14px" weight="600">
                  Liquor license number<span style={{ color: "red" }}>*</span>
                  <div style={{ position: "relative" }}>
                    <Input
                      onChange={(e) => {
                        setLicenseNumber(e.target.value);
                      }}
                      value={licenseNumber}
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
                      value={liquorLicenseExpiry}
                      onChange={(e) => {
                        setLiquorLicenseExpiry(e.target.value);
                      }}
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
              {dutyManagers.map((item, index) => {
                return (
                  <>
                    <Row key={index} className="align-items-center">
                      <Col md={6}>
                        <div>
                          <P color="#161616" fontSize="14px" weight="600">
                            Add Duty Manager
                            <span style={{ color: "red" }}>*</span>
                            <div style={{ position: "relative" }}>
                              <Input
                                onChange={(e) =>
                                  handleDutyManagerChange(e, index)
                                }
                                name="name"
                                value={item.name}
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
                            License Expiry Date
                            <span style={{ color: "red" }}>*</span>
                            <div style={{ position: "relative" }}>
                              <Input
                                onChange={(e) =>
                                  handleDutyManagerChange(e, index)
                                }
                                name="expiryDate"
                                value={item.date}
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
                      <Col md={6}>
                        <div>
                          <P color="#161616" fontSize="14px" weight="600">
                            Add Duty Manager Email
                            <span style={{ color: "red" }}>*</span>
                          </P>
                          <Spacer height="2px" />
                          <div style={{ position: "relative" }}>
                            <Input
                              onChange={(e) =>
                                handleDutyManagerChange(e, index)
                              }
                              name="email"
                              value={item.email}
                              style={{
                                fontSize: "14px",
                                width: "100%",
                              }}
                              placeholder="Email"
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
                            <Spacer height="24px" />
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div>
                          <P color="#161616" fontSize="14px" weight="600">
                            License Number
                            <span style={{ color: "red" }}>*</span>
                          </P>
                          <Spacer height="2px" />
                          <div style={{ position: "relative" }}>
                            <Input
                              onChange={(e) =>
                                handleDutyManagerChange(e, index)
                              }
                              name="licenseNumber"
                              value={item.licenseNumber}
                              style={{
                                fontSize: "14px",
                                width: "100%",
                              }}
                              placeholder="License Number"
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
                            <Spacer height="24px" />
                          </div>
                        </div>
                      </Col>
                      <Col className="mt-2" md={4}>
                        {dutyManagers.length - 1 === index && (
                          <>
                            <Button
                              onClick={() => {
                                onDutyManagerAdd();
                              }}
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
                            {dutyManagers.length !== 1 && (
                              <Button
                                onClick={() => onDutyManagerRemove(index)}
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
                            )}
                          </>
                        )}

                        {/* <p>+</p> */}
                      </Col>
                    </Row>
                    <Spacer height="24px" />
                  </>
                );
              })}

              <Row>
                <Col md={6}>
                  <div>
                    <P color="#161616" fontSize="14px" weight="600">
                      Gaming License Number
                      <span style={{ color: "red" }}>*</span>
                      <div style={{ position: "relative" }}>
                        <Input
                          onChange={(e) => {
                            setGamingLicense(e.target.value);
                          }}
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
                          onChange={(e) => {
                            setGamingLicenseExpiry(e.target.value);
                          }}
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
                  {data.map((item, index) => {
                    return (
                      <>
                        <Col className="mb-2" lg={3} md={6} sm={6}>
                          <div className="d-flex">
                            <Input
                              value={item.id}
                              onChange={(e) => handleReminderChange(e)}
                              id={item.id}
                              style={{
                                fontSize: "14px",
                                //   background: "#FCFCFC",
                                width: "20px",
                                marginRight: "5px",
                              }}
                              type="checkbox"
                              placeholder="Liquor Browdy"
                              checked={item.isChecked}
                            />
                            <P color="#161616" fontSize="14px" weight="500">
                              {item.id} days
                            </P>

                            {/* <Spacer height="16px" /> */}
                          </div>
                        </Col>
                      </>
                    );
                  })}
                </Row>

                {/* </div> */}
                {/* <Spacer height="12px" /> */}

                {/* <Spacer height="16px" /> */}
                {/* <div className="d-flex">
                  <Input
                    onChange={(e) => {
                      setTerm(!term);
                    }}
                    style={{
                      fontSize: "14px",
                      //   background: "#FCFCFC",
                      width: "30px",
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
                </div> */}
                <Spacer />
                {/* <ReCAPTCHA
                  sitekey="6LcczbglAAAAAHc_JHrisgSMJ46quz86Vjnlkl17"
                /> */}
                <Spacer />
                <Button
                  background="black"
                  style={{ color: "white", width: "100%" }}
                  onClick={() => handlePaymentAndSubmit()}
                >
                  Proceed to Payment
                </Button>
              </div>
            </div>
          </Col>
          {isResponsive ? (
            ""
          ) : (
            <Col md={5}>
              <img width={"100%"} height={"100%"} src={Vodka} />
            </Col>
          )}
        </Row>
      </Wrapper>
    </>
  );
}
