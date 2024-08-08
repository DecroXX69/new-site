import React, { useEffect } from 'react';
import styled from 'styled-components';

// Styled Components
const FormContainer = styled.div`
position: relative;
top: -10px;
  display: flex;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  justify-content: space-between;
  align-items: stretch;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextColumn = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%; /* Ensure full width on smaller devices */
    padding: 15px;
    text-align: center;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  p {
    margin: 0;
    font-size: 1rem;
    color: #333;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }

  .contact-number {
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 10px;
    color: #000;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }

  button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #f6c298;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #e3a67a;
    }

    @media (max-width: 768px) {
      padding: 8px 16px;
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      padding: 6px 12px;
      font-size: 0.8rem;
    }
  }
`;

const ImageColumn = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    border-radius: 10px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

// Component
const ContactUs = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleVideoCall = () => {
    // Open Calendly scheduling for video call
    window.Calendly.initPopupWidget({ url: 'https://calendly.com/your_video_call_link' });
  };

  const handleVoiceCall = () => {
    // Open Calendly scheduling for voice call
    window.Calendly.initPopupWidget({ url: 'https://calendly.com/your_voice_call_link' });
  };

  const handleCallBack = () => {
    // Open Calendly scheduling for callback
    window.Calendly.initPopupWidget({ url: 'https://calendly.com/your_callback_link' });
  };

  return (
    <FormContainer>
      <TextColumn>
        <h1>Online Distance Education Made Easy!</h1>
        <p>For assistance, call us at:</p>
        <p className="contact-number">+91 86691 66575</p>
        <ButtonContainer>
          <button onClick={handleVideoCall}>Arrange Video Call</button>
          <button onClick={handleVoiceCall}>Arrange Voice Call</button>
          <button onClick={handleCallBack}>Call Back</button>
        </ButtonContainer>
      </TextColumn>
      <ImageColumn>
        <img src="images/contact.avif" alt="Support" />
      </ImageColumn>
    </FormContainer>
  );
};

export default ContactUs;
