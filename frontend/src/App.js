import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HowWorks from "./pages/HowWorks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Wrapper } from "./components/Style";
import BussinessLogin from "./pages/BussinesLogin";
import { useEffect, useState } from "react";

function App() {
  const [pathName, setPathName] = useState();
  // console.log(window.location.pathname);
  useEffect(() => {
    const pathname = window.location.pathname;
    console.log(pathname);
    setPathName(pathname);
  });

  return (
    <>
      <BrowserRouter>
        <Wrapper>
          {pathName === "/signup" ? <BussinessLogin /> : <Navbar />}
        </Wrapper>
        <Routes>
          {/* <Route path="/"  element={<BussinessLogin />}/> */}

          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/how-it-works" element={<HowWorks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
