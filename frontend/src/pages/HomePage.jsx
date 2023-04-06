import styled from "styled-components";
import Card from "../components/Card";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import { Margin, Wrapper } from "../components/Style";
import { Spacer } from "../components/Spacer";
import HomeImage from "../images/Homeimage.svg";
import Startted from "../components/Startted";
import { useMediaQuery } from "react-responsive";


export default function HomePage() {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <>
      <Wrapper>
        {/* <Navbar /> */}
        <Margin>
          <HeroSection image={HomeImage} />
        </Margin>
        <Spacer height={isResponsive?"70px":"127px"} />
        <Card />
        <Spacer height={isResponsive?"70px":"179px"} />
        <Startted />
      </Wrapper>
    </>
  );
}
