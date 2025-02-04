import React, { useState } from "react";
import styled from "styled-components";
import Gallery1 from "../imgs/Gal1.jpg";
import Gallery2 from "../imgs/Gal3.JPG";
import Gallery3 from "../imgs/Gal7.JPG";
import Gallery4 from "../imgs/Gal5.JPG";

const images = [
  { src: Gallery1 },
  { src: Gallery2 },
  { src: Gallery3 },
  { src: Gallery4 },
];

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 2rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 80%; /* Adjust as needed */
  overflow: hidden;
`;

const Image = styled.img`
  width: ${({ isFocused }) => (isFocused ? "450px" : "200px")};
  height: auto;
  opacity: ${({ isFocused }) => (isFocused ? "1" : "0.5")};
  transition: all 0.3s ease-in-out;
  margin: 0 1rem;
  border-radius: 10px;
  box-shadow: ${({ isFocused }) =>
    isFocused ? "0 8px 16px rgba(0, 0, 0, 0.2)" : "none"};
`;

const Caption = styled.div`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 2rem;
  font-weight: bold;
`;

const ArrowButton = styled.button`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  color: #333;

  &:hover {
    color: #555;
  }

  ${({ direction }) => direction === "left" && "left: 2rem;"}
  ${({ direction }) => direction === "right" && "right: 2rem;"}
`;

const GalleryImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getImageIndex = (offset) =>
    (currentIndex + offset + images.length) % images.length;

  return (
    <CarouselContainer>
      <ImageWrapper>
        <Image
          src={images[getImageIndex(-1)].src}
          alt="Previous"
          isFocused={false}
        />
        <Image
          src={images[getImageIndex(0)].src}
          alt="Focused"
          isFocused={true}
        />
        <Image
          src={images[getImageIndex(1)].src}
          alt="Next"
          isFocused={false}
        />
      </ImageWrapper>
      <ArrowButton direction="left" onClick={prevImage}>
        {"<"}
      </ArrowButton>

      <ArrowButton direction="right" onClick={nextImage}>
        {">"}
      </ArrowButton>

      <Caption>{images[currentIndex].caption}</Caption>
    </CarouselContainer>
  );
};

export default GalleryImages;
