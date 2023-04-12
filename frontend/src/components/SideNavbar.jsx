import styled from "styled-components";
import ProfilePic from "../images/profilepic.svg";
import Edit from "../images/edit.svg";
import { P } from "./Typography";
import { Spacer } from "./Spacer";
import Subscribtion from "../images/subscribtion.svg";
import Notification from "../images/notification.svg";
import ChangePassword from "../images/changepassword.svg";
import LogoutPic from "../images/logout.svg";
import ActiveEdit from "../images/activeedit.svg";
import ActveSub from "../images/activesub.svg";
import ActiveNoti from "../images/activenot.svg";
import ActivePass from "../images/activepass.svg";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Menu from "../images/menu.png";
import { useState } from "react";


const Wrapper = styled.div`
  //   width: 242px;
  background: #000000;
  height: 100vh;
  @media (max-width: 768px) {
    height: 100%;
    
  }
`;
const UL = styled.div`
  @media(max-width:768px){
    display: ${(props)=>props.display?props.display:"none"};
  }
`;
const LI = styled.div`
  margin-bottom: 20px;
`;
const NavContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 45px 0px;
  @media(max-width:768px){
  flex-direction: row;
 padding:10px 20px


  }
`;
const ProfileWrape = styled.div`
  text-align: center;
  @media(max-width:768px){
    text-align:left;
  }
`;
const A = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;

  font-style: normal;
  font-weight: 400;
  color: ${(props) => (props.color ? props.color : "white")};
  margin-bottom: 0px;
  margin-left: 7px;
  :hover {
    color: #caca0f;
  }
`;
const Logout = styled.div`
  text-align: center;
`;
export default function SideNavbar() {
  const navigate = useNavigate();
  const [active,setActive]=useState(false)
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <>
      <Wrapper>
        <NavContainer>
          <div>
            <ProfileWrape onClick={()=>{setActive(!active)}}>
              <img
                width={isResponsive && "26px"}
                alt="profile"
                src={ProfilePic}
              />
            </ProfileWrape>
            {
              !isResponsive &&
            <Spacer height="48px" />
            }
            {
              (isResponsive && active===true )&&
              <Spacer/>
            }
            <div className="d-flex justify-content-center">
              <UL display={active?"block":"none"}>
                <LI>
                  <img
                    width={"18px"}
                    height={"18px"}
                    alt="edit"
                    src={
                      window.location.pathname === "/profile/edit-profile"
                        ? ActiveEdit
                        : Edit
                    }
                  />

                  <A
                    color={
                      window.location.pathname === "/profile/edit-profile"
                        ? "#CACA0F"
                        : "white"
                    }
                    onClick={() => {
                      navigate("/profile/edit-profile");
                    }}
                  >
                    Edit Profile
                  </A>
                </LI>
                <LI>
                  <img
                    width={"22px"}
                    height={"16px"}
                    alt="subscribe"
                    src={
                      window.location.pathname === "/profile/subscribtion"
                        ? ActveSub
                        : Subscribtion
                    }
                  />

                  <A
                    color={
                      window.location.pathname === "/profile/subscribtion"
                        ? "#CACA0F"
                        : "white"
                    }
                    onClick={() => {
                      navigate("/profile/subscribtion");
                    }}
                  >
                    Subscription
                  </A>
                </LI>
                <LI>
                  <img
                    width={"20px"}
                    height={"20px"}
                    alt="notifiation"
                    src={
                      window.location.pathname === "/profile/notification"
                        ? ActiveNoti
                        : Notification
                    }
                  />

                  <A
                    color={
                      window.location.pathname === "/profile/notification"
                        ? "#CACA0F"
                        : "white"
                    }
                    onClick={() => {
                      navigate("/profile/notification");
                    }}
                  >
                    Notification Setting
                  </A>
                </LI>
                <LI>
                  <img
                    width={"22px"}
                    height={"12px"}
                    alt="key"
                    src={
                      window.location.pathname === "/profile/reset"
                        ? ActivePass
                        : ChangePassword
                    }
                  />

                  <A
                    color={
                      window.location.pathname === "/profile/reset"
                        ? "#CACA0F"
                        : "white"
                    }
                    onClick={() => {
                      navigate("/profile/reset");
                    }}
                  >
                    Change Password
                  </A>
                </LI>
              </UL>
            </div>
          </div>
          
       
            <Logout>
              <img alt="logout" src={LogoutPic} />

              <A>Logout</A>
            </Logout>
        
        </NavContainer>
      </Wrapper>
     
    </>
  );
}
