import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ProgramsData from '../data/ProgramsData.json';
import PageHeader from './PageHeader';

const CoursesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const CourseCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const UniversityImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CourseDetails = styled.div`
  padding: 15px;
  text-align: left;

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
  }

  span {
    display: block;
    font-size: 16px;
    font-weight: bold;
    color: #0A2059;
  }
`;

const CoursesTypes = ({ courseType }) => {

    useEffect(() => {
        document.title = "Learnedge - Courses";
        window.scrollTo(0, 0);
      }, []);


    const filteredCourses = ProgramsData.filter(program =>
        program.cources.some(course => course.courseType === courseType)
    );
    const pageTitle = `${courseType}`;

    return (
        <>
        <PageHeader title={pageTitle} image={"images/hero/hero2.webp"} />
        <CoursesContainer>
            {filteredCourses.map(program => (
                program.cources
                    .filter(course => course.courseType === courseType)
                    .map((course, index) => (
                        <Link 
                            to={`/course/${program.id}/${index}`} // Define the route with id and courseId
                            key={course.courceName}
                            style={{ textDecoration: 'none' }}
                        >
                            <CourseCard>
                                <UniversityImage 
                                    src={`/${program.image}`} 
                                    alt={program.name} 
                                />
                                <CourseDetails>
                                    <h3>{course.courceName}</h3>
                                    <p>{program.name}</p>
                                    {course.fees && <span>Fees: {course.fees}</span>}
                                </CourseDetails>
                            </CourseCard>
                        </Link>
                    ))
            ))}
        </CoursesContainer>
        </>
    );
};

export default CoursesTypes;
