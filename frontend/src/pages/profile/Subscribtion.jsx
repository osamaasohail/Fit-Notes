import { Box } from "../../components/Box";
import SideNavbar from "../../components/SideNavbar";
import { Col, Row } from "react-bootstrap";
import { H1, P } from "../../components/Typography";
import { Spacer } from "../../components/Spacer";
import Edit from "../../images/profiledit.svg";
import { Button } from "../../components/Button";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";


const Scrool = styled.div`
  height: 81vh;
  overflow-y: auto;
  padding: 0px 20px 10px 20px;
  @media(max-width:768px){
    height:auto;
    padding:10px
  }
`;
export default function Subscribtion() {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <>
      <Row style={{ margin: "0px" }}>
        <Col style={{ padding: "0px" }} lg={2} md={3}>
          <SideNavbar />
        </Col>
        <Col
         className={isResponsive?"d-flex align-items-center justify-content-center px-3 vh-100":"d-flex align-items-center justify-content-center"}
          
          style={{ padding: "0px", flexDirection: "column" }}
          lg={10}
          md={9}
        >
       
            {/* <SideNavbar /> */}
            <Box

              className={isResponsive?"text-center mx-3":"text-center"}
              width={isResponsive?"100%":"55vw"}
              padding={isResponsive?"41px 30px 20px 30px":"41px 20px 52px 64px"}
            >
              <H1 fontSize="24px" weight="500" color="black">
                Your Plan
              </H1>
              <hr style={isResponsive?{margin:"10px 0px"}:{ margin: "20px 200px" }} />
              <P color="black">Premium Plan</P>
              <Spacer height="16px" />
              <P fontSize="14px" weight="400" color="black">
                $50/Month
              </P>

              <Spacer height="16px" />
              <P weight="400" color="black">
                Your plan will be renewed at the{" "}
                <span style={{ fontWeight: "bold" }}>4/4/2023</span> and you
                will be charge <span style={{ fontWeight: "bold" }}>$50</span>{" "}
              </P>
            </Box>

            <Spacer height="48px" />
         
            {/* <Spacer height="60px" /> */}
            <P weight="400" className="text-center" color="black">
              If you have any questions or need help choosing a plan, please{" "}
              <br /> contact our customer support team at <br />{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                support@liquormanagement.com.
              </span>
            </P>
       
        </Col>
      </Row>
    </>
  );
}
