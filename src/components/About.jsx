import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaUsers, FaGraduationCap, FaMedal, FaUserTie } from 'react-icons/fa';
import PageHeader from './PageHeader';
import AboutText from './AboutText';
import OurIntro from './OurIntro';

const WhoWeAreSection = styled.section`
  padding: 40px 20px;
  background-color: #f4f4f4;
  text-align: center;
`;

const ColumnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap; /* Allow wrapping of columns on smaller screens */
  justify-content: space-between; /* Space between columns */
  align-items: stretch; /* Make all columns the same height */
  padding: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* Center columns in a column layout */
    gap: 10px;
  }
`;

const ColumnStyled = styled.div`
  flex: 1; /* Allow columns to grow equally */
  text-align: left; /* Align text to the left */
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
  padding: 20px; /* Increased padding for better spacing */
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center icon horizontally */
  
  /* Ensure column height is equal */
  min-height: 250px; /* Minimum height for better appearance */
  
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px; /* Space between icon and text */
    transition: color 0.3s ease; /* Smooth transition for color change */
  }

  h3 {
    margin: 10px 0;
    color: #fff;
    text-align: center; /* Center the header text */
    display: flex;
    align-items: center;
    gap: 10px; /* Space between icon and text */
    transition: color 0.3s ease; /* Smooth transition for color change */
  }

  p {
    margin: 0;
    font-size: 18px;
    color: #ccc;
    text-align: center; /* Align text to the left */
    transition: color 0.3s ease; /* Smooth transition for color change */
  }

  &:hover {
    background: #f6c298; /* Optional: Change background color on hover */
    transition: 0.3s;

    .icon-container {
      color: rgba(0, 0, 0, 0.7); /* Change icon color on hover */
    }

    h3 {
      color: rgba(0, 0, 0, 0.7); /* Change header text color on hover */
    }

    p {
      color: rgba(0, 0, 0, 0.7); /* Change paragraph text color on hover */
    }
  }

  @media (max-width: 768px) {
    width: 100%; /* Ensure full width on smaller devices */
    margin-bottom: 20px;
    padding: 15px; /* Adjust padding for mobile view */
    text-align: left; /* Ensure text aligns to the left */
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px; /* Adjust padding further for very small screens */
  }
`;

const About = () => {


  useEffect(() => {
    document.title = "Learnedge - About";
    window.scrollTo(0, 0);
  }, []);
  
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
      content2: "Working professionals from over 8000 corporates & 600+ locations of urban and rural India are accelerating their careers with NMIMS Global."
    }
  ];

  return (
    <div>
      <PageHeader title="ABOUT" image={"images/hero/hero1.webp"} />
      <AboutText />
      <WhoWeAreSection>
        <h2>Who We Are?</h2>
        <ColumnContainer>
          {columnContents.map((column, index) => (
            <ColumnStyled key={index}>
              <div className="icon-container">{column.icon}</div>
              <p>{column.content1}</p><br />
              <p>{column.content2}</p>
            </ColumnStyled>
          ))}
        </ColumnContainer>
      </WhoWeAreSection>

      <OurIntro />
    </div>
  );
};

export default About;
