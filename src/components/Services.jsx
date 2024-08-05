import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaDesktop, FaTabletAlt, FaChalkboardTeacher, FaUserFriends } from 'react-icons/fa';
import { MdOutlineComputer } from 'react-icons/md';
import PageHeader from './PageHeader';

const PageContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const MainHeader = styled.h1`
  font-size: 28px;
  color: #333;
  margin-top: 20px;
`;

const SubHeader = styled.h2`
  font-size: 20px;
  color: #666;
  margin: 20px 0;
`;

const HeaderText = styled.h2`
  font-size: 24px;
  color: #333;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: nowrap; /* Ensure icons are in a single line on larger screens */
  overflow-x: auto; /* Allow horizontal scrolling if needed */
  justify-content: space-around;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-wrap: wrap; /* Allow wrapping on smaller screens */
    justify-content: center;
  }
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  margin: 10px;

  svg {
    font-size: 40px;
    color: #333;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    color: #666;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  margin-top: 20px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const ServicesPage = () => {

  useEffect(() => {
    document.title = "Learnedge - Services";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PageHeader title={"SERVICES"} image={"images/hero/hero1.webp"} />

      <PageContainer>
        <MainHeader>OUR 360 DEGREE SERVICES: VALUE PROPOSITION FOR UNIVERSITY</MainHeader>
        <SubHeader>We provide complete white label solution and undertake the following responsibilities:</SubHeader>
        <ImageContainer>
          <img src="images/services.jpg" alt="Services" />
        </ImageContainer>

        <HeaderText>LEARNEDGE would be Technology Service Provider for the University</HeaderText>

        <IconContainer>
          <IconBox>
            <FaDesktop />
            <p>Content Creation and Digitization of the content</p>
          </IconBox>
          <IconBox>
            <FaTabletAlt />
            <p>Digital Branding and Lead Generation</p>
          </IconBox>
          <IconBox>
            <MdOutlineComputer />
            <p>Student Acquisition</p>
          </IconBox>
          <IconBox>
            <FaChalkboardTeacher />
            <p>Ready Programs with all Online Learning Resources</p>
          </IconBox>
          <IconBox>
            <FaChalkboardTeacher />
            <p>Ready Technology Platforms</p>
          </IconBox>
          <IconBox>
            <FaDesktop />
            <p>Readiness for Remote Proctored Online Examinations</p>
          </IconBox>
          <IconBox>
            <FaUserFriends />
            <p>Student Support</p>
          </IconBox>
        </IconContainer>
      </PageContainer>
    </div>
  );
};

export default ServicesPage;
