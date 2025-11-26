import AbroadStudySection from "../components/Abroad";
import EventsSection from "../components/Event";

import Navbar from "../components/Navbar";
import Example from "../components/offer";
import AdmissionSteps from "../components/Steps";
import StudyBanner from "../components/studybanner";

function Destinationpage() {
  return (
    <>
      <Navbar />
      <StudyBanner />
       <AbroadStudySection showSeeMore={false} />
       <Example />
        <AdmissionSteps />
        <EventsSection />

    </>
  );
}

export default Destinationpage;