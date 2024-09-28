import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Bs1CircleFill, Bs2CircleFill, Bs3CircleFill, Bs4CircleFill, Bs5CircleFill, Bs6CircleFill } from "react-icons/bs"; // Import the icons
import PageHeader from './PageHeader';

// Styled components
const Section = styled.section`
  padding: 50px 0;
`;

const HighlightedText = styled.span`
  color: #f0bc5e;
`;

const Title = styled.h2`
  font-size: 36px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack boxes vertically on smaller screens */
  }
`;

const Box = styled.div`
  flex: 1 1 30%; /* Flex-grow, flex-shrink, flex-basis to allow flexible sizing */
  margin: 0;
  padding: 20px;
  background-color: #f0bc5e;
  color: white;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Left-align text */
  text-align: left; /* Left-align text */
  flex-direction: column;
  min-height: 180px;
  border: 1px solid #000;
  border-radius: 5px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 16px;
    min-height: 150px;
    flex: 1 1 100%; /* Each box takes full width on smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 14px;
    min-height: 120px;
  }

  &.hidden {
    visibility: hidden;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BoxHeading = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const BoxText = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
`;

const BenefitsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 5px;
  flex-wrap: wrap; /* Allow wrapping for responsiveness */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BenefitsColumn = styled.div`
  flex: 1;
  padding: 20px;
  border-radius: 5px;
  text-align: left;

  &:first-child {
    background-color: #f0bc5e;
    text-align: left;
    font-size: 28px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const BenefitsHeader = styled.h3`
  margin: 0 0 10px;
  font-size: 36px; /* Larger text size for the header */
`;

const BenefitsText = styled.p`
  margin: 0;
  font-size: 18px;
`;

const NumberedList = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow wrapping for responsiveness */
  width: 100%;
`;

const SubColumn = styled.div`
  flex: 1; /* Equal width for both sub-columns */
  padding: 0 10px;
  text-align: left;
  display: flex; /* Flex container for items */
  flex-direction: column; /* Stack items vertically */

  @media (max-width: 768px) {
    flex: 1 1 50%; /* Each column takes 50% width on smaller screens */
  }
`;

const NumberedListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 24px; /* Increase the font size */
  flex: 1 1 33.33%; /* Each item takes 1/3 of the row on larger screens */
  
  @media (max-width: 768px) {
    flex: 1 1 100%; /* Each item takes full width on smaller screens */
    justify-content: center; /* Center items on smaller screens */
  }
`;



const ContactSection = styled.div`
    text-align: center;
    margin-top: 50px;
    h3 {
        font-size: 24px;
        color: #021f55;
    }
    p {
        font-size: 18px;
        color: #333;
    }
    .contact-link {
        color: #021f55;
        text-decoration: none;
    }
    .contact-link:hover {
        text-decoration: underline;
    }
`

const Icon = styled.div`
  font-size: 36px; /* Make the icon larger */
  margin-right: 10px; /* Spacing between icon and text */
  
`;

// New BenefitsSection Component
export const BenefitsSection = () => (
  <BenefitsContainer>
    <BenefitsColumn>
      <BenefitsHeader>Benefits of Authorised</BenefitsHeader>
      <BenefitsHeader>LEARNEDGE Partner.</BenefitsHeader>
      <BenefitsText>
        Products with 100% Approved and Genuine Programs.
      </BenefitsText>
    </BenefitsColumn>

    <BenefitsColumn>
      <NumberedList>
        <SubColumn>
          <NumberedListItem>
            <Icon><Bs1CircleFill /></Icon> Super Earnings
          </NumberedListItem>
          <NumberedListItem>
            <Icon><Bs2CircleFill /></Icon> Super Flexibility
          </NumberedListItem>
          <NumberedListItem>
            <Icon><Bs3CircleFill /></Icon> Super Service
          </NumberedListItem>
        </SubColumn>
        <SubColumn>
          <NumberedListItem>
            <Icon><Bs4CircleFill /></Icon> Minimal Investment
          </NumberedListItem>
          <NumberedListItem>
            <Icon><Bs5CircleFill /></Icon> Largest Product Line
          </NumberedListItem>
          <NumberedListItem>
            <Icon><Bs6CircleFill /></Icon> Lead Generation & Service Portal
          </NumberedListItem>
        </SubColumn>
      </NumberedList>
    </BenefitsColumn>
  </BenefitsContainer>
);

// Main Component
const Partners = () => {
  useEffect(() => {
    document.title = "Learnedge - Partners";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <PageHeader title="PARTNERS" image={"images/hero/hero2.webp"} />
      <Section>
        <Title>
          Why Partner<HighlightedText> With Us?</HighlightedText>
        </Title>

        {/* First Row - Only odd numbered boxes (1, 3, 5) */}
        <BoxContainer>
          <Row>
            <Box>
              <BoxHeading>Biggest Product Offerings</BoxHeading>
              <BoxText>
                Opportunity to work with India's Leading Universities on a single platform.
              </BoxText>
            </Box>
            <Box className="hidden">Box 2</Box>
            <Box>
              <BoxHeading>Flexibility</BoxHeading>
              <BoxText>
                Work at your comfort from anywhere and anytime.
              </BoxText>
            </Box>
            <Box className="hidden">Box 4</Box>
            <Box>
              <BoxHeading>Zero Investment</BoxHeading>
              <BoxText>
                Opportunity to add product offerings at zero cost, hence, an ability to cater to all customer needs.
              </BoxText>
            </Box>
            <Box className="hidden">Box 6</Box>
          </Row>

          {/* Second Row - Only even numbered boxes (8, 10, 12) */}
          <Row>
            <Box className="hidden">Box 7</Box>
            <Box>
              <BoxHeading>Limitless Earning Potential</BoxHeading>
              <BoxText>
                Future is online education. So earn good amount of incentives and commissions.
              </BoxText>
            </Box>
            <Box className="hidden">Box 9</Box>
            <Box>
              <BoxHeading>24*365 Support</BoxHeading>
              <BoxText>
                Innovative technology support and continuous assistance by Team CV.
              </BoxText>
            </Box>
            <Box className="hidden">Box 11</Box>
            <Box>
              <BoxHeading>Recognition</BoxHeading>
              <BoxText>
                Opportunity to represent NAAC A, A+, Grade 1 Universities.
              </BoxText>
            </Box>
          </Row>
        </BoxContainer>

        <hr />

        {/* Benefits Section */}
        <BenefitsSection />


        <ContactSection>
          <h3>Want To Know More</h3>
          <p>Write Us Mail on <span className='text-primary'>manoj@learnedges.com</span> OR Call on <span className='text-primary'>+91 77383 33543</span></p>
        </ContactSection>
      </Section>
    </div>
  );
};

export default Partners;
