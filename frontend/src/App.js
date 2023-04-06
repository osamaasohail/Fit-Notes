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

function App() {
  return (
    <>
      <BrowserRouter>
      <Wrapper>

      <Navbar/>
      </Wrapper>
        <Routes>
          <Route path="/"  element={<HomePage />}/>
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
