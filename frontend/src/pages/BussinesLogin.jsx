import styled from "styled-components";
import LoginInfo from "../components/LoginInfo";
import { Col, Row } from "react-bootstrap";
import Blogin from "../components/Blogin";
import { Wrapper } from "../components/Style";
import { H1 } from "../components/Typography";
import { Spacer } from "../components/Spacer";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WrapperIn = styled.div`
  height: 100vh;
  padding: 20px 40px;
  position: relative;
  @media (max-width: 768px) {
    height: 100%;
    padding: 30px;
  }
`;
const Logo = styled(H1)`
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  :hover {
    color: #caca0f;
  }
`;
export default function BussinessLogin() {
  const navigate = useNavigate();
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <>
    <ToastContainer />
      <Wrapper>
        <WrapperIn>
          <Row>
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
                <H1 fontSize="20px" weight="700" style={{ textAlign: "right" }}>
                  info@hospitalityguardian.co.nz
                </H1>
              </Col>
            )}
          </Row>
          <Spacer height="18px" />
          <Row>
            <Col style={{ padding: "0px" }} md={6}>
              <LoginInfo />
            </Col>
            <Col style={{ padding: "0px" }} md={6}>
              <Blogin />
            </Col>
          </Row>
        </WrapperIn>
      </Wrapper>
    </>
  );
}
