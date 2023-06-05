import styled from "styled-components";
import { Footer } from "../components/Footer";
// import Navbar from "../components/Navbar";
import { Margin, Wrapper } from "../components/Style";
import { H1, H2, P } from "../components/Typography";
import { Spacer } from "../components/Spacer";
import { useMediaQuery } from "react-responsive";
import { Flex } from "../components/Style";
import { useNavigate } from "react-router-dom";
import Logo from "../images/logo-without-text.png";
import Para from "../components/Para";

const PrivacyContent = styled.div``;
export default function TermsAndConditions() {
  const navigate = useNavigate();
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <>
      <Wrapper>
        <Margin>
          <Flex>
            <H1
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
              fontSize={isResponsive ? "18px" : "25px"}
              weight="700"
            >
              <img
                src={Logo}
                alt="Logo"
                width="auto"
                height="60px"
                style={{ cursor: "pointer" }}
              />
              <span style={{ marginLeft: "10px" }}>
                The Hospitality Guardian
              </span>
            </H1>

            {isResponsive ? (
              <></>
            ) : (
              <H1 fontSize="20px" weight="700" className="mt-3">
                <a
                  style={{
                    color: "white",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                  href="mailto:info@hospitalityguardian.co.nz"
                >
                  info@hospitalityguardian.co.nz
                </a>
                {/* info@hospitalityguardian.co.nz */}
              </H1>
            )}
          </Flex>
        </Margin>

        <Margin>
          <PrivacyContent
            style={
              isResponsive
                ? {}
                : { paddingLeft: "100px", paddingRight: "100px" }
            }
          >
            <H1
              fontSize="36px"
              color="rgba(177, 149, 56, 1)"
              style={{ marginTop: "40px", textAlign: "center" }}
            >
              Terms and Conditions
            </H1>
            <div>
              <Spacer height={isResponsive ? "10px" : "48px"} />
              <P
                style={
                  isResponsive
                    ? {
                        color: "white",

                        fontSize: "15px",
                      }
                    : {
                        color: "white",

                        fontSize: "24px",
                      }
                }
                weight="400"
              >
                These terms and conditions are the contract between you and
                Hospitality Guardian (“us,” “we,” etc). By visiting or using Our
                Website, you agree to be bound by them.
              </P>
              <Para
                text={
                  "We are Hospitality Guardian, a company registered in New Zealand, number 8649686."
                }
              />
              <Para text={"GST Number: Not registered for GST"} />
              <Para
                text={
                  "You are: Anyone who uses Our Website or buys any service from us."
                }
              />
              <Para
                text={
                  "Under 20 years? Our apologies, but we deal only with people who are legally able to enter a binding contract AND have a DutyManager’s certificate, of which the minimum age to gain such certificate is 20 years old."
                }
              />
              <Para
                text={
                  "Please read this agreement carefully and save it. If you do not  with it, you should leave Our Website immediately."
                }
              />
              <H2 style={{ color: "white", marginTop: "32px" }}>
                These are the agreed terms
              </H2>
              <br />
              <H1 style={{ color: "white", marginTop: "32px" }}>
                1. Definitions
              </H1>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "35%" }}>
                  <Para text={"“Content”"} />
                </div>
                <div style={{ width: "65%" }}>
                  <Para
                    text={
                      "means the textual, visual or aural content that is encountered as part of your experience on Our Website. It may include, among other things: text, images, sounds, videos and animations. It includes Content Posted by you"
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "35%" }}>
                  <Para text={"“Intellectual Property”"} />
                </div>
                <div style={{ width: "65%" }}>
                  <Para
                    text={
                      "means intellectual property owned by us, of every sort, whether or not registered or registrable in anycountry, including intellectual property of all kinds coming into existence after today; and including, among others, patents, trademarks, unregistered marks, designs, copyrights, software, domainnames, discoveries, know-how, creations and inventions, together with all rights which are derived from those rights."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "35%" }}>
                  <Para text={"“Our Website”"} />
                </div>
                <div style={{ width: "65%" }}>
                  <Para
                    text={
                      "means any website or service designed for electronic access by mobile or fixed devices which is owned or operated by us or any member of the Hospitality Guardian group of companies. It includes all of the hardware and software installations that enable our website to function."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "35%" }}>
                  <Para text={"“Post”"} />
                </div>
                <div style={{ width: "65%" }}>
                  <Para
                    text={
                      "means place on or into Our Website any Content or material of any sort by any means."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "35%" }}>
                  <Para text={"“Services””"} />
                </div>
                <div style={{ width: "65%" }}>
                  <Para
                    text={
                      "means all of the services available from Our Website, whether free or charged."
                    }
                  />
                </div>
              </div>
              <br />
              <H1 style={{ color: "white", marginTop: "32px" }}>
                2. Interpretation
              </H1>
              <Para
                text={
                  "In this agreement unless the context otherwise requires:"
                }
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"2.1"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "the headings to the paragraphs and schedules (if any) to this agreement are inserted for convenience only and do not affect the interpretation."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"2.2"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "any agreement by either party not to do or omit to do something includes an obligation not to allow some other person to do or omit to do that same thing."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"2.3"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "tthis agreement is made only in the English language. If there is any conflict in meaning between the English language version of this agreement and any version or translation of this agreement in any other language, the English language version shall prevail."
                    }
                  />
                </div>
              </div>
              <br />
              <H1 style={{ color: "white", marginTop: "32px" }}>
                3. Basis of Contract
              </H1>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"3.1"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "In entering into this agreement, you have not relied on any representation or information from any source except the definition and explanation of the Services given on Our Website."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"3.2"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "Subject to these terms and conditions, we agree to provide to you some or all of the Services described on Our Website at the prices we charge from time to time. "
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"3.3"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "You acknowledge that you understand exactly what is included in the Services and you are satisfied that the Services are suitable and satisfactory for your requirements. "
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"3.4"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "So far as we allow use of our Intellectual Property, we grant a licence to you, limited to the terms set out in this agreement."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"3.2"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "Subject to these terms and conditions, we agree to provide to you some or all of the Services described on Our Website at the prices we charge from time to time. "
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"3.5"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "Our contract with you and licence to you last for one year from the date of account confirmation / payment. Any continuation by us or by you after the expiry of one year is a new contract in the terms then shown on Our Website. Your continued use of our Services after that shall be deemed acceptance by you of the changed Service, system and/or terms."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"3.6"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "The contract between us comes into existence when we receive payment from you for a Service."
                    }
                  />
                </div>
              </div>
              <i>
                <Para text={"OR"} />
              </i>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"3.7"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "The contract between us comes into existence only when we write to you to confirm that we agree to provide to you the Service you want. Your payment does not create a contract. If we decline to provide a Service, we shall immediately return your money to your credit card."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"3.8"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "We may change this agreement and / or the way we provide the Services, at any time. If we do:"
                    }
                  />
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"3.8.1"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={
                          "the change will take effect when we Post it on Our Website."
                        }
                      />
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"3.8.2"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={
                          "we will give you notice of the change. If you do not accept the change, we will refund the money you have paid for the Service to date."
                        }
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"3.8.3"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={
                          "if you make any payment for Services or goods in the future, you will do so under the terms Posted on Our Website at that time."
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <H1 style={{ color: "white", marginTop: "32px" }}>
                4. Your account and personal information
              </H1>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"4.1"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "When you visit Our Website, you accept responsibility for any action done by any person using your name, account or password. You should take all necessary steps to ensure that the password is kept confidential and secure and should inform us immediately if you have any reason to believe that your password has become known to anyone else, or if the password is being, or is likely to be, used in an unauthorised manner."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"4.2"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "You agree that you have provided accurate, up to date, and complete information about yourself and the business you represent. We are not responsible for any error made as a result of such information being inaccurate."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"4.3"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "You agree to notify us of any changes in your information immediately it occurs. If you do not do so, we may terminate your account."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"4.4"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "You acknowledge and agree that all information you share with us for us provide Our services is already publicly available information and may be accessed by anyone if they apply to the appropriate District licensing committees in their area."
                    }
                  />
                </div>
              </div>
              <br />
              <H1 style={{ color: "white", marginTop: "32px" }}>
                5. The price
              </H1>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"5.1"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "The prices payable for Services are clearly set out on Our Website."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"5.2"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "The price charged for any Services may differ from one country to another. You may not be entitled to the lowest price unless you reside in the qualifying country."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"5.3"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "Prices are inclusive of any applicable goods and services tax or other sales tax."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"5.4"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "If, by mistake, we have under-priced a Service, we will not be liable to supply that Service to you at the stated price, provided that we notify you before we provide it to you."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"5.5"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "Any details given by us in relation to exchange rates are approximate only and may vary from time to time."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"5.6"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "You will pay all sums due to us under this agreement by the means specified without any set-off, deduction or counterclaim."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"5.7"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "All monies paid by you to us are non-refundable and cancellation and/or termination of this agreement by you or us at any time for any reason will not entitle you to a refund of monies paid."
                    }
                  />
                </div>
              </div>
              <br />
              <H1 style={{ color: "white", marginTop: "32px" }}>
                6. Security of your credit card and payment informationt
              </H1>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"6.1"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "Card payments are not processed through pages controlled by us. We use one or more online payment service providers who will encrypt your card or bank account details in a secure environment."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"6.2"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "If you have asked us to remember your credit card details in readiness for your next purchase or subscription, we will securely store your payment details on our systems. These details will be fully encrypted and only used to process your automatic yearly payments or other transactions which you have initiated."
                    }
                  />
                </div>
              </div>
              <br />
              <H1 style={{ color: "white", marginTop: "32px" }}>
                7. How we handle your Information
              </H1>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"7.1"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "Our privacy policy is strong and precise. It complies fully with the Privacy Act 2020 which is at hospitalityguardian.co.nz/privacy-policy"
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"7.2"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "Our website will be managed confidentially, in accordance with our standard procedures and all expired information will be automatically deleted from our systems after six months."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"7.3"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "Even if access to your text is behind a user registration it remains effectively in the public domain because someone has only to register and log in, to access it. You should therefore avoid Posting unnecessary confidential information."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"7.4"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "We need the freedom to be able to publicise our Services and your own use of them. You therefore now irrevocably grant us the right and licence to edit, copy, publish, distribute, translate and otherwise use any Content that you place on Our Website, in public domains and in any medium. You represent and warrant that you are authorised to grant all such rights."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"7.5"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "We will use that licence only for commercial purposes of the business of Our Website and will stop using it after a commercially reasonable period of time."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"7.6"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "You agree to waive your right to be identified as the author and your right to object to derogatory treatment of your work as provided in the Copyright 1994 as amended."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"7.7"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "You now irrevocably authorise us to publish feedback, comments, and ratings about your activity through Our Website, even though it may be defamatory or critical."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"7.8"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "Posting content of any sort does not change your ownership of the copyright in it. We have no claim over it and we will not protect your rights for you."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"7.9"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "You understand that you are personally responsible for your breach of someone else’s intellectual property rights, defamation, or any law, which may occur as a result of any Content having been Posted by you;"
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"7.10"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "You accept all risk and responsibility for determining whether any Content is in the public domain and not confidential."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"7.11"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "Please notify us of any security breach or unauthorised use of your account."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"7.12"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "We do not solicit ideas or text for improvement of our Service, but if you do send to us material of any sort, you are deemed to have granted to us a licence to use it in the terms set out at sub paragraph [five / number] above."
                    }
                  />
                </div>
              </div>
              <br />
              <H1 style={{ color: "white", marginTop: "32px" }}>
                8. Restrictions on what you may Post to Our Website
              </H1>
              <Para
                text={
                  "We invite you to contribute Content to Our Website in several ways and for different purposes. We have to regulate your use of Our Website to protect our business and our staff, to protect other users of Our Website and to comply with the law. These provisions apply to all users of Our Website."
                }
              />
              <Para
                text={
                  "We do not undertake to moderate or check every item Posted, but we do protect our business vigorously. If we believe Content Posted breaches the law, we shall co-operate fully with the law enforcement authorities in whatever ways we can."
                }
              />
              <Para
                text={
                  "You agree that you will not use or allow anyone else to use Our Website to Post Content or undertake any activity which is or may:"
                }
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"8.1"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "be unlawful, or tend to incite another person to commit a crime;"
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"8.2"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "be obscene, offensive, threatening, violent, malicious or defamatory;"
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"8.3"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para text={"be sexually explicit or pornographic;"} />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"8.4"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "be likely to deceive any person or be used to impersonate any person, or to misrepresent your identity, age or affiliation with any person;"
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"8.5"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "use a Posting to solicit responses unconnected with the purpose of Our Website or the terms proposed by this agreement;"
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"8.6"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "request or collect passwords or other personal information from another user without his permission, nor post any unnecessary personal information about yourself;"
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"8.7"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "be used to sell any goods or services or for any other commercial use not intended by us, for yourself or for any other person. Examples are: sending private messages with a commercial purpose or collecting information with the intention of passing it to a third party for his commercial use;"
                    }
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"8.8"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "include anything other than words (i.e., you will not include any symbols or photographs);"
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"8.9"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "facilitate the provision of unauthorised copies of another person's copyright work;"
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"8.10"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "link to any of the material specified in this paragraph;"
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"8.11"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "Send age-inappropriate communications or Content to anyone under the age of 18."
                    }
                  />
                </div>
              </div>
              <br />
              <H1 style={{ color: "white", marginTop: "32px" }}>
                9. Your Posting: restricted content
              </H1>
              <Para
                text={
                  "In connection with the restrictions set out below, we may refuse or edit or remove a Posting which does not comply with these terms."
                }
              />
              <Para
                text={
                  "In addition to the restrictions set out above, a Posting must not contain:"
                }
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"9.1"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "hyperlinks, other than those specifically authorized by us."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"9.2"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "keywords or words repeated, which are irrelevant to the Content Posted."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"8.3"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "the name, logo or trademark of any organisation other than yours."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"9.4"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={"inaccurate, false, or misleading information."}
                  />
                </div>
              </div>
              <br />
              <H1 style={{ color: "white", marginTop: "32px" }}>
                10. Removal of offensive Content
              </H1>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"10.1"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "For the avoidance of doubt, this paragraph is addressed to any person who comes on Our Website for any purpose."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"10.2"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "We are under no obligation to monitor or record the activity of any user of Our Website for any purpose, nor do we assume any responsibility to monitor or police Internet-related activities. However, we may do so without notice to you and without giving you a reason."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"10.3"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "If you are offended by any Content, the following procedure applies:"
                    }
                  />
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"10.3.1"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={
                          "your claim or complaint must be submitted to us in the form available on Our Website, or contain the same information as that requested in our form. It must be sent to us by post or email."
                        }
                      />
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"10.3.2"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={
                          "we shall remove the offending Content as soon as we are reasonably able;"
                        }
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"10.3.3"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={
                          "after we receive notice of a claim or complaint, we shall investigate so far as we alone decide;"
                        }
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"10.3.4"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={
                          "we may re-instate the Content about which you have complained or we may not."
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"10.4"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "In respect of any complaint made by you or any person on your behalf, whether using our form of complaint or not, you now irrevocably grant to us a licence to publish the complaint and all ensuing correspondence and communication, without limit."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"10.5"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "You now agree that if any complaint is made by you frivolously or vexatiously you will repay us the cost of our investigation including legal fees, if any."
                    }
                  />
                </div>
              </div>
              <br />
              <H1 style={{ color: "white", marginTop: "32px" }}>
                11. Security of Our Website
              </H1>
              <Para
                text={
                  "If you violate Our Website, we shall take legal action against you."
                }
              />
              <Para
                text={
                  "You now agree that you will not, and will not allow any other person to:"
                }
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"11.1"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "modify, copy, or cause damage or unintended effect to any portion of Our Website, or any software used within it."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"11.2"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "link to Our Website in any way that would cause the appearance or presentation of Our Website to be different from what would be seen by a user who accessed Our Website by typing the URL into a standard browser;"
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"11.3"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "download any part of Our Website, without our express written consent;"
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"11.4"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "collect or use any product listings, descriptions, or prices;"
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"11.5"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "collect or use any information obtained from or about Our Website or the Content except as intended by this agreement;"
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"11.6"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "aggregate, copy or duplicate in any manner any of the Content or information available from Our Website, other than as permitted by this agreement or as is reasonably necessary for your use of the Services;"
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"11.7"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "Despite the above terms, we now grant a licence to you to:"
                    }
                  />
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"11.7.1"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={
                          "create a hyperlink to Our Website for the purpose of promoting an interest common to both of us. You can do this without specific permission. This licence is conditional upon your not portraying us or any product or service in a false, misleading, derogatory, or otherwise offensive manner. You may not use any logo or other proprietary graphic or trademark of ours as part of the link without our express written consent."
                        }
                      />
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"11.7.2"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={
                          "you may copy the text of any page for your personal use in connection with the purpose of Our Website or a Service we provide."
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <H1 style={{ color: "white", marginTop: "32px" }}>
                12. Interruption to Services
              </H1>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"12.1"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "If it is necessary for us to interrupt the Services, we will give you reasonable notice where this is possible and when we think the down time is such as to justify telling you."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"12.2"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "You acknowledge that the Services may also be interrupted for many reasons beyond our control."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"12.3"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "You agree that we are not liable to you for any loss, foreseeable or not, arising from any interruption to the Services."
                    }
                  />
                </div>
              </div>
              <H1 style={{ color: "white", marginTop: "32px" }}>
                13. Intellectual Property
              </H1>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"13.1"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "You agree that we are not liable to you for any loss, foreseeable or not, arising from any interruption to the Services."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"13.2"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "us of any suspected infringement of the Intellectual Property;"
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"13.3"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "indemnify us for any loss or expense arising from your misuse of the Intellectual Property;"
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"13.4"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "not use any name or mark similar to or capable of being confused with any name or mark of ours;"
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"13.5"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "far as concerns software provided or made accessible by us to you, you will not:"
                    }
                  />
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"13.5.1"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={
                          "copy, or make any change to any part of its code;"
                        }
                      />
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"13.5.2"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={
                          " use it in any way not anticipated by this agreement;"
                        }
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"13.5.3"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={
                          "give access to it to any other person than you, the licensee in this agreement;"
                        }
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"13.5.4"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={
                          "in any way provide any information about it to any other person or generally."
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"13.6"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "not use the Intellectual Property except directly as anticipated by us in provision of the Services."
                    }
                  />
                </div>
              </div>
              <br />
              <H1 style={{ color: "white", marginTop: "32px" }}>
                14. Disclaimers and limitation of liability
              </H1>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"14.1"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "The law differs from one country to another. This paragraph applies so far as the applicable law allows."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"14.2"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "All implied conditions, warranties and terms are excluded from this agreement. If in any jurisdiction an implied condition, warrant or term cannot be excluded, then this sub paragraph shall be deemed to be reduced in effect, only to the extent necessary to release that specific condition, warranty or term."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"14.3"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "The Hospitality Guardian Website and Hospitality Guardian Services are provided “as is.” We make no representation or warranty that the Service will be:"
                    }
                  />
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"14.3.1"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para text={"useful to you;"} />
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"14.3.2"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para text={"of satisfactory quality;"} />
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"14.3.3"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para text={"fit for a particular purpose;"} />
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"14.3.4"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={
                          "available or accessible, without interruption, or without error."
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"14.4"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "We claim no expert knowledge in any subject. We disclaim any obligation or liability to you arising directly or indirectly from information you take from Our Website."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"14.5"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "We shall not be liable to you for any loss or expense arising out of or in connection with your use of Our Website, which is indirect or consequential loss, or economic loss or other loss of turnover, profits, business or goodwill. This applies whether in an action of contract, negligence or otherwise, even if such loss was reasonably foreseeable or we knew you might incur it."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"14.6"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "The Hospitality Guardian Website and Hospitality Guardian Services are provided “as is.” We make no representation or warranty that the Service will be:"
                    }
                  />
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"14.6.1"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={
                          "accuracy of any Content or the impression or effect it gives;"
                        }
                      />
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"14.6.2"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={"delivery of Content, material or any message;"}
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"14.6.3"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para text={"privacy of any transmission;"} />
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"14.6.4"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={
                          "any act or omission of any person or the identity of any person who introduces himself to you through Our Website;"
                        }
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"14.6.5"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={
                          "any aspect or characteristic of any goods or services advertised on Our Website;"
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"14.7"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "We will do all we can to maintain access to Our Website, but it may be necessary for us to suspend all or part of our service for repairs, maintenance or other good reasons. We may do so without telling you first."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"14.8"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "You agree that in any circumstances when we may become liable to you, the limit of our liability is the amount you have paid us in the immediately preceding 12-month period for the Services concerned."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"14.9"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "Our total liability under this agreement, however it arises, shall not exceed the sum of $ 500.00. This applies whether your case is based on contract, tort or any other basis in law."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"14.10"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "We shall not be liable to you for any loss or expense which is:"
                    }
                  />
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"14.10.1"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para text={" indirect or consequential loss; or"} />
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"14.10.2"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={
                          "economic loss or other loss of turnover, profits, business or goodwill even if such loss was reasonably foreseeable or we knew you might incur it."
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"14.11"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "This paragraph (and any other paragraph which excludes or restricts our liability or provides an indemnity to us) applies to our directors, officers, employees, subcontractors, agents and affiliated companies as well as to us. Any of them may enforce this provision under the Contract and Commercial Law Act 2017."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"14.12"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      ". If you become aware of any breach of any term of this agreement by any person, please tell us by contacting Us through Our website. We welcome your input but do not guarantee to agree with your judgement."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"14.13"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "Nothing in this agreement excludes liability for a party's fraud."
                    }
                  />
                </div>
              </div>
              <br />
              <H1 style={{ color: "white", marginTop: "32px" }}>
                15. You indemnify us
              </H1>
              <Para
                text={
                  "You agree to indemnify us against all costs, claims and expense arising directly or indirectly from:"
                }
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"15.1"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={"your failure to comply with the law of any country"}
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"15.2"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para text={"your breach of this agreement;"} />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"15.3"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "a contractual claim arising from your use of the Services"
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"15.4"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "a breach of the intellectual property rights of any person;"
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"15.5"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "and for the purpose of this paragraph you agree that the cost of our management and technical time is properly recoverable and can reasonably be valued at $600.00 per hour without further proof."
                    }
                  />
                </div>
              </div>
              <br />
              <H1 style={{ color: "white", marginTop: "32px" }}>
                16. Miscellaneous matters
              </H1>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"16.1"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "If any term or provision of this agreement is at any time held by any jurisdiction to be void, invalid or unenforceable, then it shall be treated as changed or reduced, only to the extent minimally necessary to bring it within the laws of that jurisdiction and to prevent it from being void and it shall be binding in that changed or reduced form. Subject to that, each provision shall be interpreted as severable and shall not in any way affect any other of these terms."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"16.2"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "The rights and obligations of the parties set out in this agreement shall pass to any permitted successor in title."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"16.3"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "If you are in breach of any term of this agreement, we may:"
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"16.3.1"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "publish all text and Content relating to the claimed breach, including your name and email address and all correspondence between us and our respective advisers; and you now irrevocably give your consent to such publication."
                    }
                  />
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"16.3.2 "} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={
                          "terminate your account and refuse access to Our Website;"
                        }
                      />
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"16.3.3"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={
                          "remove or edit Content, or cancel any order at our discretion;"
                        }
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={"16.3.4"} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={
                          "No failure or delay by any party to exercise any right, power or remedy will operate as a waiver of it nor indicate any intention to reduce that or any other right in the future."
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"16.4"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para text={"issue a claim in any court."} />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"16.5"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "You agree that we may disclose your information including assigned IP numbers, account history, account use, etc. to any judicial or proper legal authority who makes a written request without further consent or notification to you."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"16.6"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "Any communication to be served on either party by the other shall be delivered by hand or sent by express post or recorded delivery or by email."
                    }
                  />
                  <Para text={"It shall be deemed to have been delivered:"} />
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={" "} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={"if delivered by hand: on the day of delivery;"}
                      />
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={""} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={
                          "if sent by post to the correct address: within 72 hours of posting;"
                        }
                      />
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "10%" }}>
                      <Para text={" "} />
                    </div>
                    <div style={{ width: "90%" }}>
                      <Para
                        text={
                          "If sent by e-mail to the address from which the receiving party has last sent e-mail: within 24 hours if no notice of non-receipt has been received by the sender. "
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"16.7"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "In the event of a dispute between the parties to this agreement, then they undertake to attempt to settle the dispute by engaging in good faith with the other in a process of mediation before commencing arbitration or litigation."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"16.8"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "This agreement does not give any right to any third party under the Contract and Commercial Law Act 2017 or otherwise, except that any provision in this agreement which excludes or restricts the liability of our directors, officers, employees, subcontractors, agents and affiliated companies, may be enforced under that Act."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"16.9"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "[In the event of any conflict between any term of this agreement and the provisions of the constitution of a limited company or any comparable document intended to regulate any other corporate or collective body, then the terms of this agreement shall prevail]."
                    }
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "10%" }}>
                  <Para text={"16.10"} />
                </div>
                <div style={{ width: "90%" }}>
                  <Para
                    text={
                      "The validity, construction and performance of this agreement shall be governed by the laws of New Zealand and you agree that any dispute arising from it shall be litigated only in that country"
                    }
                  />
                </div>
              </div>
              <br />
 
              {/*       */}
            </div>
          </PrivacyContent>
        </Margin>
        <Spacer height="200px" />

        <Footer background={"rgba(177, 149, 56, 1)"} color={"#161616"} />
      </Wrapper>
    </>
  );
}
