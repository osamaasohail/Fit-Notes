import styled from "styled-components";
import { H1, P } from "./Typography";
import { Container } from "react-bootstrap";
import { Spacer } from "./Spacer";
import DropArrow from "../images/dropdown.svg";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Wrapper = styled.div`
  padding-top: 40px;
  background: black;
`;
const Accordion = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
`;
const Hr = styled.hr`
  border: 0.5px solid #ffffff;
`;
const AccordionTitle = styled.div``;
const AccordionBody = styled.div``;

const data = [
  {
    id: 1,
    head: "What types of payment do we accept?",
    para: "We accept Visa and Mastercard payments through Stripe.",
  },
  {
    id: 2,
    head: "When will I be billed?",
    para: "At the end of your first year or first expiry date, whichever comes first. Then annually on this date of renewal.",
  },
  {
    id: 3,
    head: "Am I committed to a plan?",
    para: "No, our plans are no-strings and are pay-as-you-go. You can choose to cancel any time in your account settings.",
  },
  {
    id: 4,
    head: "What happens if I cancel my account?",
    para: "If you decide to cancel your membership with us, no hard feelings, any expiry dates during the rest of the year you will still be notified of, but your billing payments will be canceled. Your account data will be deleted in accordance with our privacy policy.",
  },
  {
    id: 5,
    head: "What are the differences between the plans?",
    para: `liquor licenses are free to add but the  cost is calculated on how many mangers the business will add. Our single \n certificate category is for solo licensees or certifications business owners and is a free service. \n
    Our 2 to 4 certificates option is for most small to medium hospitality businesses with management of multiple duty \n managers certificates. This service is $7.00 NZD monthly plus GST and applicable fees. \n
    Our 5+ certificate option is designed for medium to large hospitality businesses, accounting for multiple duty \n managers for each day. This service is $10.00 monthly plus GST and applicable fees.`,
  },
  {
    id: 6,
    head: "What is Fixed price for the individuals?",
    para: " Fixed price for individuals is $5.00 plus GST and applicable fees (if any).",
  },
];

function Accordian() {
  const [accordianOpen, setAccordianOpen] = useState(false);
  const [accordianId, setAccordianId] = useState(1);
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <Wrapper>
      <H1 style={{ textAlign: "center",fontWeight:"700" }} fontSize="30px" color="rgba(177, 149, 56, 1)">
        Frequently Asked Questions
      </H1>
      <Spacer height="39px" />
      <P fontSize="20px" style={isResponsive?{ textAlign: "center",padding:"0 15px" }:{textAlign: "center",padding:"0"}}>
        Please reach us at{" "}
        <span style={{ color: "rgba(177, 149, 56, 1)" }}>info@hospitalityguardian.co </span>{" "}
        .nz if you cannot find an answer to your question.
      </P>
      <Spacer height="81px" />
      <Container>
        {data.map((item, index) => {
          return (
            <div>
              <Accordion
                onClick={() => {
                  setAccordianOpen(true);
                  setAccordianId(item.id);
                }}
              >
                <H1 style={{fontWeight:"600"}} fontSize="20px">{item.head}</H1>
                <img src={DropArrow} />
              </Accordion>
              <Spacer height="12px" />
              {accordianOpen && accordianId === item.id ? (
                <AccordionBody>
                  <P dangerouslySetInnerHTML={{ __html: item.para.replace(/\n/g, "<br>") }} style={{ opacity: "0.6" }} fontSize="16px" weight="400">
                    
                  </P>
                </AccordionBody>
              ) : (
                ""
              )}

              <Hr />
              <Spacer height="20px" />
            </div>
          );
        })}
      </Container>
      <Spacer height="108px" />
    </Wrapper>
  );
}

export default Accordian;
