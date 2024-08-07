import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProgramsData from '../data/ProgramsData.json';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer'; // Assuming you have a Footer component
import PageHeader from './PageHeader';

const MainContainer = styled.div`
  font-family: 'Poppins', sans-serif;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

const Image = styled.img`
  height: 200px;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

const Title = styled.h4`
  margin-top: 20px;
  font-size: 1.5rem;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Cources = () => {
  useEffect(() => {
    document.title = "Learnedge - Cources";
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleViewCourses = (curProgram) => {
    navigate(`/university/${curProgram.id}`, { state: { program: curProgram } });
  };

  return (
    <MainContainer>
      <PageHeader title="COURCES" image={"images/hero/hero2.webp"} />
      <Grid>
        {ProgramsData.map((curProgram) => (
          <Card key={curProgram.id}>
            <Image src={curProgram.image} alt="Card Image" />
            <div>
              <Title>{curProgram.name}</Title>
              <Button onClick={() => handleViewCourses(curProgram)}>View Programs</Button>
            </div>
          </Card>
        ))}
      </Grid>
      <Footer />
    </MainContainer>
  );
};

export default Cources;
