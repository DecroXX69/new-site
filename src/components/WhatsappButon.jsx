// WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';

const ButtonContainer = styled.a`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: green;
  color: white;
  border-radius: 50%;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  font-size: 30px;
  text-decoration: none;
  
  &:hover {
    background-color: darkgreen;
  }
`;

const WhatsAppButton = () => {
  return (
    <ButtonContainer
      href='https://api.whatsapp.com/send/?phone=8669166575&text=Hello%2C+I+wanted+to+enquire+about+the+courses+you+are+offering&type=phone_number&app_absent=0'
      target='_blank'
      rel='noopener noreferrer'
    >
      <FaWhatsapp />
    </ButtonContainer>
  );
};

export default WhatsAppButton;
