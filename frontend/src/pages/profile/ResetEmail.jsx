import { Box } from "../../components/Box";
import SideNavbar from "../../components/SideNavbar";
import { Col, Row } from "react-bootstrap";
import { H1, P } from "../../components/Typography";
import { Spacer } from "../../components/Spacer";
import Edit from "../../images/profiledit.svg";
import { Button } from "../../components/Button";
import styled from "styled-components";
import { Input } from "../../components/Input";
import Check from "../../images/check.svg";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../service/redux/middleware/password";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const Scrool = styled.div`
  height: 81vh;
  overflow-y: auto;
  padding: 0px 20px 10px 20px;
`;
export default function ResetEmail() {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [onSuccess, setOnSuccess] = useState(false);
  const onForgotPassword = () => {
    dispatch(forgotPassword({ email: email })).then((res) => {
      setOnSuccess(true);
    });
  };
  return (
    <>
      <ToastContainer />
      <Row style={{ margin: "0px" }}>
        <Col style={{ padding: "0px" }} lg={2} md={3}>
          <SideNavbar />
        </Col>
        <Col
          className="d-flex align-items-center "
          style={{ padding: "0px", flexDirection: "column" }}
          lg={10}
          md={9}
        >
          {/* <Scrool> */}
          {/* <SideNavbar /> */}

          <Spacer height="90px" />

          <div className="text-center">
            <H1 fontSize="24px" weight="500" color="black">
              Request for Password Reset
            </H1>
          </div>
          <Spacer height="32px" />

          <Box
            //   className="text-center"
            width={isResponsive ? "90%" : "55vw"}
            padding="3vw 13vw 3vw 13vw"
          >
            <P color="black" fontSize="14px">
              Email <span style={{ color: "red" }}>*</span>
            </P>
            <div style={{ position: "relative" }}>
              <Input
                style={{
                  fontSize: "14px",
                  width: "100%",
                }}
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div style={{ position: "absolute", top: "5%", right: "2%" }}>
                <img src={Check} />
              </div>
              <Spacer height="16px" />
              <Button
                style={{
                  width: "100%",
                  padding: "9px 14px",
                  background: "black",
                  color: "white",
                  fontSize: "14px",
                  borderRadius: "3px",
                }}
                onClick={() => onForgotPassword()}
              >
                Reset Request
              </Button>
              <Spacer height="16px" />
              {onSuccess && (
                <P
                  className="text-center"
                  fontSize="14px"
                  weight="400"
                  color="#11AF22"
                >
                  An email is sent with the link to change password
                </P>
              )}
            </div>
          </Box>
          {/* <Spacer height="60px" /> */}
          {/* </Scrool> */}
        </Col>
      </Row>
    </>
  );
}
