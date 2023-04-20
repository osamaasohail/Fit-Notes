import styled from "styled-components";
import { H1, P } from "./Typography";
import { Spacer } from "./Spacer";
import { Input } from "./Input";
import { Col, Row } from "react-bootstrap";
import { Button } from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Wrapper = styled.div`
  background: white;
  height: 90vh;
  @media (max-width: 768px) {
    height: 100%;
    padding: 50px 0px 50px 0px;
  }
`;
const TextContainer = styled.div`
  padding: 4vw 10vw 1vw 10vw;
  // padding:6vw;
`;
export default function Blogin() {
  const [signup, setSignUp] = useState(true);
  const [bussinessType, setBussinessType] = useState("");
  const [bussinessName, setBussinessName] = useState("");
  const [bussinessEmail, setBussinessEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginTerms, setLoginTerms] = useState(false);

  const [accountType, setAccountType] = useState("Bussiness");
  const navigate = useNavigate();
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <>
      <Wrapper>
        {signup ? (
          <TextContainer>
            <div>
              <H1 color="#161616" weight="500" fontSize="40px">
                Signup
              </H1>
              <Spacer height="16px" />
              <P color="#161616" fontSize="14px" weight="400">
                Account Type <span style={{ color: "red" }}>*</span>
              </P>
              <select
                onChange={(e) => {
                  setAccountType(e.target.value);
                  setBussinessType(e.target.value);
                }}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "none",
                  background: "#F2F2F2",
                  color: "#222427",
                }}
              >
                <option value={"Bussiness"}>Business</option>
                <option value={"Individual"}>Individual</option>
              </select>
              <Spacer height="21px" />
              <P color="#161616" fontSize="14px" weight="400">
                Business Name <span style={{ color: "red" }}>*</span>
              </P>
              <Input onChange={(e)=>{setBussinessName(e.target.value)}} />
              <Spacer height="21px" />

              <P color="#161616" fontSize="14px" weight="400">
                Email<span style={{ color: "red" }}>*</span>
              </P>
              <Input onChange={(e)=>{setBussinessEmail(e.target.value)}} type="email" />
              <Spacer height="21px" />

              <P color="#161616" fontSize="14px" weight="400">
                Password<span style={{ color: "red" }}>*</span>
              </P>
              <Input onChange={(e)=>{setPassword(e.target.value)}} type="password" />
              <Spacer height="21px" />

              <Row className="align-items-center">
                <Col style={{ paddingRight: "0px" }} sm={1} xs={2}>
                  <Input onChange={()=>{setTerms(!terms)}} type="checkbox" />
                </Col>
                <Col style={{ paddingLeft: "0px" }}>
                  <P
                    lHeight={isResponsive && "17px"}
                    color="#161616"
                    fontSize="14px"
                    weight="400"
                  >
                    By creating an account you are agreeing to{" "}
                    {!isResponsive && <br />} our Terms and Conditions and
                    Privacy Policy
                  </P>
                </Col>
              </Row>
              <Spacer height="21px" />

              <Button
                onClick={() => {
                  if (accountType === "Bussiness") {
                    navigate("/payment");
                  } else if (accountType === "Individual") {
                    navigate("/individual-payment");
                  }
                }}
                background="black"
                style={{ color: "white", width: "100%" }}
              >
                SIGNUP
              </Button>
              <Spacer height="21px" />
              <P
                style={{ textAlign: "center" }}
                color="#161616"
                fontSize="14px"
                weight="400"
              >
                Alreay have Account?{" "}
                <span
                  onClick={() => setSignUp(false)}
                  style={{ fontWeight: "bold", cursor: "pointer" }}
                >
                  Login
                </span>
              </P>
            </div>
          </TextContainer>
        ) : (
          <TextContainer>
            <div>
              <H1 color="#161616" weight="500" fontSize="40px">
                Login
              </H1>
              <Spacer height="21px" />
              <P color="#161616" fontSize="14px">
                Email<span style={{ color: "red" }}>*</span>
              </P>
              <Input onChange={(e)=>{setLoginEmail(e.target.value)}} type="email" />
              <Spacer height="21px" />

              <P color="#161616" fontSize="14px">
                Password<span style={{ color: "red" }}>*</span>
              </P>
              <Input onChange={(e)=>{setLoginPassword(e.target.value)}} type="password" />
              <Spacer height="21px" />

              <Row className="align-items-center">
                <Col style={{ paddingRight: "0px" }} sm={1} xs={1}>
                  <Input onChange={()=>{setLoginTerms(!loginTerms)}} type="checkbox" />
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
              <Spacer height="21px" />

              <Button
                onClick={() => {
                  navigate("/");
                }}
                background="black"
                style={{ color: "white", width: "100%" }}
              >
                LOGIN
              </Button>
              <Spacer height="21px" />
              <P
                style={{ textAlign: "center" }}
                color="#161616"
                fontSize="14px"
                weight="400"
              >
                Donot have Account?{" "}
                <span
                  onClick={() => {
                    setSignUp(true);
                  }}
                  style={{ fontWeight: "bold", cursor: "pointer" }}
                >
                  Signup
                </span>
              </P>
            </div>
          </TextContainer>
        )}
      </Wrapper>
    </>
  );
}
