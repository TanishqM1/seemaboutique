import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com'; // Install with: npm install emailjs-com
import inquirepic from '../imgs/Inquire_Gallery.png'

// Styled Components
const InquireContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;

const Title = styled.h1`
  font-family: 'Great Vibes', cursive;
  font-size: 3rem;
  color: black;
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
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
  width: 125%;
`;

const Answer = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1.5rem;
  width: 125%;
`;

const ButtonContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2em;
`;

const ToggleButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 1rem;

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

  const [activeSection, setActiveSection] = useState('women');

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
        <Image src={inquirepic} alt="Inquire" />
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

        {/* Buttons to toggle FAQ sections */}
      <ButtonContainer>
        <ToggleButton onClick={() => setActiveSection('women')}>Women's Fashion</ToggleButton>
        <ToggleButton onClick={() => setActiveSection('men')}>Men's Fashion</ToggleButton>
      </ButtonContainer>

        {activeSection === 'women' ? (
          <>
            <Question> How do I choose the right size and fit for my Indian outfit?</Question>
<Answer>The best and most perfect fit is achieved with made-to-measure clothing.</Answer>

<Question> What are the latest trends in Indian fashion for women?</Question>
<Answer>Current trends include statement sleeves, bold colors, and intricate embroidery. You can also experiment with modern silhouettes and fusion styles.</Answer>

<Question> How do I style my saree for a formal event?</Question>
<Answer>To style your saree for a formal event, choose a luxurious fabric like silk or velvet, and pair it with elegant jewelry and heels. Consider adding a statement blouse or a designer shawl for extra flair.</Answer>

<Question> What is the significance of different colors in Indian clothing?</Question>
<Answer>In Indian culture, colors have symbolic meanings. For example, red represents love and marriage, while white symbolizes purity and innocence.</Answer>

<Question> How do I care for and maintain my Indian outfits?</Question>
<Answer>To care for your Indian outfits, follow the washing instructions, avoid wringing or twisting, and store them in a cool, dry place. You may also use fabric protectors or opt for dry cleaning services.</Answer>

<Question> What are the different types of fabrics used in Indian clothing?</Question>
<Answer>Indian clothing uses a variety of fabrics, including cotton, silk, chiffon, georgette, and velvet. Each fabric has its unique texture, drape, and durability, making it suitable for different occasions.</Answer>

<Question> How do I accessorize my Indian outfit with jewelry and other accessories?</Question>
<Answer>To accessorize your Indian outfit, choose jewelry that complements the colors and patterns of your ensemble. You can also add accessories like a bindi, bangles, or a clutch to complete the look.</Answer>
          </>
        ) : (
          <>
            <Question> What is the difference between a kurta and a sherwani?</Question>
            <Answer>A kurta is a long tunic that can be worn with pants or a dhoti, while a sherwani is a long coat that is typically worn for formal occasions.</Answer>

            <Question> How do I choose the right size and fit for my Indian outfit?</Question>
            <Answer>To choose the right size and fit, consider your body type, height, and measurements. You can also consult with a designer or a sales associate for guidance.</Answer>

            <Question> What are the latest trends in Indian fashion for men?</Question>
            <Answer>Some current trends include slim-fit kurtas, bold colors, and intricate embroidery. You can also experiment with modern silhouettes, like jackets and trousers.</Answer>

            <Question> How do I style my turban or pagri?</Question>
            <Answer>To style your turban or pagri, choose a fabric that complements your outfit, and tie it in a way that suits your face shape and occasion.</Answer>

            <Question> What is the significance of different colors in Indian men's clothing?</Question>
            <Answer>Colors like white and beige represent purity and peace, while darker colors like black and maroon are often worn for formal or evening events.</Answer>

            <Question> How do I care for and maintain my Indian clothing?</Question>
            <Answer>Follow the care instructions on your clothing, wash gently, and store it in a cool, dry place. You may also need to dry clean certain fabrics.</Answer>

            <Question> How do I accessorize my Indian men's outfit?</Question>
            <Answer>To accessorize, you can add items like cufflinks, a pocket square, a waistcoat, or a stylish brooch to complement your outfit.</Answer>
          </>
        )}
      </FAQSection>
    </InquireContainer>
  );
}

export default Inquire;
