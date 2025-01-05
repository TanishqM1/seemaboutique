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
  text-align: center;
`;

const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  gap: 2rem;
  width: 100%;
  max-width: 900px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DescriptionText = styled.div`
  flex: 1;
  font-size: 1.2rem;
  color: #555;

  p {
    margin: 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  gap: 1rem;
  margin-bottom: 3rem;
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

const FAQSection = styled.div`
  width: 100%;
  max-width: 900px;
  margin-top: 3rem;
`;

const FAQTitle = styled.h2`
  font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Question = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Answer = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
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
      <DescriptionContainer>
        <DescriptionText>
          <Title>Inquire</Title>
          <p>
            Welcome to our Inquire page! Feel free to reach out with any questions, concerns, 
            or to inquire about an order. We are here to help and look forward to hearing from you.
          </p>
        </DescriptionText>
        <Image src="/path-to-your-image.jpg" alt="Inquire" />
      </DescriptionContainer>

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

      <FAQSection>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        <Question>1. How do I place an order?</Question>
        <Answer>You can place an order by contacting us through this page or visiting our store.</Answer>

        <Question>2. What payment methods do you accept?</Question>
        <Answer>We accept all major credit cards, PayPal, and cash payments in-store.</Answer>

        <Question>3. Can I modify or cancel my order?</Question>
        <Answer>Yes, please contact us as soon as possible if you need to modify or cancel your order.</Answer>
      </FAQSection>
    </InquireContainer>
  );
}

export default Inquire;
