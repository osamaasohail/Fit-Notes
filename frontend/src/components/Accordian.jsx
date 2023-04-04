import styled from "styled-components";
import { H1, P } from "./Typography";
import { Container } from "react-bootstrap";
import { Spacer } from "./Spacer";
import DropArrow from "../images/dropdown.svg";
import { useState } from "react";
const Wrapper = styled.div`
  padding-top: 40px;
  background: black;
`;
const Accordion = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
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
    para: "We accept Visa and Mastercard payments through Stripe. Direct Debits are available to New Zealand customers.",
  },
  {
    id: 2,
    head: "When will I be billed?",
    para: "We will bill you at the end of each month for that month's usage.",
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
];

function Accordian() {
  const [accordianOpen, setAccordianOpen] = useState(false);
  const [accordianId, setAccordianId] = useState(1);
  return (
    <Wrapper>
      <H1 style={{ textAlign: "center" }} fontSize="30px" color="#CACA0F">
        Frequently Asked Questions
      </H1>
      <Spacer height="39px" />
      <P fontSize="20px" style={{ textAlign: "center" }}>
        Please reach us at{" "}
        <span style={{ color: "#CACA0F" }}>info@hospitalityguardian.co </span>{" "}
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
                <H1 fontSize="20px">{item.head}</H1>
                <img src={DropArrow} />
              </Accordion>
              <Spacer height="12px" />
              {accordianOpen && accordianId === item.id ? (
                <AccordionBody>
                  <P style={{ opacity: "0.6" }} fontSize="16px" weight="400">
                    {item.para}
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
