import AbroadStudySection from "../components/Abroad";
import CoursesBanner from "../components/CoursesBanner";
import CoursesSection from "../components/Coursesection";
import EventsSection from "../components/Event";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import StudentTestimonials from "../components/Testimonial";


function Coursepage() {
  return (
    <>
      <Navbar />
     <CoursesBanner />
       <CoursesSection />
       <StudentTestimonials />
        <Footer />
    </>
  );
}

export default Coursepage;