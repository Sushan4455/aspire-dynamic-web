import Navbar from "../components/Navbar";

import TrainingProgramsSection from "../components/TrainingProgramsSection";
import CoursesBanner from "../components/CoursesBanner";
import WhyChooseTraining from "../components/whychooseus";
import StudentTestimonials from "../components/Testimonial";

export default function TrainingProgram() {
  return (
    <>
      <Navbar />
     <WhyChooseTraining />
      <TrainingProgramsSection />
      <StudentTestimonials />

    </>
  );
}
