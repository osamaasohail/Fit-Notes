import styled from "styled-components";
import { Flex, Margin } from "./Style";
import { H1, P } from "./Typography";
import { Spacer } from "./Spacer";
import Profile from "../images/profile.svg";

const Wrapper = styled.div`
  // background: black;
  //   height:100px
`;
const UL = styled.ul`
  list-style: none;
  display: flex;
  padding: 0px;
  margin: 0;
`;
const LI = styled.li`
  color: white;
  cursor: pointer;
`;
const WrapeNavBar = styled.div`
  background: black;
  padding: 29px 0 29px 0px;
`;
export default function Navbar() {
  return (
    <>
      <Wrapper>
        <Spacer height="27px" />
        <Margin>
          <Flex>
            <H1 fontSize="20px" weight="700">
              The Hospitality Guardian
            </H1>
            <H1 fontSize="20px" weight="700">
              info@hospitalityguardian.co.nz
            </H1>
          </Flex>
        </Margin>
        <Spacer height="35px" />
        <WrapeNavBar>
          <Margin>
            <Flex alignItems="center">
              {/* <div style={{width:"100%"}}> */}
              <UL>
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
              <Flex alignItems="center">
                <img src={Profile} />
                <P style={{ marginLeft: "10px" }}>Profile</P>
              </Flex>
            </Flex>
          </Margin>
        </WrapeNavBar>
      </Wrapper>
      <Spacer height={"48px"} />
    </>
  );
}
