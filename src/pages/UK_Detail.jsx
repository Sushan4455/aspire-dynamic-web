import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrainingProgramsSection from "../components/TrainingProgramsSection";
import CoursesBanner from "../components/CoursesBanner";
import WhyChooseTraining from "../components/whychooseus";
import StudentTestimonials from "../components/Testimonial";
import UKDetails from "../components/Unitedkingdom";

export default function TrainingProgram() {
  return (
    <>
      <Navbar />
      <UKDetails />
      <StudentTestimonials />
      <Footer />
    </>
  );
}