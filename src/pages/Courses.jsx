import AbroadStudySection from "../components/Abroad";
import CoursesBanner from "../components/CoursesBanner";
import CoursesSection from "../components/Coursesection";
import EventsSection from "../components/Event";

import Navbar from "../components/Navbar";
import StudentTestimonials from "../components/Testimonial";


function Coursepage() {
  return (
    <>
      <Navbar />
     <CoursesBanner />
       <CoursesSection />
       <StudentTestimonials />

    </>
  );
}

export default Coursepage;