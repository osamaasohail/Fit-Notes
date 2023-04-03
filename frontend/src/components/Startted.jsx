import styled from "styled-components";
import { Margin } from "./Style";
import { H1 } from "./Typography";
import { Button } from "./Button";
import { Spacer } from "./Spacer";

const Input = styled.input`
  border: 1px solid #161616;
  border-radius: 8px;
  padding: 16px 40px;
  background: transparent;
  boder: none;
  width: 100%;
`;
const StarteWrapper = styled.div`
  background: #caca0f;
  padding: 83px 155px 84px 154px;
  border-radius: 25px;
`;

export default function Startted() {
  return (
    <>
      <Margin>
        <StarteWrapper>
          <div className="row align-items-center text-center">
            <div className="col-lg-4">
              <H1 weight="600" color="black" fontSize="32px">
                Get Started
              </H1>
            </div>
            <div className="col-lg-6">
              <Input placeholder="Email" />
            </div>
            <div className="col-lg-2">
              <Button style={{ color: "white" }} background="#1C1C1C">
                SignUp{" "}
              </Button>
            </div>
          </div>
        </StarteWrapper>
      </Margin>
      <Spacer height="106px" />
    </>
  );
}
