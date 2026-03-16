import Navbar from "../components/Navbar";
import Home from "../components/Home";
import AbroadStudySection from "../components/Abroad";
import AboutUs from "../components/About";
import AppointmentSection from "../components/Appointment";
import HearFromCounsellors from "../components/counsellors";
import Action from "../components/Action";
import LatestBlogsSection from "../components/Blog";
import EventsSection from "../components/Event";
import TestimonialReelsSection from "../components/TestimonialReelsSection";

function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <AbroadStudySection  showSeeMore={true}/>
      <AboutUs />
      <AppointmentSection />
      <HearFromCounsellors />
      <Action />
      <EventsSection />
      <LatestBlogsSection />
      <TestimonialReelsSection />
  
    </>
  );
}

export default HomePage;
