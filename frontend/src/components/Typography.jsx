import styled from "styled-components";

const H1 = styled.h1`
  font-style: normal;
  font-weight: ${(props) => props.weight && props.weight};
  line-height: ${(props) => props.lHeight && props.lHeight};
  font-size: ${(props) => props.fontSize && props.fontSize};
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
const H2 = styled.h2``;
const H3 = styled.h3``;

const P = styled.p`
  font-style: normal;
  font-weight: ${(props) => (props.weight ? props.weight : "500")};
  line-height: ${(props) => (props.lHeight ? props.lHeight : "24px")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
export { H1, H2, H3, P };
