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
import { individualLicense } from "../service/redux/middleware/licenses";
import { ToastContainer } from "react-toastify";
import { getSingleUser } from "../service/redux/middleware/getUser";

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
    color: rgba(177, 149, 56, 1);
  }
  @media (max-width: 768px) {
    padding-left: 5px;
  }
`;

export default function IndividualPayment() {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [dutyManagerEmail, setDutyManagerEmail] = useState("");
  const [dutyManagerName, setDutyManagerName] = useState("");
  const [dutyManagerLicenseNumber, setDutyManagerLicenseNumber] = useState("");
  const [dutyManagerLicenseExpiry, setDutyManagerLicenseExpiry] = useState("");
  const userData = useSelector((state) => state.signin.signInData.data.user);
  // const [dutyManagerName, setDutyManagerName] = useState("");

  useEffect(() => {
    setFullName(userData.name);
    setDutyManagerEmail(userData.email);
    if(userData?.isProfileCompleted){
      navigate("/profile/edit-profile");
    }
  }, [userData]);

  // const [term, setTerm] = useState(false);
  const [data, setData] = useState([
    { id: 60, isChecked: false },
    { id: 50, isChecked: false },
    { id: 40, isChecked: false },
    { id: 30, isChecked: false },
  ]);

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

  const handleSubmit = () => {
    const userData = {
      name: fullName,
      dutyManager: {
        name: dutyManagerName,
        email: dutyManagerEmail,
        licenseNumber: dutyManagerLicenseNumber,
        expiryDate: dutyManagerLicenseExpiry,
      },
      sendNotiBeforeExpiry: data
        .filter((item) => item.isChecked)
        .map((item) => item.id),
    };
    dispatch(individualLicense(userData)).then((res) => {
      window.location.href = res.payload.data.url;
    });
  };

  return (
    <>
      <ToastContainer />
      <Wrapper>
        <Row style={{ height: "100%", margin: "0px" }}>
          <Row className="mt-3 mb-3">
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
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                    style={{
                      fontSize: "14px",
                      //   background: "#FCFCFC",
                      width: "100%",
                    }}
                    placeholder="Enter name"
                  />
                  <div
                    style={{ position: "absolute", top: "15%", right: "2%" }}
                  >
                    <img src={Check} />
                  </div>
                  <Spacer height="24px" />
                </div>
              </div>
              {/* <div>
                <P color="#161616" fontSize="14px" weight="600">
                  Select your Role<span style={{ color: "red" }}>*</span>
                </P>
                <Spacer height="10px" />
                <Row>
                  <Col md={6}>
                    <div className="d-flex align-items-center ">
                      <Input
                        onChange={(e) => {
                          setRole(e.target.value);
                        }}
                        value="bussiness-owner"
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
                          setRole(e.target.value);
                        }}
                        value="individual"
                        name="a"
                        style={{
                          fontSize: "14px",
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
              </div> */}
              {/* </div> */}
              <Spacer height="32px" />

              <div>
                <P color="#161616" fontSize="14px" weight="600">
                  Add Duty Manager<span style={{ color: "red" }}>*</span>
                  <div style={{ position: "relative" }}>
                    <Input
                      onChange={(e) => {
                        setDutyManagerName(e.target.value);
                      }}
                      value={dutyManagerName}
                      style={{
                        fontSize: "14px",
                        //   background: "#FCFCFC",
                        width: "100%",
                      }}
                      placeholder="Enter name"
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
                      value={dutyManagerEmail}
                      onChange={(e) => {
                        setDutyManagerEmail(e.target.value);
                      }}
                      style={{
                        fontSize: "14px",
                        //   background: "#FCFCFC",
                        width: "100%",
                      }}
                      placeholder="Enter email"
                      disabled={true}
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
                  Add Duty Manager License Number
                  <span style={{ color: "red" }}>*</span>
                  <div style={{ position: "relative" }}>
                    <Input
                      value={dutyManagerLicenseNumber}
                      onChange={(e) => {
                        setDutyManagerLicenseNumber(e.target.value);
                      }}
                      style={{
                        fontSize: "14px",
                        //   background: "#FCFCFC",
                        width: "100%",
                      }}
                      placeholder="Enter license number"
                      name="licenseNumber"
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
                      value={dutyManagerLicenseExpiry}
                      onChange={(e) => {
                        setDutyManagerLicenseExpiry(e.target.value);
                      }}
                      style={{
                        fontSize: "14px",
                        //   background: "#FCFCFC",
                        width: "100%",
                      }}
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
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
                              onChange={(e) => handleReminderChange(e)}
                              id={item.id}
                              style={{
                                fontSize: "14px",
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
                          </div>
                        </Col>
                      </>
                    );
                  })}
                </Row>
                {/* </div> */}
                {/* <Spacer height="12px" />

                <Spacer height="16px" />
                <div className="d-flex">
                  <Input
                  onChange={(e) => {setTerm(e.target.value)}}
                    className="inputGreen"
                    style={{
                      fontSize: "14px",
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
                </div> */}
                {/* <Spacer />
                <ReCAPTCHA
                  sitekey="6LcczbglAAAAAHc_JHrisgSMJ46quz86Vjnlkl17"
                /> */}
                <Spacer height="30px" />
                <Row className="align-items-center">
                  <Col
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                    sm={1}
                    xs={1}
                  >
                    <Input onChange={() => {}} type="checkbox" />
                  </Col>
                  <Col style={{ paddingLeft: "0px" }}>
                    <P
                      className={isResponsive ? "px-1" : ""}
                      lHeight={isResponsive ? "16px" : "19px"}
                      color="#161616"
                      fontSize="14px"
                      weight="400"
                    >
                      By creating an account you are agreeing to{" "}
                      {isResponsive ? "" : <br />} our Terms and Conditions and
                      Privacy Policy
                    </P>
                  </Col>
                </Row>
                <Spacer />
                <Button
                  background="black"
                  style={{ color: "white", width: "100%" }}
                  onClick={() => handleSubmit()}
                >
                  Proceed to Payment
                </Button>
                <Spacer />
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
