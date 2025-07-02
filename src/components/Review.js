import React, { useState } from 'react';
import styled from 'styled-components';
import picture from '../imgs/boutiquepic.jpg';

//Customer icons for reviews
import soni from '../imgs/soni.png';
import gurpreet from '../imgs/gurpreet.png';
import amnit from '../imgs/amnit.png';
import aman from '../imgs/aman.png';
import kanwaljit from '../imgs/kanwaljit.png';
import kiran from '../imgs/kiran.png';
import nabhi from '../imgs/nabhi.png';
import nav from '../imgs/nav.png';
import nihit from '../imgs/nihit.png';
import nikita from '../imgs/nikita.png';
import parveer from '../imgs/parveer.png';
import sapna from '../imgs/sapna.png';



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
  font-size: 4rem;
  margin-bottom: 2rem;
  font-family: 'Great Vibes', cursive;
`;

const CarouselWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  justify-content: center;
  position: relative;  // To position the buttons within the wrapper
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
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;
`;

const ReviewerIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 1rem;
  overflow: hidden;  // Make sure the image fits the circle
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


const ReviewerName = styled.h3`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  font-weight: 600;
`;

const ReviewText = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1rem;
  max-height: 200px;
  overflow-y: auto;
  text-align: center;
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
  position: absolute;  // Position buttons relative to CarouselWrapper
  top: 50%;
  width: 50%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);  // Center the buttons vertically
  padding: 0 20px;  // Adjust the horizontal padding for a closer position
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
    { id: 1, name: 'Nikita Budwal', rating: 5, review: 'Had the best experience working with Seema and her team! They listened to all my ideas and made my vision come to life. Absolutely love my outfits!', icon: nikita },
    { id: 2, name: 'Nav Nijjar', rating: 5, review: 'Seema did an amazing job with our family outfits. She tailored everything to our needs, and we all felt so comfortable and stylish. Will definitely return for future events!', icon: nav },
    { id: 3, name: 'Nihit Malhotra', rating: 5, review: 'Today me and my wife went there and received a great customer service. They have a good collection of suits and sarees in store at a reasonable price. Kudos to Seema.', icon: nihit },
    { id: 4, name: 'Soni Sadhra', rating: 5, review: 'I’m never disappointed with Seema and her team. The outfits are always perfectly tailored to my needs and the customer service is top-notch!', icon: soni },
    { id: 5, name: 'Gurpreet Khangura', rating: 5, review: 'The outfits made are so beautiful and unique. I love the attention to detail and how everything is made to fit perfectly. Highly recommend!', icon: gurpreet },
    { id: 6, name: 'Amnit Dhaliwal', rating: 5, review: 'I had the best experience here. The team took the time to understand my preferences, and the final design exceeded all expectations. Truly professional and talented!', icon: amnit },
    { id: 7, name: 'Kanwaljit Bains', rating: 5, review: 'We had a great experience, and it was all run like clockwork. The team worked around our schedule and delivered beyond expectations. Will definitely be back for more!', icon: kanwaljit },
    { id: 8, name: 'Parveer Hundal', rating: 5, review: 'After searching at ready-made boutiques, I found Seema’s team. The outfits were exactly what I was looking for, and the service was impeccable. So glad I found them!', icon: parveer },
    { id: 9, name: 'Sapna. B', rating: 5, review: 'I gave Seema and her team a very short time frame to create my outfits, and they delivered perfectly on time. The outfits fit like a glove and the quality is outstanding!', icon: sapna },
    { id: 10, name: 'Aman. Parmar', rating: 5, review: 'Seema and her team were kind and respectful throughout the process. They took my ideas seriously and made suggestions that made the outfits even better than I had imagined!', icon: aman },
    { id: 11, name: 'Nabhi Johal', rating: 5, review: 'Seema provides great customer service and really knows her craft. The outfits were stunning, and she made sure everything was perfect. Highly recommend for any special occasion!', icon: nabhi },
    { id: 12, name: 'Kiran', rating: 5, review: 'Seema was able to design something above and beyond what I expected. The outfits were elegant and comfortable, and the whole experience was seamless!', icon: kiran }
];

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % reviews.length);  // Move forward by 2 and loop back if needed
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + reviews.length) % reviews.length);  // Move back by 2 and loop to end if needed
  };

  // Wraparound logic to return two reviews
  const getDisplayedReviews = () => {
    const firstReview = reviews[(currentIndex) % reviews.length];
    const secondReview = reviews[(currentIndex + 1) % reviews.length];
    return [firstReview, secondReview];
  };

  return (
    <ReviewCarouselContainer>
      <CarouselTitle>Customer Testimonials</CarouselTitle>
      <CarouselWrapper>
        <ReviewCardContainer>
          {/* Show 2 reviews at a time */}
          {getDisplayedReviews().map((review) => (
  <ReviewCard key={review.id}>
    <ReviewerIcon>
      <IconImage src={review.icon || picture} alt={review.name} />  {/* Render the image */}
    </ReviewerIcon>
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

        <ButtonContainer>
          <Button onClick={prevSlide}>&#10094;</Button>
          <Button onClick={nextSlide}>&#10095;</Button>
        </ButtonContainer>
      </CarouselWrapper>
    </ReviewCarouselContainer>
  );
};

export default ReviewCarousel;
