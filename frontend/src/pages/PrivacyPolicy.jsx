import styled from "styled-components";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Margin, Wrapper } from "../components/Style";
import { H1, P } from "../components/Typography";
import { Spacer } from "../components/Spacer";
import { useMediaQuery } from "react-responsive";

const PrivacyContent = styled.div``;
export default function PrivacyPolicy() {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <>
      <Wrapper>
        <Navbar />
        <Margin>
          <PrivacyContent>
            <H1 fontSize="36px" color="rgba(177, 149, 56, 1)">
              Privacy Policy
            </H1>
            <Spacer height={isResponsive ? "10px" : "48px"} />
            <div>
              <P fontSize="24px" weight="400">
                We collect personal information from you, including information
                about your:
              </P>
              <ul>
                <li
                  style={
                    isResponsive
                      ? {
                          color: "white",
                          marginTop: "12px",
                          fontSize: "15px",
                        }
                      : {
                          color: "white",
                          marginTop: "12px",
                          fontSize: "24px",
                        }
                  }
                >
                  duty managers' names
                </li>
                <li
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
                >
                  contact information
                </li>
                <li
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
                >
                  billing or purchase information
                </li>
                <li
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
                >
                  Business Trading Name
                </li>
              </ul>
              {/* If you choose not to enter we'll
We keep your information safe by storing it in encrypted files and only allowing certain staff to access it .
We keep your information for a maximum of two years upon service cancelation, at which point we will securely destroy all your data by erasing all related data connected with your account.
You have the right to ask for a copy of any personal information we hold about you, and to ask for it to be corrected if you think it is wrong. If you’d like to ask for a copy of your information, or to have it corrected, please contact us at info@hospitalityguardian.co.nz. */}
              <P fontSize="24px" weight="400">
                We collect your personal information in order to:
              </P>
              <ul>
                <li
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
                >
                  do something that relates specifically to our business.
                </li>
              </ul>
              <P fontSize="24px" weight="400">
                Besides our staff, we may share this information with:
              </P>
              <ul>
                <li
                  style={
                    isResponsive
                      ? {
                          color: "white",
                          marginTop: "12px",
                          fontSize: "15px",
                        }
                      : {
                          color: "white",
                          marginTop: "12px",
                          fontSize: "24px",
                        }
                  }
                >
                  our cloud hosting service, who encrypt our files in order to
                  take actions connected to a <br /> purpose for collection.
                </li>
                <li
                  style={
                    isResponsive
                      ? {
                          color: "white",
                          marginTop: "12px",
                          fontSize: "15px",
                        }
                      : {
                          color: "white",
                          marginTop: "12px",
                          fontSize: "24px",
                        }
                  }
                >
                  License issuing agencies, District licensing Committees
                  (DLC's), and occasionally the NZ <br /> Police.
                </li>
              </ul>
              <P fontSize="24px" weight="400" lHeight="30px">
                Providing some information is optional. If you choose not to
                enter a certain type of <br /> information, we'll be unable to
                provide specific services.
              </P>
              <ul>
                <li
                  style={
                    isResponsive
                      ? {
                          color: "white",
                          marginTop: "12px",
                          fontSize: "15px",
                        }
                      : {
                          color: "white",
                          marginTop: "12px",
                          fontSize: "24px",
                        }
                  }
                >
                  If you choose not to enter we'll{" "}
                </li>
              </ul>
              <P fontSize="24px" weight="400" lHeight="30px">
                We keep your information safe by storing it in encrypted files
                and only allowing certain staff <br /> to access it . <br /> We
                keep your information for a maximum of two years upon service
                cancelation, at which <br /> point we will securely destroy all
                your data by erasing all related data connected with your <br />
                account. <br />
                You have the right to ask for a copy of any personal information
                we hold about you, and to <br /> ask for it to be corrected if
                you think it is wrong. If you’d like to ask for a copy of your{" "}
                <br />
                information, or to have it corrected, please contact us at <span style={{color:"rgba(177, 149, 56, 1)",textDecoration:"underline",cursor:"pointer"}}> info@hospitalityguardian.co.nz.</span>
               
              </P>
            </div>
          </PrivacyContent>
        </Margin>
        <Spacer height="200px" />

        <Footer background={"rgba(177, 149, 56, 1)"} color={"#161616"} />
      </Wrapper>
    </>
  );
}
