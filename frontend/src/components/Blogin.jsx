import styled from "styled-components";
import { H1, P } from "./Typography";
import { Spacer } from "./Spacer";
import { Input } from "./Input";
import { Col, Row } from "react-bootstrap";
import { Button } from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import ReCAPTCHA from "react-google-recaptcha";
import { useSelector, useDispatch } from "react-redux";
import { postSignUp } from "../service/redux/middleware/postSignUp";
import { signin } from "../service/redux/middleware/signin";
import { getUser } from "../service/redux/middleware/getUser";
import { useEffect } from "react";
import { toast } from "react-toastify";

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
const Scrool = styled.div`
  height: 81vh;
  overflow: auto;
  // padding: 0px 20px 10px 20px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export default function Blogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const [signup, setSignUp] = useState(true);
  const [businessName, setBusinessName] = useState("");
  const [businessEmail, setBussinessEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginTerms, setLoginTerms] = useState(false);
  const [accountType, setAccountType] = useState(2);
  const [isRecaptchaVerified, setRecaptchaVerified] = useState(false);
  // const count = useSelector((state) => state.singup)
  // const count = useSelector((state) => state.singin)
  const count = useSelector((state) => state);
  // dispatch(getUser())

  const handleSignup = async () => {
   if (!accountType) {
      toast.error("Please select account type");
      return;
    } else if (!businessName) {
      toast.error("Please enter business name");
      return;
    } else if (!businessEmail) {
      toast.error("Please enter business email");
      return;
    } else if (!password) {
      toast.error("Please enter password");
      return;
    } else if (!terms) {
      toast.error("Please accept terms and conditions");
      return;
    } else  if (!isRecaptchaVerified) {
      return toast.error("Please verify captcha");
    } 
    const data = {
      accountType: accountType,
      name: businessName,
      email: businessEmail,
      password: password,
    };
    dispatch(postSignUp(data)).then((res) => {
      if (res.payload.status === 201) {
        setSignUp(false);
        toast.success("Verification link has been sent to your email");
        setTimeout(() => {
          navigate("/sign-in");
        }, 3000);
      }
    });
  };
  const handleLogin = () => {
    if (!loginEmail) {
      toast.error("Please enter email");
      return;
    } else if (!loginPassword) {
      toast.error("Please enter password");
      return;
    }
    const data = {
      email: loginEmail,
      password: loginPassword,
    };
    dispatch(signin(data)).then((res) => {
      if (res.payload.status === 201) {
        if (res.payload.data.user.accountType === 1) {
          if (res.payload.data.user.isProfileCompleted === false) {
            navigate("/individual-payment");
          }
        } else if (res.payload.data.user.accountType === 2) {
          if (res.payload.data.user.isProfileCompleted === false) {
            navigate("/payment");
          }
        }
      }
    });
  };

  return (
    <>
      <Wrapper>
        <TextContainer>
          <Scrool>
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
                }}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "none",
                  background: "#F2F2F2",
                  color: "#222427",
                }}
              >
                <option value={2}>Business</option>
                <option value={1}>Individual</option>
              </select>
              <Spacer height="21px" />
              <P color="#161616" fontSize="14px" weight="400">
                {accountType === 2 ? "Business Name" : "Individual Name"}{" "}
                <span style={{ color: "red" }}>*</span>
              </P>
              <Input
                onChange={(e) => {
                  setBusinessName(e.target.value);
                }}
              />
              <Spacer height="21px" />

              <P color="#161616" fontSize="14px" weight="400">
                Email<span style={{ color: "red" }}>*</span>
              </P>
              <Input
                onChange={(e) => {
                  setBussinessEmail(e.target.value);
                }}
                type="email"
              />
              <Spacer height="21px" />

              <P color="#161616" fontSize="14px" weight="400">
                Password<span style={{ color: "red" }}>*</span>
              </P>
              <Input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
              />
              <Spacer height="21px" />

              <Row className="align-items-center">
                <Col style={{ paddingRight: "0px" }} sm={1} xs={2}>
                  <Input
                    onChange={() => {
                      setTerms(!terms);
                    }}
                    type="checkbox"
                  />
                </Col>
                <Col style={{ paddingLeft: "0px" }}>
                  <P
                    lHeight={isResponsive && "17px"}
                    color="#161616"
                    fontSize="14px"
                    weight="400"
                  >
                    By creating an account you are agreeing to{" "}
                    {!isResponsive && <br />} our{" "}
                    <a href="/terms-and-conditions" target="_blank">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="/privacy-policy" target="_blank">
                      Privacy Policy
                    </a>
                  </P>
                </Col>
              </Row>
              <Spacer height="21px" />

              <div style={{ width: "100%" }}>
                <ReCAPTCHA
                  sitekey="6LdadbgmAAAAAJxailx1--whwf9wJHBVq65CNwGh"
                  // sitekey="6LcUQy0mAAAAADbfyzXAUGUejxIzxH5yPavs9PKz"
                  // sitekey="6LcczbglAAAAAHc_JHrisgSMJ46quz86Vjnlkl17"
                  onChange={() => {
                    console.log("Captcha resolved")
                    setRecaptchaVerified(true);
                  }}
                />
              </div>
              <Spacer height="21px" />
              <Button
                onClick={() => {
                  handleSignup();
                  // if (accountType === "Business") {
                  //   handleSignup();
                  // } else if (accountType === "Individual") {
                  //   navigate("/individual-payment");
                  // }
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
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/sign-in")}
                  style={{ fontWeight: "bold", cursor: "pointer" }}
                >
                  Login
                </span>
              </P>
              <Spacer height="21px" />
            </div>
          </Scrool>
        </TextContainer>
      </Wrapper>
    </>
  );
}
