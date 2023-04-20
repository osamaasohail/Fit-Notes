import styled from "styled-components";
import Card from "../components/Card";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import { Margin, Wrapper } from "../components/Style";
import { Spacer } from "../components/Spacer";
import HomeImage from "../images/Homeimage.svg";
import Startted from "../components/Startted";
import PricingCard from "../components/PricingCard";
import Accordian from "../components/Accordian";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";


export default function Pricing() {
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <Navbar />
        <PricingCard />

        <Spacer height="127px" />
        <Accordian />
        <Footer color={"#CACA0F"} />
      </Wrapper>
    </>
  );
}
