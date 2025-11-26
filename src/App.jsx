import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Destinationpage from "./pages/Studydestination";
import Courses from "./pages/courses";
import TrainingProgram from "./pages/TrainingProgram";
import TeamPage from "./pages/Teams";
import Contact from "./pages/Contact";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailsPage";
import UK_Detail from "./pages/UK_Detail";   
import Australia_Detail from "./pages/Australia_Detail";
import USA_Detail from "./pages/USA_Detail";
import Canada_Detail from "./pages/Canada_Detail";
import Japan_Detail from "./pages/Japan_Detail";
import Dubai_Detail from "./pages/Dubai_Detail";
import CourseRegistration from "./pages/CourseRegistration";
import ChatbotWidget from "./components/ChatbotWidget";




export default function App() {
  return (
    <>


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/study-destination" element={<Destinationpage />} />
         <Route path="/courses" element={<Courses />} />
         <Route path="/training" element={<TrainingProgram />} />
         <Route path="/team" element={<TeamPage />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/blogs" element={<BlogPage />} />  {/* ✅ updated */}
         <Route path="/blogs/:id" element={<BlogDetailPage />} />
         {/* UK Detail Page */}
        <Route path="/study-in-uk" element={<UK_Detail />} />
        <Route path="/study-in-australia" element={<Australia_Detail />} />
        <Route path="/study-in-usa" element={<USA_Detail />} />
        <Route path="/study-in-canada" element={<Canada_Detail />} />
        <Route path="/study-in-japan" element={<Japan_Detail />} />
        <Route path="/study-in-dubai" element={<Dubai_Detail />} />
        <Route path="/course-registration" element={<CourseRegistration />} />    
      </Routes>
      <ChatbotWidget />

    </>
  );
}



