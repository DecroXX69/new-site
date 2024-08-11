import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import ProgramsData from '../data/ProgramsData.json';
import FAQs from './FAQs';

const CourseContainer = styled.div`
  font-family: 'Poppins', sans-serif;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  color: #253457;
  margin-bottom: 20px;
  text-align: center;
`;

const SubHeader = styled.h2`
  font-size: 2rem;
  color: #4f4f4f;
  margin-bottom: 30px;
  text-align: center;
`;

const ProgramDetails = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 30px;
  text-align: center;
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
  margin-bottom: 40px;
`;

const UniversityName = styled.h1`
  font-size: 3rem;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  margin: 0;
`;

const ProgramStructure = styled.div`
  margin-top: 30px;
`;

const SemesterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SemesterTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  border: 1px solid #ddd;
`;

const SemesterHeader = styled.th`
  font-size: 1.5rem;
  color: #253457;
  background-color: #f0f0f0;
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
`;

const SyllabusItem = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  font-size: 1rem;
`;

const EligibilitySection = styled.div`
  margin-top: 40px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  text-align: left;
`;

const EligibilityHeader = styled.h3`
  font-size: 1.5rem;
  color: #253457;
  margin-bottom: 10px;
`;

const EligibilityList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const EligibilityItem = styled.li`
  margin-bottom: 10px;
`;

const CourseFees = styled.div`
  margin-top: 30px;
  background-color: #e7f3ff;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  font-size: 1.2rem;
  color: #253457;
`;

const BackLink = styled(Link)`
  display: block;
  margin-top: 40px;
  padding: 10px 15px;
  background-color: #253457;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
`;

const CourseDetails = () => {
  const { id, courseId } = useParams();
  const university = ProgramsData.find(program => program.id.toString() === id);
  const course = university?.cources.find((course, index) => index.toString() === courseId);

  useEffect(() => {
    if (university && course) {
      document.title = `Learnedge - ${course.courceName} | ${university.name}`;
    } else {
      document.title = `Learnedge - Course Details`;
    }
    window.scrollTo(0, 0);
  }, [university, course]);

  if (!university || !course) {
    return <h2>Course not found</h2>;
  }

  return (
    <CourseContainer>
      <BackgroundImage $imageUrl={university.image}>
        <UniversityName>{university.name}</UniversityName>
      </BackgroundImage>
      <Header>{course.courceName}</Header>
      <SubHeader>{university.name}</SubHeader>
      <ProgramDetails>
        <p>Duration: {course.duration}</p>
        <p>{course.details}</p>
      </ProgramDetails>
      
      {course.programStructure && course.programStructure.length > 0 && (
        <ProgramStructure>
          <h2>Programme Structure</h2>
          <SemesterGrid>
            {course.programStructure.map((semester, index) => (
              <SemesterTable key={index}>
                <thead>
                  <tr>
                    <SemesterHeader>{semester.sem}</SemesterHeader>
                  </tr>
                </thead>
                <tbody>
                  {semester.syllabus.map((subject, idx) => (
                    <tr key={idx}>
                      <SyllabusItem>{subject}</SyllabusItem>
                    </tr>
                  ))}
                </tbody>
              </SemesterTable>
            ))}
          </SemesterGrid>
        </ProgramStructure>
      )}
      {course.eligibility && course.eligibility.forIndianStudents && (
        <EligibilitySection>
          <EligibilityHeader>Eligibility</EligibilityHeader>
          <EligibilityList>
            {course.eligibility.forIndianStudents.map((item, index) => (
              <EligibilityItem key={index}>{item}</EligibilityItem>
            ))}
          </EligibilityList>
        </EligibilitySection>
      )}
      {course.fees && (
        <CourseFees>
          <p>Course Fees: {course.fees}</p>
        </CourseFees>
      )}
      <BackLink to={`/university/${id}`}>Back to University</BackLink>

      <FAQs/>
    </CourseContainer>
  );
};

export default CourseDetails;
