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
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { changePassword, resetPassword } from "../../service/redux/middleware/password";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';

const Scrool = styled.div`
  height: 81vh;
  overflow-y: auto;
  padding: 0px 20px 10px 20px;
`;
export default function ConfrimPassword() {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [onSuccess, setOnSuccess] = useState(false);

  const [userData] = useSelector((state) => {
    return [state.signin.signInData.data.user];
  });
  
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const tokenParam = queryParams.get("token");
    if (!tokenParam) {
      navigate("/");
    } else {
      setToken(tokenParam);
      dispatch(resetPassword({ token: tokenParam }))
        .then((res, err) => {
          console.log(res, err)
          if(res?.payload?.status === 200) {
            // setOnSuccess(true);
          } else {
            toast.error('Invalid or expired reset token')
            setTimeout(() => {
              navigate('/profile/reset')
            }, 4000);
          }
          
        })
    }
  }, []);

  const onResetPassword = () => {

    if (password !== confirmPassword) {
      console.log("Password and confirm password does not match")
      toast.error("Password and confirm password does not match");
    } else {
      const data = {
        email: userData?.email,
        oldPassword: oldPassword,
        newPassword: password
      }
      dispatch(changePassword(data)).then((res) => {
        if(res?.payload?.status === 200) {
          toast.success("Password changed successfully");
          setOnSuccess(true);
        }
      });
    }
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
              Old Password
            </H1>
          </div>
          <Spacer height="32px" />

          <Box
            //   className="text-center"
            width={isResponsive ? "90%" : "55vw"}
            padding="3vw 13vw 3vw 13vw"
          >
            <P color="black" fontSize="14px">
              Old Password <span style={{ color: "red" }}>*</span>
            </P>
            <div style={{ position: "relative" }}>
              <Input
                style={{
                  fontSize: "14px",
                  width: "100%",
                }}
                type="password"
                placeholder="***********"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <div style={{ position: "absolute", top: "5%", right: "2%" }}>
                <img src={Check} />
              </div>
              <Spacer height="16px" />
            </div>
            <P color="black" fontSize="14px">
              New Password <span style={{ color: "red" }}>*</span>
            </P>
            <div style={{ position: "relative" }}>
              <Input
                style={{
                  fontSize: "14px",
                  width: "100%",
                }}
                type="password"
                placeholder="***********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div style={{ position: "absolute", top: "5%", right: "2%" }}>
                <img src={Check} />
              </div>
              <Spacer height="16px" />
            </div>
            <P color="black" fontSize="14px">
              Re-Enter new password <span style={{ color: "red" }}>*</span>
            </P>
            <div style={{ position: "relative" }}>
              <Input
                style={{
                  fontSize: "14px",
                  width: "100%",
                }}
                type="password"
                placeholder="***********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div style={{ position: "absolute", top: "5%", right: "2%" }}>
                <img src={Check} />
              </div>
              <Spacer height="16px" />
            </div>
            <Button
              style={{
                width: "100%",
                padding: "9px 14px",
                background: "black",
                color: "white",
                fontSize: "14px",
                borderRadius: "3px",
              }}
              onClick={() => {
                onResetPassword();
              }}
            >
              Change password
            </Button>
            {onSuccess && (
              <>
                <Spacer height="16px" />
                <P
                  className="text-center"
                  fontSize="14px"
                  weight="400"
                  color="#11AF22"
                >
                  You successfully changed your password
                </P>
              </>
            )}
          </Box>
          {/* <Spacer height="60px" /> */}
          {/* </Scrool> */}
        </Col>
      </Row>
    </>
  );
}
