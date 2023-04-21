/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";
import { Flex, Margin } from "./Style";
import { H1, P } from "./Typography";
import { Spacer } from "./Spacer";
import Profile from "../images/profile.svg";
import { useMediaQuery } from "react-responsive";
import Menu from "../images/menu.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


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
  const navigate = useNavigate();

  const [active,setActive]=useState("home")
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <>
      <Wrapper>
        <Spacer height="27px" />
        <Margin>
          <Flex>
            <H1 style={{cursor:"pointer"}} onClick={()=>{navigate("/")}} fontSize="20px" weight="700">
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
                <LI onClick={()=>{setActive("home");setOpenMenu(false)}}>
                  <a
                   onClick={()=>{navigate("/")}}
                    style={window.location.pathname==="/"?{
                      
                      color: "#caca0f",
                      marginRight: "29px",
                      fontSize: "16px",
                      textDecoration:"none",
                      
                      
                    }:{
                      color: "white",
                      marginRight: "29px",
                      fontSize: "16px",
                      textDecoration:"none"
                    }}
                  >
                    Home
                  </a>
                </LI>
                <LI onClick={()=>{setActive("pricing");setOpenMenu(false)}}>
                  <a 
                  onClick={()=>{navigate("/pricing")}}
                    style={window.location.pathname==="/pricing"?{
                      color: "#caca0f",
                      marginRight: "29px",
                      fontSize: "16px",
                      textDecoration:"none"

                    }:{
                      color: "white",
                      marginRight: "29px",
                      fontSize: "16px",
                      textDecoration:"none"

                    }}
                  >
                    Pricing
                  </a>
                </LI>
                <LI onClick={()=>{setOpenMenu(false)}}>
                  <a
                    onClick={()=>{navigate("/sign-up")}}
                    style={window.location.pathname==="/sign-up"?{
                      color: "#caca0f",
                      marginRight: "29px",
                      fontSize: "16px",
                      textDecoration:"none"

                    }:{
                      color: "white",
                      marginRight: "29px",
                      fontSize: "16px",
                      textDecoration:"none"

                    }}
                  >
                    Sign Up
                  </a>
                </LI>
                <LI onClick={()=>{setActive("privacy");setOpenMenu(false)}}>
                  <a 
                   onClick={()=>{navigate("/privacy-policy")}}
                    style={window.location.pathname==="/privacy-policy"?{
                      color: "#caca0f",
                      marginRight: "29px",
                      fontSize: "16px",
                      textDecoration:"none"
                    }:
                    {
                      color: "white",
                      marginRight: "29px",
                      fontSize: "16px",
                      textDecoration:"none"
                    }}
                  >
                    Privacy Policy
                  </a>
                </LI>
                <LI onClick={()=>{setActive("about");setOpenMenu(false)}}>
                  <a 
                   onClick={()=>{navigate("/about-us")}}
                  
                  
                    style={ window.location.pathname==="/about-us"?{
                      color: "#caca0f",
                      marginRight: "29px",
                      fontSize: "16px",
                      textDecoration:"none"

                    }:{
                      color: "white",
                      marginRight: "29px",
                      fontSize: "16px",
                      textDecoration:"none"

                    }}
                  >
                    About Us
                  </a>
                </LI>
                {
                  isResponsive &&
                  <Flex style={{cursor:"pointer"}} JustifyContent="center" alignItems="flex-start">
                  <img className="mx-2" src={Profile} />
                
                  <LI onClick={()=>{setActive("about");setOpenMenu(false)}}>
                  <a 
                   onClick={()=>{navigate("/profile/edit-profile")}}
                  
                  
                    style={ window.location.pathname==="/edit-profile"?{
                      color: "#caca0f",
                      marginRight: "29px",
                      fontSize: "16px",
                      textDecoration:"none"

                    }:{
                      color: "white",
                      marginRight: "29px",
                      fontSize: "16px",
                      textDecoration:"none"

                    }}
                  >
                    Profile
                  </a>
                </LI>
                {/* <P onClick={()=>{navigate("/profile/edit-profile")}} style={{ marginLeft: "10px" }}>Profile</P> */}
                </Flex>

                }
              </UL>
              {/* </div> */}
              {isResponsive ? (
                ""
              ) : (
                <Flex style={{cursor:"pointer"}} alignItems="center">
                  <img src={Profile} />
                  <P onClick={()=>{navigate("/profile/edit-profile")}} style={{ marginLeft: "10px" }}>Profile</P>
                </Flex>
              )}
            </Flex>
          </Margin>
        </WrapeNavBar>
      </Wrapper>

      <Spacer height={isResponsive?"25px":"48px"} />
    </>
  );
}
