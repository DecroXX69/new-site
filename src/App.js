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

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/courses' element={<Cources/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/parteners' element={<Parteners/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
