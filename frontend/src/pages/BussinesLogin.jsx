import styled from "styled-components";
import LoginInfo from "../components/LoginInfo";
import { Col, Row } from "react-bootstrap";
import Blogin from "../components/Blogin";
import { Wrapper } from "../components/Style";

const WrapperIn = styled.div`
  height: 100vh;
  padding: 40px;
  @media(max-width:768px){
    height:100%;
    padding: 30px;
  }
`;
export default function BussinessLogin() {
  
  return (
    <>
    <Wrapper>
      <WrapperIn>
        <Row>
          <Col style={{padding:"0px"}} md={6}>
            <LoginInfo />
          </Col>
          <Col style={{padding:"0px"}} md={6}>
            <Blogin/>
          </Col>
        </Row>
      </WrapperIn>
      </Wrapper>
    </>
  );
}
