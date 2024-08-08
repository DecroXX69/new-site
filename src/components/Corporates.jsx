import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaGlobe, FaUserGraduate, FaLaptop, FaTags, FaMoneyCheckAlt, FaHeadset, FaUsers, FaBook, FaChalkboardTeacher, FaGraduationCap, FaLightbulb } from 'react-icons/fa';

const HeroImageSection = styled.section`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${process.env.PUBLIC_URL + '/images/corporates/business.jpg'});
  background-size: cover;
  background-position: center;
  position: relative;
  color: white;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Dark overlay */
    z-index: 1;
  }
`;

const HeroText = styled.div`
  position: relative;
  z-index: 2;
  font-family: 'Poppins', sans-serif;

  h1 {
    font-size: 2.5rem;
    margin: 0;
    padding: 0 20px;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
`;

const HeroSection = styled.section`
  padding: 50px 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

const HeroHeading = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const HeroIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 150px;
  color: #253457;

  svg {
    font-size: 3rem;
    margin-bottom: 10px;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    margin: 0;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 120px;

    svg {
      font-size: 2.5rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    width: 100px;

    svg {
      font-size: 2rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

// New section styled component
const OfferingSection = styled.section`
  padding: 50px 20px;
  background-color: #ffffff;
  text-align: center;
`;

const OfferingHeading = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const OfferingIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Corporates = () => {
  useEffect(() => {
    document.title = "Learnedge - Corporates";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero image with text */}
      <HeroImageSection>
        <HeroText>
          <h1>Maximize Your Business Potential with Our Employee Development Solutions</h1>
        </HeroText>
      </HeroImageSection>

      {/* Section with icons and text */}
      <HeroSection>
        <HeroHeading>Corporate Partners with Benefits</HeroHeading>
        <HeroIconsContainer>
          <HeroIcon>
            <FaGlobe />
            <p>Global Reach</p>
          </HeroIcon>
          <HeroIcon>
            <FaUserGraduate />
            <p>Expert Faculty</p>
          </HeroIcon>
          <HeroIcon>
            <FaLaptop />
            <p>Tech Solutions</p>
          </HeroIcon>
          <HeroIcon>
            <FaTags />
            <p>Exclusive Discounts</p>
          </HeroIcon>
          <HeroIcon>
            <FaMoneyCheckAlt />
            <p>EMI Options</p>
          </HeroIcon>
          <HeroIcon>
            <FaHeadset />
            <p>24/7 Support</p>
          </HeroIcon>
        </HeroIconsContainer>
      </HeroSection>

      {/* New Offering Section */}
      <OfferingSection>
        <OfferingHeading>Our Offering</OfferingHeading>
        <OfferingIconsContainer>
          <HeroIcon>
            <FaUsers />
            <p>Value-added employee engagement activities</p>
          </HeroIcon>
          <HeroIcon>
            <FaBook />
            <p>Case study/Capstone projects</p>
          </HeroIcon>
          <HeroIcon>
            <FaLaptop />
            <p>Experiential Learning Programs</p>
          </HeroIcon>
          <HeroIcon>
            <FaChalkboardTeacher />
            <p>Personalized counseling</p>
          </HeroIcon>
          <HeroIcon>
            <FaGraduationCap />
            <p>Alumni Status</p>
          </HeroIcon>
          <HeroIcon>
            <FaLightbulb />
            <p>Promote Peer-to-peer based learning</p>
          </HeroIcon>
        </OfferingIconsContainer>
      </OfferingSection>
    </div>
  )
}

export default Corporates;
