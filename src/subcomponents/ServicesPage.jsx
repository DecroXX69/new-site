import React, { useEffect } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 70px;
`;

const ThreeColumnLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px; /* Set equal gap between columns on smaller screens */
  }
`;

const Column = styled.div`
  flex: 1;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
    margin-bottom: -30px; /* Remove extra bottom margin to maintain equal gap */
  }
`;

const ThirdColumn = styled(Column)`
  @media (max-width: 768px) {
    margin-top: -10px; /* Reduce the gap between Column 2 and Column 3 */
  }
`;

const HeadingSection = styled.div`
  text-align: center;
  padding-bottom: 40px;
`;

const MainHeader = styled.h1`
  font-size: 28px;
  color: #333;
`;

const SubHeader = styled.h2`
  font-size: 20px;
  color: #666;
`;

const ImageContainer = styled.div`
  margin-top: 20px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #ccc; /* Light gray border */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */

  @media (max-width: 768px) {
    margin: 10px 0; /* Consistent margin between content boxes */
    padding: 10px;
  }
`;

const IconBox = styled.div`
  width: 180px;
  height: 180px;
  margin-right: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 130px;
    height: 130px;
    margin-right: 10px; /* Reduce gap between icon and text on smaller screens */
  }
`;

const ContentText = styled.div`
  text-align: left;
`;

const ContentHeading = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 0;
`;

const SubText = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 8px;
`;

const ServicesPage = () => {

  return (
    <div>
      
      <PageContainer>
        <ThreeColumnLayout>
          {/* First Column: Upper half heading, lower half image */}
          <Column>
            <HeadingSection>
              <MainHeader>OUR 360 DEGREE SERVICES: VALUE PROPOSITION FOR UNIVERSITY</MainHeader>
              <SubHeader>We provide complete white label solution and undertake the following responsibilities:</SubHeader>
            </HeadingSection>
            <ImageContainer>
              <img src="images/services.jpg" alt="Services" />
            </ImageContainer>
          </Column>

          {/* Second Column: Two content boxes with logo on the left and heading + subtext on the right */}
          <Column>
            <ContentBox>
              <IconBox>
                <img src="images/servises/s1.png" alt="Logo" />
              </IconBox>
              <ContentText>
                <ContentHeading>Content Creation and Digitization of the content</ContentHeading>
                <SubText>Transform your ideas into engaging digital content with our expert creation and digitization services.</SubText>
              </ContentText>
            </ContentBox>
            <ContentBox>
              <IconBox>
                <img src="images/servises/s2.png" alt="Logo" />
              </IconBox>
              <ContentText>
                <ContentHeading>Digital Branding and Lead Generation</ContentHeading>
                <SubText>Enhance your online presence and attract quality leads with strategic digital branding and lead generation.</SubText>
              </ContentText>
            </ContentBox>
          </Column>

          {/* Third Column: Two content boxes with logo on the left and heading + subtext on the right */}
          <ThirdColumn>
            <ContentBox>
              <IconBox>
                <img src="images/servises/s3.png" alt="Logo" />
              </IconBox>
              <ContentText>
                <ContentHeading>Student Acquisition and Support</ContentHeading>
                <SubText>Drive student enrolment and provide exceptional support with our targeted acquisition and assistance solutions.</SubText>
              </ContentText>
            </ContentBox>
            <ContentBox>
              <IconBox>
                <img src="images/servises/s4.png" alt="Logo" />
              </IconBox>
              <ContentText>
                <ContentHeading>Online Learning Resources</ContentHeading>
                <SubText>Access a comprehensive range of online learning resources designed to enhance knowledge and skills.</SubText>
              </ContentText>
            </ContentBox>
          </ThirdColumn>
        </ThreeColumnLayout>
      </PageContainer>
    </div>
  );
};

export default ServicesPage;
