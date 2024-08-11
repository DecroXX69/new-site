import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link here
import styled from 'styled-components';
import ProgramsData from '../data/ProgramsData.json';
import Footer from './Footer';

const UniversityContainer = styled.div`
  font-family: 'Poppins', sans-serif;
`;

const BackgroundImage = styled.div`
  height: 400px;
  background-size: cover;
  background-position: center;
  background-image: ${({ $imageUrl }) => `url(${process.env.PUBLIC_URL + '/' + $imageUrl})`};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const UniversityName = styled.h1`
  font-size: 3rem;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
`;

const CoursesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px;
`;

const CourseItem = styled.li`
  background-color: #f9f9f9;
  color: black;
  margin: 10px;
  padding: 15px;
  border-radius: 5px;
`;

const CourseLink = styled(Link)` // Use Link here
  display: inline-block;
  padding: 8px 15px;
  background-color: #253457;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 10px;
`;

const University = () => {
  const { id } = useParams();
  const university = ProgramsData.find(program => program.id.toString() === id);

  useEffect(() => {
    if (university) {
      document.title = `Learnedge - ${university.name}`;
    } else {
      document.title = `Learnedge - Universities`;
    }
    window.scrollTo(0, 0);
  }, [university]);

  if (!university) {
    return <h2>University not found</h2>;
  }

  return (
    <UniversityContainer>
      <BackgroundImage $imageUrl={university.image}>
        <UniversityName>{university.name}</UniversityName>
      </BackgroundImage>
      <CoursesList>
        {university.cources.map((course, index) => (
          <CourseItem key={index}>
            <h3>{course.courceName}</h3>
            <p>Duration: {course.duration}</p>
            <CourseLink to={`/university/${id}/course/${index}`}>
              View Program
            </CourseLink>
          </CourseItem>
        ))}
      </CoursesList>
    </UniversityContainer>
  );
};

export default University;
