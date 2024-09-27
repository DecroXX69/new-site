import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaGraduationCap, FaMedal, FaUserTie } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ColumnContainer } from './CarouselColumn';  // Importing the new Column component
import { CarouselColumn } from './CarouselColumn';
import UniversitiesSlider from './UniversitiesSlider';
import NumberCounter from './NumberCounter';
import ApprovalsSlider from './ApprovalsSlider';
import ContactUs from './ContactUs';
import ServicesPage from '../subcomponents/ServicesPage';


const MainContainer = styled.div`
  font-family: 'Poppins', sans-serif;
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left; /* Align text to the left */
  color: #fff;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
  margin-top: 65px;

`;

const HeroSlider = styled(Slider)`
  width: 100%;
  height: 100%;

  .slick-slide img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  .slick-slide:nth-child(3) img {
    @media (max-width: 480px) {
      object-position: 75% center /* Display the right side of the image on smaller screens */
    }
  }
`;


const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* Overlay background color */
  z-index: 1;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 37%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 800px; /* Limit width for better readability */
  text-align: left; /* Align text to the left */
  color:  #f0bc5e;
  padding: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  z-index: 2;
  transition: background 0.3s ease;

  @media (max-width: 768px) {
    left: 50%;
  }

  @media (max-width: 480px) {
    left: 50%;
  }

  @media (max-width: 960px) {
    left: 50%;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 3rem;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    margin-bottom: 20px;
    color:  #f0bc5e;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }

    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }

  button {
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #f0bc5e;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: rgba(240,188,9,255);
    }

    @media (max-width: 768px) {
      padding: 8px 16px;
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      padding: 6px 12px;
      font-size: 0.8rem;
    }
  }
`;

const Home = () => {

  useEffect(() => {
    document.title = "Learnedge - Home";
    window.scrollTo(0, 0);
  }, []);
  const [backgroundImage, setBackgroundImage] = useState('images/hero/hero1.webp');
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();  // Initialize the useNavigate hook

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    beforeChange: (oldIndex, newIndex) => {
      const newImage = `images/hero/hero${newIndex + 1}.webp`;
      setBackgroundImage(newImage);
      setCurrentSlide(newIndex);
    }
  };

  const heroTexts = [
    {
      header: "Embark on a journey of success with our renowned programs",
      subHeader: "Unleash Your Potential: Elevate, Excel, Succeed!"
    },
    {
      header: "Gain a competitive Edge with our Online Programs",
      subHeader: "Learnedge is India's fastest-growing educational company that is committed to providing high-quality education to students and professionals!"
    },
    {
      header: "Join India's Top Rated IIM's Executive and Degree Programs",
      subHeader: "Elevate your career with the most prestigious certification and degree programs we have to offer!"
    }
  ];

  const columnContents = [
    {
      icon: <FaUsers size={50} />,
      content1: "Learnedge is founded by professionals having 40+ years of collective experience from the Education and Service Industries.",
      content2: "Strong backend team which supports students from every stage of academic progression."
    },
    {
      icon: <FaGraduationCap size={50} />,
      content1: "Partenered with India's Top EdTech University which has a rich pedigree of alumini and highly qualified faculty from IIT & IIMs.",
      content2: "40+ years of legacy in Academic Excellence."
    },
    {
      icon: <FaMedal size={50} />,
      content1: "Offering UGC Entilted new edge Management Programs, which help Students & Professionals to sshape up their career growth.",
      content2: "High industry acceptance globally."
    },
    {
      icon: <FaUserTie size={50} />,
      content1: "Career Development Service which prepares students for lifetime career Possibilities.",
      content2: "Working professionals from over 8000 corporates & 600+ locations of urban and rural India are accelerating their careers."
    }
  ];

  return (
    <MainContainer>
      <HeroSection>
        <HeroSlider {...sliderSettings}>
          <div>
            <img src="images/hero/hero1.webp" alt="Hero 1" />
          </div>
          <div>
            <img src="images/hero/hero2.webp" alt="Hero 2" />
          </div>
          <div>
            <img src="images/hero/hero3.webp" alt="Hero 3" />
          </div>
        </HeroSlider>
        <HeroOverlay />
        <HeroContent>
          <div>
            <h1>{heroTexts[currentSlide].header}</h1>
            <p>{heroTexts[currentSlide].subHeader}</p>
            <button onClick={() => navigate('/courses')}>Get Started</button>
          </div>
        </HeroContent>
      </HeroSection>

      <ColumnContainer>
        {columnContents.map((column, index) => (
          <CarouselColumn
            key={index}
            icon={column.icon}
            content1={column.content1}
            content2={column.content2}
          />
        ))}
      </ColumnContainer>

      <UniversitiesSlider/>

      <ServicesPage/>

      <NumberCounter/>

      <ApprovalsSlider/>

      <ContactUs/>


      
    </MainContainer>
  );
};

export default Home;
