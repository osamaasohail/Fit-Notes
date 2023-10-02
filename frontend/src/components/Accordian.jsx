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
    para: "The date of signing up for a business or individual account becomes the annual billing date for subsequent years.",
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
    para: `The initial year of adding a Business Liquor license is free, but subsequent costs are determined based on the number of Duty Managers associated with the business. We offer a separate category called "Single Certificate" for individual licensees who can create an Individual account on our platform.\n
    For small to medium hospitality businesses that require management of multiple duty managers' certificates, we provide the option of 2 to 4 certificates. This service costs $5.00 NZD per certificate annually, plus GST and applicable fees.\n
    Medium to large hospitality businesses, with a need for multiple duty managers each day, can opt for our 5+ certificate option. This service is priced at $5.00 NZD per certificate annually, plus GST and applicable fees.`,
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
      <H1
        style={{ textAlign: "center", fontWeight: "700" }}
        fontSize="30px"
        color="rgba(177, 149, 56, 1)"
      >
        Frequently Asked Questions
      </H1>
      <Spacer height="39px" />
      <P
        fontSize="20px"
        style={
          isResponsive
            ? { textAlign: "center", padding: "0 15px" }
            : { textAlign: "center", padding: "0" }
        }
      >
        Please reach us at{" "}
        <span style={{ color: "rgba(177, 149, 56, 1)" }}>
          info@hospitalityguardian.co.nz{" "}
        </span>{" "}
        if you cannot find an answer to your question.
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
                <H1 style={{ fontWeight: "600" }} fontSize="20px">
                  {item.head}
                </H1>
                <img src={DropArrow} />
              </Accordion>
              <Spacer height="12px" />
              {accordianOpen && accordianId === item.id ? (
                <AccordionBody>
                  <P
                    dangerouslySetInnerHTML={{
                      __html: item.para.replace(/\n/g, "<br>"),
                    }}
                    style={{ opacity: "0.6" }}
                    fontSize="16px"
                    weight="400"
                  ></P>
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
