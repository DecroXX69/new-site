import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import PageHeader from './PageHeader';

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const ContactColumn = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  text-align: center;
  border-right: ${({ hasBorder }) => (hasBorder ? '1px solid #ccc' : 'none')};
  padding: 10px;

  &:last-child {
    border-right: none;
  }

  @media (max-width: 600px) {
    border-right: none;
    margin-bottom: 20px;
  }
`;

const Icon = styled.div`
  font-size: 40px;
  color: #333;
  margin-bottom: 10px;
`;

const ContactInfo = styled.p`
  font-size: 16px;
  color: #333;
  margin: 5px 0;
`;

const FormHeading = styled.h1`
  text-align: center;
  color: rgb(2, 15, 85);
  margin: 20px 0;
`;

const FormSubheading = styled.p`
  text-align: center;
  color: #555;
  margin-bottom: 30px;
  font-size: 18px;
`;

const FormContainer = styled.div`
  width: 80%;
  max-width: 600px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
  text-align: left; /* Align label text to the left */
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: black -3px 3px;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: black -3px 3px;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  width: 50%;
  margin: 0 auto;
  padding: 8px;
  background-color: rgb(160, 180, 200);
  color: #121212;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgb(130, 150, 170);
  }
`;

const MapSection = styled.div`
  width: 95%;
  max-width: 1000px;
  margin: 20px auto;
  

  iframe {
    width: 100%;
    height: 300px;
    border: 0;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    document.title = "Learnedge - Contact";
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/xqkrjrqq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Handle successful form submission here
      alert('Form submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
    } else {
      // Handle errors here
      alert('Failed to submit the form');
    }
  };

  return (
    <div>
      <PageHeader title="CONTACT" image={"images/hero/hero1.webp"} />

      <ContactSection>
        <ContactColumn hasBorder>
          <Icon><FaPhone /></Icon>
          <ContactInfo>+91 86691 66575</ContactInfo>
        </ContactColumn>
        <ContactColumn hasBorder>
          <Icon><FaEnvelope /></Icon>
          <ContactInfo>admission@learnedges.com</ContactInfo>
        </ContactColumn>
        <ContactColumn>
          <Icon><FaMapMarkerAlt /></Icon>
          <ContactInfo> Office No.308, 3rd Floor, Rainbow Plaza, above McDonald's Near Shivar Garden, Pimple Saudagar Pune, Maharashtra 411027</ContactInfo>
        </ContactColumn>
      </ContactSection>

      <FormContainer>
        <FormHeading>Have Questions? We're Here to Answer!</FormHeading>
        <FormSubheading>
          Our friendly team is here to help you every step of the way. Fill out the form below, and we’ll get back to you ASAP. Let’s make your learning journey awesome together!
        </FormSubheading>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter first name"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter last name"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="email">Email address</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </InputGroup>
          <SubmitButton type="submit">Send</SubmitButton>
        </Form>
      </FormContainer>

      <MapSection>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5120899956178!2d73.78562417417149!3d18.59602296686721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9de39a11ab1%3A0xa208e4700ae5543f!2sLearnedge%20Solutions%20Private%20Ltd.!5e0!3m2!1sen!2sin!4v1709446771557!5m2!1sen!2sin"
          width="300"
          height="300"
          style={{ border: '1' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </MapSection>
    </div>
  );
};

export default Contact;
