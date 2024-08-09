import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaArrowRight, FaTimes } from 'react-icons/fa';

const EnquiryButton = styled.button`
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: #f6c298;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px 0 0 5px;
  cursor: pointer;
  z-index: 1000;
  writing-mode: vertical-rl;
  text-orientation: mixed;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 22px;
  }

  @media (max-width: 480px) {
    padding: 6px;
    font-size: 18px;
  }
`;

const PopupOverlay = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const PopupContainer = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 600px;
  max-width: 90%;
  flex-direction: row;
  z-index: 1000;
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 15px;
  }
`;

const FormColumn = styled.div`
  flex: 1;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

const ImageColumn = styled.div`
  flex: 1;
  background-image: url('images/popupform.webp');
  background-size: cover;
  background-position: center;
  border-radius: 10px 0 0 10px;

  @media (max-width: 768px) {
    border-radius: 10px 10px 0 0;
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 150px;
  }
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 768px) {
    padding: 8px;
  }

  @media (max-width: 480px) {
    padding: 6px;
  }
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6c298;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
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

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const EnquiryPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const popupRef = useRef(null);

  const togglePopup = () => {
    setShowPopup(prev => !prev);
  };

  // Handle click outside the popup to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when popup opens
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling when popup closes
    }
  }, [showPopup]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // Show popup after 10 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/xpwardej', {
      method: 'POST',
      'target':'_blank',
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: ''
      });
      togglePopup(); // Close the popup after form submission
    } else {
      alert('Failed to submit the form');
    }
  };

  return (
    <>
      <EnquiryButton onClick={togglePopup}>
        Enquire Now
      </EnquiryButton>
      <PopupOverlay show={showPopup} />
      <PopupContainer ref={popupRef} show={showPopup}>
        <CloseButton onClick={togglePopup}><FaTimes /></CloseButton>
        <ImageColumn />
        <FormColumn>
          <FormTitle>Enquire Now</FormTitle>
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="phone">Phone</Label>
              <Input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </InputGroup>
            <SubmitButtonContainer>
              <SubmitButton type="submit">
                Send <FaArrowRight style={{ marginLeft: '10px' }} />
              </SubmitButton>
            </SubmitButtonContainer>
          </form>
        </FormColumn>
      </PopupContainer>
    </>
  );
};

export default EnquiryPopup;
