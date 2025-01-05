import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com'; // Install with: npm install emailjs-com

// Styled Components
const InquireContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: 'Great Vibes', cursive;
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  gap: 1rem;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: black;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  resize: none;
  height: 150px;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: black;
  }
`;

const SubmitButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

function Inquire() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_fa06l9m';
    const templateID = 'template_rw8cypp';
    const userID = '8hGkCqMK8xvp4XupF';

    // EmailJS send form
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        alert('Your message has been sent successfully!');
        setFormData({ name: '', phone: '', email: '', message: '' });
      })
      .catch((error) => {
        alert('There was an error sending your message. Please try again later.');
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <InquireContainer>
      <Title>Inquire</Title>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Phone Number (Optional)"
            value={formData.phone}
            onChange={handleChange}
          />
        </Row>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">Send</SubmitButton>
      </Form>
    </InquireContainer>
  );
}

export default Inquire;
