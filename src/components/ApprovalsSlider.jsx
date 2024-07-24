import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SliderContainer = styled.div`
  padding: 50px 20px;
  background-color: #f5f5f5;
  text-align: center;
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
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
    color: #000;
  }
`;

const ApprovalsSlider = () => {
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

  const approvals = [
    "images/Approvals/AICTE.png",
    "images/Approvals/AIU.png",
    "images/Approvals/DEB.jpg",
    "images/Approvals/Naac.png",
    "images/Approvals/UGC.png",
    "images/Approvals/WES.jpg",
  ];

  return (
    <SliderContainer>
      <Heading>Our Approvals</Heading>
      <LogoSlider {...sliderSettings}>
        {approvals.map((logo, index) => (
          <div key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </LogoSlider>
    </SliderContainer>
  );
};

export default ApprovalsSlider;
