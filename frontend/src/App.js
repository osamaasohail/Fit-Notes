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
import Profile from "./pages/profile/Profile";
import Subscribtion from "./pages/profile/Subscribtion";
import Notification from "./pages/profile/Notification";
import ResetEmail from "./pages/profile/ResetEmail";
import ConfrimPassword from "./pages/profile/ConfirmPassword";
import Payment from "./pages/Payment";
import IndividualPayment from "./pages/IndividualPayment";
import SingIn from "./pages/SingIn";
import TermsAndConditions from "./pages/TermsAndConditions";

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
          {/* {pathName === "/signup" ? <BussinessLogin /> : <Navbar />} */}
        </Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/how-it-works" element={<HowWorks />} />
          <Route path="/sign-up" element={<BussinessLogin />} />
          <Route path="/profile/edit-profile" element={<Profile />} />
          <Route path="/profile/subscription" element={<Subscribtion />} />
          <Route path="/profile/notification" element={<Notification />} />
          <Route path="/profile/reset" element={<ResetEmail />} />
          <Route path="/profile/reset-password" element={<ConfrimPassword />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/individual-payment" element={<IndividualPayment />} />
          <Route path="/sign-in" element={<SingIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
