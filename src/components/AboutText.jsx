import React from 'react';
import styled from 'styled-components';

const AboutText = () => {
  return (
    <Wrapper>
      <div className='container-fluid'>
        <div className='container d-flex flex-column align-items-center'>
          <div className="row">
            <div className="col-md-6 p-4">
              <h1 className='h1 text-center' style={{ color: '#020F55' }}>About Us</h1>
              <p className='fs-30'>
              Learnedge Solutions is a leading EdTech company committed to providing high-quality, innovative online education. We empower students and professionals with industry-recognized programs from top universities, fostering career growth and lifelong learning. Join us to unlock your full potential with flexible, future-ready courses. We believe in empowering learners with the right tools to excel in their chosen fields and make a positive impact on the global stage.
              </p>
            </div>
            <div className="col-md-6 p-4">
              <h1 className='h1 text-center' style={{ color: '#020F55' }}>Our Mission</h1>
              <p className='fs-30'>
                Our mission is to be a leading player in the online learning space and provide quality education to our professionals and students and be lifelong partner in their success journey. The world is growing at fast pace and nothing is stagnant than your learning. We will help you choose the best program suitable for you and direct you towards new age and impactful skills. We support you from program selection to degree attainment and beyond. Empowering lifelong success through quality online education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .fs-30 {
    font-size: 22px;
    text-align: justify;
    color: #020F55;
  }

  @media (max-width: 768px) {
    .fs-30 {
      font-size: 18px;
    }
  }

  @media (min-width: 769px) {
    .fs-30 {
      font-size: 22px;
    }
  }
`;

export default AboutText;
