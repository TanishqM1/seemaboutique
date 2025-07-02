import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import inquirepic from '../imgs/Inquire_Gallery.png';

const InquireContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;

const MainContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h1`
  font-family: 'Great Vibes', cursive;
  font-size: 4rem;
  color: black;
  margin-bottom: 1rem;
  text-align: center;
`;

const DescriptionText = styled.div`
  font-size: 1.3rem;
  color: #555;
  text-align: center;

  p {
    margin: 0;
  }
`;

const Image = styled.img`
  flex: 1;
  min-width: 300px;
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 500px) {
    flex-direction: column;
  }
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
`;

const Answer = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1.5rem;
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
      <MainContent>
        <LeftColumn>
          <DescriptionText>
            <Title>Inquire</Title>
            <p>
              Welcome! I’m so glad you’re here. Please feel free to reach out with any questions, concerns, or to inquire about an order. I’m always happy to help. Your satisfaction truly means the world to me, and I look forward to personally connecting with you. I’ll get back to you as soon as possible!            
            </p>
          </DescriptionText>

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
        </LeftColumn>

        <Image src={inquirepic} alt="Inquire" />
      </MainContent>

      <FAQSection>
        <FAQTitle>Frequently Asked Questions</FAQTitle>

        <ButtonContainer>
          <ToggleButton onClick={() => setActiveSection('women')}>Women's Fashion</ToggleButton>
          <ToggleButton onClick={() => setActiveSection('men')}>Men's Fashion</ToggleButton>
        </ButtonContainer>

        {activeSection === 'women' ? (
          <>
            <Question>How do I choose the right size and fit for my Indian outfit?</Question>
            <Answer>The best and most perfect fit is achieved with made-to-measure clothing.</Answer>
            <Question>What are the latest trends in Indian fashion for women?</Question>
            <Answer>Current trends include statement sleeves, bold colors, and intricate embroidery. You can also experiment with modern silhouettes and fusion styles.</Answer>
            <Question>How do I style my saree for a formal event?</Question>
            <Answer>Choose luxurious fabric, elegant jewelry, and heels. Consider a statement blouse or designer shawl.</Answer>
            <Question>What is the significance of different colors in Indian clothing?</Question>
            <Answer>Red represents love and marriage, while white symbolizes purity and innocence.</Answer>
            <Question>How do I care for my Indian outfits?</Question>
            <Answer>Follow wash instructions, avoid wringing, and store in a cool, dry place. Use dry cleaning when needed.</Answer>
            <Question>What types of fabrics are used?</Question>
            <Answer>Fabrics include cotton, silk, chiffon, georgette, and velvet, each offering different textures and drape.</Answer>
            <Question>How do I accessorize?</Question>
            <Answer>Choose jewelry to match your outfit colors and patterns. Add bangles, bindi, or a clutch.</Answer>
          </>
        ) : (
          <>
            <Question>What is the difference between a kurta and a sherwani?</Question>
            <Answer>A kurta is a casual tunic, while a sherwani is a more formal, long coat often worn for weddings.</Answer>
            <Question>How do I choose the right fit?</Question>
            <Answer>Base your choice on body type and measurements. Ask for designer guidance if unsure.</Answer>
            <Question>What are current trends for men?</Question>
            <Answer>Trends include slim-fit kurtas, bold colors, embroidery, and modern fusion silhouettes.</Answer>
            <Question>How do I style a turban?</Question>
            <Answer>Pick fabric that matches your outfit. Style depends on face shape and event type.</Answer>
            <Question>What do colors signify?</Question>
            <Answer>Light colors represent peace; dark colors are more formal and bold.</Answer>
            <Question>How do I maintain my clothes?</Question>
            <Answer>Follow care tags, store properly, and dry clean delicate items.</Answer>
            <Question>How to accessorize men's outfits?</Question>
            <Answer>Add cufflinks, pocket squares, waistcoats, or brooches for a polished look.</Answer>
          </>
        )}
      </FAQSection>
    </InquireContainer>
  );
}

export default Inquire;
