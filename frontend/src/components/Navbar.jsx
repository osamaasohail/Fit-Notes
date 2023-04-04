import styled from "styled-components";
import { Flex, Margin } from "./Style";
import { H1, P } from "./Typography";
import { Spacer } from "./Spacer";
import Profile from "../images/profile.svg";
import { useMediaQuery } from "react-responsive";
import Menu from "../images/menu.png";
import { useState } from "react";

const Wrapper = styled.div`
  // background: black;
  //   height:100px
`;
const UL = styled.ul`
  list-style: none;
  display: flex;
  padding: 0px;
  margin: 0;
  @media (max-width: 768px) {
    display: ${(props) => (props.display ? props.display : "none")};
    text-align: center;
    margin-top: 20px;
    width: 100%;
    padding: 20px 0px;
  }
`;
const LI = styled.li`
  color: white;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
const WrapeNavBar = styled.div`
  background: ${(props) => (props.bg ? props.bg : "black")};
  padding: ${(props) => (props.padding ? props.padding : "29px 0 29px 0px")};
  // display: ${(props) => (props.display ? props.display : "block")};
  height: ${(props) => (props.height ? props.height : "")};
`;
export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <>
      <Wrapper>
        <Spacer height="27px" />
        <Margin>
          <Flex>
            <H1 fontSize="20px" weight="700">
              The Hospitality Guardian
            </H1>
            {isResponsive ? (
              <img
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
                width={"30px"}
                src={Menu}
              />
            ) : (
              <H1 fontSize="20px" weight="700">
                info@hospitalityguardian.co.nz
              </H1>
            )}
          </Flex>
        </Margin>
        <Spacer height={isResponsive ? "0px" : "35px"} />

        <WrapeNavBar
          padding={isResponsive && "0px"}
          bg={isResponsive && openMenu ? "" : ""}
          display={isResponsive ? "none" : "block"}
          // height={isResponsive && openMenu ? "100vh" : ""}
        >
          <Margin>
            <Flex alignItems="center">
              {/* <div style={{width:"100%"}}> */}
              <UL display={isResponsive && openMenu ? "block" : "none"}>
                <LI>
                  <a
                    style={{
                      color: "white",
                      marginRight: "29px",
                      fontSize: "16px",
                    }}
                  >
                    Home
                  </a>
                </LI>
                <LI>
                  <a
                    style={{
                      color: "white",
                      marginRight: "29px",
                      fontSize: "16px",
                    }}
                  >
                    Pricing
                  </a>
                </LI>
                <LI>
                  <a
                    style={{
                      color: "white",
                      marginRight: "29px",
                      fontSize: "16px",
                    }}
                  >
                    Sign Up
                  </a>
                </LI>
                <LI>
                  <a
                    style={{
                      color: "white",
                      marginRight: "29px",
                      fontSize: "16px",
                    }}
                  >
                    Privacy Policy
                  </a>
                </LI>
                <LI>
                  <a
                    style={{
                      color: "white",
                      marginRight: "29px",
                      fontSize: "16px",
                    }}
                  >
                    About Us
                  </a>
                </LI>
              </UL>
              {/* </div> */}
              {isResponsive ? (
                ""
              ) : (
                <Flex alignItems="center">
                  <img src={Profile} />
                  <P style={{ marginLeft: "10px" }}>Profile</P>
                </Flex>
              )}
            </Flex>
          </Margin>
        </WrapeNavBar>
      </Wrapper>

      <Spacer height={"48px"} />
    </>
  );
}
