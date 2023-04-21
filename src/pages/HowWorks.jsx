import Navbar from "../components/Navbar";
import { Margin, Wrapper } from "../components/Style";
import { Footer } from "../components/Footer";
import Work1 from "../images/work1.svg";
import Work2 from "../images/work2.svg";
import Work3 from "../images/work3.svg";
import Work4 from "../images/work4.svg";

import { Col, Row } from "react-bootstrap";
import { H1, P } from "../components/Typography";
import { Spacer } from "../components/Spacer";
import { Button } from "../components/Button";
import { useMediaQuery } from "react-responsive";

export default function HowWorks() {
  const isResponsive = useMediaQuery({
    query: "(max-width: 990px)",
  });
  return (
    <>
      <Wrapper>
        <Navbar />
        <Margin>
          <Row className={isResponsive ? "flex-column-reverse" : ""}>
            <Col
              className={
                isResponsive
                  ? "d-flex flex-column align-items-start justify-content-center"
                  : "d-flex flex-column align-items-start justify-content-center px-5"
              }
              lg={6}
            >
              <H1
                style={isResponsive ? { marginTop: "30px" } : { marginTop: "" }}
                fontSize="36px"
                color="#CACA0F"
                weight="700"
              >
                How it works?
              </H1>
              <Spacer height={isResponsive ? "10px" : "30px"} />
              <P
                style={{ textAlign: "justify" }}
                fontSize="24px"
                weight="400"
                lHeight={isResponsive ? "25px" : "36px"}
              >
                Hospitality Guardian helps your business manage Duty Manager
                certificate expiration and Liquor licensing expiration by
                sending you reminders when certain documents are coming up for
                renewal. 60 days, 50 days, 40 days, and 30 days. Our reminders
                will turn off once you update with new information or remove the
                date you are being prompted about.
              </P>
              <Spacer height="30px" />
              <Button style={{fontWeight:"700"}}>Get Started</Button>
              {isResponsive && <Spacer height="30px" />}
            </Col>

            <Col lg={6}>
              <div style={{ position: "relative" }}>
                <img width={"100%"} height={"100%"} src={Work1} />
              </div>
            </Col>
          </Row>
          {isResponsive ? <Spacer height="50px" /> : <Spacer height="200px" />}

          <Row>
            <Col lg={6}>
              <img width={"100%"} height={"100%"} src={Work2} />
            </Col>
            <Col
              className={
                isResponsive
                  ? "d-flex flex-column align-items-start justify-content-center"
                  : "d-flex flex-column align-items-start justify-content-center px-5"
              }
              lg={6}
            >
              <H1
                style={isResponsive ? { marginTop: "30px" } : { marginTop: "" }}
                fontSize="36px"
                color="#CACA0F"
                weight="700"
              >
                What happens after I renew?
              </H1>
              <Spacer height={isResponsive ? "10px" : "30px"} />
              <P
                fontSize="24px"
                weight="400"
                lHeight={isResponsive ? "25px" : "36px"}
              >
                Once you have renewed the relevant documents, our system will
                prompt you each week for up to a month in order to remind you to
                update your new information. Easy as, leaving you more time to
                focus on the day-to-day of running your business without the
                hassle of remembering expiry dates.
              </P>
              <Spacer height="30px" />
              <Button style={{fontWeight:"700"}}>Registartion</Button>
            </Col>
          </Row>
          {isResponsive ? <Spacer height="50px" /> : <Spacer height="200px" />}
          <Row className={isResponsive ? "flex-column-reverse" : ""}>
            <Col
              className={
                isResponsive
                  ? "d-flex flex-column align-items-start justify-content-center"
                  : "d-flex flex-column align-items-start justify-content-center px-5"
              }
              lg={6}
            >
              <H1
                style={isResponsive ? { marginTop: "30px" } : { marginTop: "" }}
                fontSize="36px"
                color="#CACA0F"
                weight="700"
              >
                What happens now?
              </H1>
              <Spacer height={isResponsive ? "10px" : "30px"} />
              <P
                fontSize="24px"
                weight="400"
                lHeight={isResponsive ? "25px" : "36px"}
              >
                It's set and forget time, leaving you with the peace of mind
                that Hospitality Guardian has got your back. Our systems will
                contact your business in when your next renewal is coming up.
              </P>
              <Spacer height="30px" />
              <Button style={{fontWeight:"700"}}>Get Started</Button>
              {isResponsive && <Spacer height="30px" />}
            </Col>
            <Col lg={6}>
              <img width={"100%"} height={"100%"} src={Work3} />
            </Col>
          </Row>
          {isResponsive ? <Spacer height="50px" /> : <Spacer height="200px" />}
          <Row>
            <Col lg={6}>
              <img width={"100%"} height={"100%"} src={Work4} />
            </Col>
            <Col
              className={
                isResponsive
                  ? "d-flex flex-column align-items-start justify-content-center"
                  : "d-flex flex-column align-items-start justify-content-center px-5"
              }
              lg={6}
            >
              <H1
                style={isResponsive ? { marginTop: "30px" } : { marginTop: "" }}
                fontSize="36px"
                color="#CACA0F"
                weight="700"
              >
                What if i decide this service isn't for my business?
              </H1>
              <Spacer height={isResponsive ? "10px" : "30px"} />
              <P
                fontSize="24px"
                weight="400"
                lHeight={isResponsive ? "25px" : "36px"}
              >
                No hard feelings, we understand. As a way of saying thank you
                for giving us a shot, your final amount owing is on us. Click
                the button below to be sent to our cancellation page.
              </P>
              <Spacer height="30px" />
              <Button style={{fontWeight:"700"}}>Cancel Account</Button>
            </Col>
          </Row>
        </Margin>

        <Spacer height={isResponsive ? "60px" : "200px"} />

        <Footer background={"#CACA0F"} color={"black"} />
      </Wrapper>
    </>
  );
}
