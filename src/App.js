import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Cources from './components/Cources';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Parteners from './components/Parteners';
import University from './components/University';
import WhatsAppButton from './components/WhatsappButon.jsx';
import EnquiryPopup from './components/EnquiryPopup.jsx';
import Carporates from './components/Corporates.jsx';
import Corporates from './components/Corporates.jsx';
import CourseDetails from './components/CourceDetails.jsx';
import CoursesTypes from './components/CourseTypes.jsx';




function App() {
  return (
    <div className="App">
      <Navbar />
      <EnquiryPopup />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/courses' element={<Cources />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/parteners' element={<Parteners />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/corporates' element={<Corporates />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path="/university/:id" element={<University />} />
        <Route path="/university/:id/course/:courseId" element={<CourseDetails />} />
        <Route path="/courses/post-graduation" element={<CoursesTypes courseType="Post Graduation" />} />
        <Route path="/courses/graduation" element={<CoursesTypes courseType="Graduation" />} />
        <Route path="/courses/executive-programs" element={<CoursesTypes courseType="Executive Program" />} />
        <Route path="/courses/certification" element={<CoursesTypes courseType="Certification" />} />
        <Route path="/course/:id/:courseId" element={<CourseDetails />} />
        
      </Routes>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
