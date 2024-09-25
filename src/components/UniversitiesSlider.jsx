import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SliderContainer = styled.div`
position: relative;
top: -100px;
  padding: 50px 20px;
  text-align: center;
  margin-bottom: -150px;
`;

const Heading = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const LogoSlider = styled(Slider)`
  .slick-slide img {
    margin: 0 auto; /* Center the images */
    max-height: 100px; /* Limit the height of the logos */

    @media (max-width: 480px) {
      max-height:140px;
    }
  }

 

  .slick-prev,
  .slick-next {
    z-index: 1;
    color: #000;
  }
`;

const UniversitiesSlider = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const universities = [
    "images/Logos/Amity.png",
    "images/Logos/dypatil.png",
    "images/Logos/IIM.png",
    "images/Logos/NMIMS.png",
    "images/Logos/pune.png",
    "images/Logos/suresh.jpg",
    "images/Logos/jain.png",
    "images/Logos/manipal.jpg",
    "images/Logos/chandigarh.png"
  ];

  return (
    <SliderContainer>
      <Heading>Our Top Online Education University Partners</Heading>
      <LogoSlider {...sliderSettings}>
        {universities.map((logo, index) => (
          <div key={index}>
            <img src={logo} alt={`University ${index + 1}`} />
          </div>
        ))}
      </LogoSlider>
    </SliderContainer>
  );
};

export default UniversitiesSlider;
