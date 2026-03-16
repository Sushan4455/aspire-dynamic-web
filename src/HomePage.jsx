// src/App.jsx
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AbroadStudySection from "./components/Abroad";
import AboutUs from "./components/About";
import AppointmentSection from "./components/Appointment";
import HearFromCounsellors from "./components/counsellors";
import Action from "./components/Action";
import LatestBlogsSection from "./components/Blog";
import Footer from "./components/Footer";

function Homepage() {
  return (
    <>
      <Navbar />
      <Home />
      <AbroadStudySection />
      <AboutUs />
      <AppointmentSection />
      <HearFromCounsellors />
      <Action />
      <LatestBlogsSection />
      <Footer />
    </>
  );
}

export default Homepage;