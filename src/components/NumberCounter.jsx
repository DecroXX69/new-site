import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    
  background-image: url('images/hero1.webp');
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 50px 30px 50px 30px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
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
        animateNumber(coursesRef, 7, 5000);
        animateNumber(studentsRef, 1000, 5000);
        animateNumber(institutionsRef, 10, 5000);
        setAnimationStarted(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when at least 50% of the element is visible
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
      <h1 className="h1 text-light text-center">Why Choose Us?</h1>
      <Container>
        <AnimatedNumber ref={yearRef}>
          <h1 className='h1 text-light'></h1>
          <h6 className='text-light h6'>Years Of Experience</h6>
        </AnimatedNumber>
        <AnimatedNumber ref={coursesRef}>
          <h1 className='h1 text-light'></h1>
          <h6 className='text-light h6'>Expert Consultants</h6>
        </AnimatedNumber>
        <AnimatedNumber ref={studentsRef}>
          <h1 className='h1 text-light'></h1>
          <h6 className='text-light h6'>Happy Students</h6>
        </AnimatedNumber>
        <AnimatedNumber ref={institutionsRef}>
          <h1 className='h1 text-light'></h1>
          <h6 className='text-light h6'>Partnered Institutions</h6>
        </AnimatedNumber>
      </Container>
    </Wrapper>
  );
};

export default NumberCounter;
