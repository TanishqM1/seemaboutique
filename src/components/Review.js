import React, { useState } from 'react';
import styled from 'styled-components';


// Styled components
const ReviewCarouselContainer = styled.div`
  padding: 3rem 0;
  background-color: #f9f9f9;  // Light background for contrast
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CarouselTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-family: 'Great Vibes', cursive;
`;

const CarouselWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  justify-content: center;
`;

const ReviewCardContainer = styled.div`
  display: flex;
  transition: transform 0.3s ease;
`;

const ReviewCard = styled.div`
  background-color: #fff;
  margin: 0 1rem;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;
`;

const ReviewerIcon = styled.div`
  background-color: transparent;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const ReviewerName = styled.h3`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  font-weight: 600;
`;

const ReviewText = styled.p`
  font-size: 1.1rem;  /* Slightly increase font size */
  color: #555;
  margin-bottom: 1rem;
  max-height: 200px;  /* Increase max height to allow more text */
  overflow-y: auto;   /* Add scroll if text overflows */
`;

const StarRating = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Star = styled.span`
  color: ${props => (props.filled ? '#FFD700' : '#ddd')};
  font-size: 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 2rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: #333;
  }
`;

const reviews = [
    { 
      id: 1, 
      name: 'Soni Sadhra', 
      rating: 5, 
      review: 'I’m never disappointed with Seema and her work. I’ve trusted her with all of my outfits and continue to go to her for the past 11 years. She is kind, patient and works with you.', 
      icon: '/path/to/soni-icon.jpg' // Replace with the correct icon path if available
    },
    { 
      id: 2, 
      name: 'Gurpreet Khangura', 
      rating: 5, 
      review: 'The outfits made are so beautiful and she makes them with so much love and care, doesnt matter what your size is she will make it and it comes out gorgeous.', 
      icon: '/path/to/gurpreet-icon.jpg' // Replace with the correct icon path if available
    },
    { 
      id: 3, 
      name: 'Amnit Dhaliwal', 
      rating: 5, 
      review: 'I had the best experience here. My lengha blouse was made to my measurements exactly. Being a bit heavier on top, she was able to perfectly fit it to my proportions whereas other shops have mostly messed it up for me.', 
      icon: '/path/to/amnit-icon.jpg' // Replace with the correct icon path if available
    },
    { 
      id: 4, 
      name: 'Nikita Budwal', 
      rating: 5, 
      review: 'Had the best experience working with Seema. She made the perfect outfit for me. Exactly what I wanted in terms of fit, design, style & color. I cannot wait to wear it!', 
      icon: '/path/to/nikita-icon.jpg' // Replace with the correct icon path if available
    },
    { 
      id: 5, 
      name: 'Kanwaljit Bains', 
      rating: 5, 
      review: 'We had a great experience and it was all run like clockwork. Seema knows her stuff and we would recommend her to anyone.', 
      icon: '/path/to/kanwaljit-icon.jpg' // Replace with the correct icon path if available
    },
    { 
      id: 6, 
      name: 'Parveer Hundal', 
      rating: 5, 
      review: 'After searching at ready made boutiques I came across Seema\'s and decided to go for a consultation on going through the custom route. I am so glad I did, because Seema delivered. My outfit for my sisters engagement turned out exactly how I wanted. Seema is a gifted designer, so passionate and so kind. She works within your budget and provides excellent service. You will not regret going through this route. Highly recommend, and I will definitely be back to order for the wedding week.', 
      icon: '/path/to/parveer-icon.jpg' // Replace with the correct icon path if available
    }
  ];
  

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <ReviewCarouselContainer>
      <CarouselTitle>What Our Customers Say</CarouselTitle>
      <CarouselWrapper>
        <ReviewCardContainer style={{ transform: `translateX(-${currentIndex * 320}px)` }}>
          {reviews.slice(currentIndex, currentIndex + 6).map((review) => (
            <ReviewCard key={review.id}>
              <ReviewerIcon></ReviewerIcon>
              <ReviewerName>{review.name}</ReviewerName>
              <StarRating>
                {[...Array(5)].map((_, index) => (
                  <Star key={index} filled={index < review.rating}>&#9733;</Star>
                ))}
              </StarRating>
              <ReviewText>{review.review}</ReviewText>
            </ReviewCard>
          ))}
        </ReviewCardContainer>
      </CarouselWrapper>
      <ButtonContainer>
        <Button onClick={prevSlide}>&#10094;</Button>
        <Button onClick={nextSlide}>&#10095;</Button>
      </ButtonContainer>
    </ReviewCarouselContainer>
  );
};

export default ReviewCarousel;
