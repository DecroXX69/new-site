import React, { useEffect } from 'react';
import styled from 'styled-components';
import PageHeader from './PageHeader';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // For a blur effect during loading

const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Adjust minmax value to control image size */
  gap: 15px; /* Space between images */
`;

const GalleryImage = styled(LazyLoadImage)`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px; /* Optional: Adds rounded corners */
`;

const Gallery = () => {

  useEffect(() => {
    document.title = "Learnedge - Gallery";
    window.scrollTo(0, 0);
  }, []);
  
  const images = [
    "images/Gallery/rot1.jpeg",
    "images/Gallery/rot2.jpeg",
    "images/Gallery/rot3.jpeg",
    "images/Gallery/rot4.jpg",
    "images/Gallery/rot5.jpg",
    "images/Gallery/rot6.jpg",
    "images/Gallery/rot7.jpg",
    "images/Gallery/rot8.jpg",
    "images/Gallery/rot9.jpg",
    "images/Gallery/rot10.jpg",
    "images/Gallery/rot11.jpg",
    "images/Gallery/rot12.jpg",
    
    // Add more image paths as needed
  ];

  return (

    <div>
      <PageHeader title="GALLERY" image="images/hero/hero1.webp" />
      <GalleryContainer>
        <GalleryGrid>
          {images.map((src, index) => (
            <GalleryImage
              key={index}
              src={src}
              alt={`Gallery Image ${index + 1}`}
              effect="blur"
            />
          ))}
        </GalleryGrid>
      </GalleryContainer>
    </div>
  );
};

export default Gallery;
