import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: fixed;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  transition: top 0.5s ease-in-out;
  width: 50%;
  height: 70vh;
  border-radius: 10px;
  overflow: hidden;
  background-size: cover;
 
  z-index: 1001;

  img {
    width: 100%;
    height: 100%;
    
  }

  @media(max-width:570px){
    width: 70%
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  z-index: 1001;
`;

const Popup2 = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowImage(false);
  };

  return (
    <div>
      {showImage && (
        <ImageContainer style={{ top: '10%' }}>
          <img src="images/ach1.jpeg" alt="Image" />
          <CloseButton onClick={handleClose}>×</CloseButton>
        </ImageContainer>
      )}
    </div>
  );
};

export default Popup2;