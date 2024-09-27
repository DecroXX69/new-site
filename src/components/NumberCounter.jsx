import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  top: -70px;
  background-image: url('images/hero1.webp');
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 50px 30px 50px 30px;
  height: 400px;
  padding-top: 100px;

  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AnimatedNumber = styled.div`
  text-align: center;
`;

const NumberCounter = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const yearRef = useRef(null);
  const coursesRef = useRef(null);
  const studentsRef = useRef(null);
  const institutionsRef = useRef(null);

  const animateNumber = (elementRef, targetNumber, duration) => {
    const start = performance.now();
    const element = elementRef.current.querySelector('h1');

    const animate = (time) => {
      const elapsed = time - start;
      const progress = Math.min(1, elapsed / duration);
      const current = Math.round(progress * targetNumber);
      element.innerText = current + '+';

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.innerText = targetNumber + '+';
      }
    };

    requestAnimationFrame(animate);
  };

  const handleIntersect = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animationStarted) {
        animateNumber(yearRef, 40, 5000);
        animateNumber(coursesRef, 25, 5000);
        animateNumber(studentsRef, 2500, 5000);
        animateNumber(institutionsRef, 15, 5000);
        setAnimationStarted(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    });

    observer.observe(yearRef.current);
    observer.observe(coursesRef.current);
    observer.observe(studentsRef.current);
    observer.observe(institutionsRef.current);

    return () => {
      observer.disconnect();
    };
  }, [animationStarted]);

  return (
    <Wrapper>
      <h1 className="h1 text-center" style={{ color: '#f0bc5e' }}>Why Choose Us?</h1>
      <Container>
        <AnimatedNumber ref={yearRef}>
          <h1 className='h1' style={{ color: '#f0bc5e' }}></h1>
          <h6 className='h6' style={{ color: '#f0bc5e' }}>Years Of Experience</h6>
        </AnimatedNumber>
        <AnimatedNumber ref={coursesRef}>
          <h1 className='h1' style={{ color: '#f0bc5e' }}></h1>
          <h6 className='h6' style={{ color: '#f0bc5e' }}>Expert Consultants</h6>
        </AnimatedNumber>
        <AnimatedNumber ref={studentsRef}>
          <h1 className='h1' style={{ color: '#f0bc5e' }}></h1>
          <h6 className='h6' style={{ color: '#f0bc5e' }}>Happy Students</h6>
        </AnimatedNumber>
        <AnimatedNumber ref={institutionsRef}>
          <h1 className='h1' style={{ color: '#f0bc5e' }}></h1>
          <h6 className='h6' style={{ color: '#f0bc5e' }}>Partnered Institutions</h6>
        </AnimatedNumber>
      </Container>
    </Wrapper>
  );
};

export default NumberCounter;
