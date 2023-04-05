import styled from "styled-components";
import Card from "../components/Card";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import { Margin, Wrapper } from "../components/Style";
import { Spacer } from "../components/Spacer";
import HomeImage from "../images/Homeimage.svg";
import Startted from "../components/Startted";

export default function HomePage() {
  return (
    <>
      <Wrapper>
        {/* <Navbar /> */}
        <Margin>
          <HeroSection image={HomeImage} />
        </Margin>
        <Spacer height="127px" />
        <Card />
        <Spacer height="179px" />
        <Startted />
      </Wrapper>
    </>
  );
}
