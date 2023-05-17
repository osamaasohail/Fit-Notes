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
export default function IndividualLogin() {
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
  // const count = useSelector((state) => state.singup)
  // const count = useSelector((state) => state.singin)
  const count = useSelector((state) => state)
  // dispatch(getUser())
  
  const handleSignup = async () => {
    if(!accountType) {
      toast.error("Please select account type")
      return;
    } else if(!businessName) {
      toast.error("Please enter business name")
      return;
    } else if(!businessEmail) {
      toast.error("Please enter business email")
      return;
    } else if(!password) {
      toast.error("Please enter password")
      return;
    } else if(!terms) {
      toast.error("Please accept terms and conditions")
      return;
    }
    const data = {
      accountType: accountType,
      name: businessName,
      email: businessEmail,
      password: password,
    };
    dispatch(postSignUp(data)).then((res) => {
      if(res.payload.status === 201){
        setSignUp(false);
        return toast.success("Account created successfully")
      }
    });
  };
  const handleLogin = () => {
    if(!loginEmail) {
      toast.error("Please enter email");
      return;
    } else if(!loginPassword) {
      toast.error("Please enter password")
      return;
    }
    const data = {
      email: loginEmail,
      password: loginPassword,
    };
    dispatch(signin(data)).then((res) => {
      if(res.payload.status === 201){
        if(res.payload.data.user.accountType === 1){
          if(res.payload.data.user.isProfileCompleted === false){
            navigate("/individual-payment")
          } else {
            navigate("/profile/edit-profile")
          }
        } else if(res.payload.data.user.accountType === 2){
          if(res.payload.data.user.isProfileCompleted === false){
            navigate("/payment")
          } else {
            navigate("/profile/edit-profile")
          }
        }
      }
    });
  };

  return (
    <>
      <Wrapper>
      
          <TextContainer>
            <div>
              <H1 color="#161616" weight="500" fontSize="40px">
                Login
              </H1>
              <Spacer height="70px" />
              <P color="#161616" fontSize="14px">
                Email<span style={{ color: "red" }}>*</span>
              </P>
              <Input
                onChange={(e) => {
                  setLoginEmail(e.target.value);
                }}
                type="email"
              />
              <Spacer height="21px" />

              <P color="#161616" fontSize="14px">
                Password<span style={{ color: "red" }}>*</span>
              </P>
              <Input
                onChange={(e) => {
                  setLoginPassword(e.target.value);
                }}
                type="password"
              />
              <Spacer height="21px" />

              {/* <Row className="align-items-center">
                <Col style={{ paddingRight: "0px" }} sm={1} xs={1}>
                  <Input
                    onChange={() => {
                      setLoginTerms(!loginTerms);
                    }}
                    type="checkbox"
                  />
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
              </Row> */}
              <Spacer height="21px" />

              <Button
                onClick={() => {
                  // navigate("/");
                  handleLogin();
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
                Don't have account?{" "}
                <span
                  onClick={() => {
                   navigate("/sign-up");
                  }}
                  style={{ fontWeight: "bold", cursor: "pointer" }}
                >
                  Signup
                </span>
              </P>
            </div>
          </TextContainer>
       
      </Wrapper>
    </>
  );
}
