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

const EventSection = styled.div`
  margin-bottom: 40px; /* Adds spacing between event sections */
`;

const EventHeader = styled.h2`
  font-size: 24px;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Adjust minmax value to control image size */
  gap: 15px; /* Space between images */
  justify-items: center; /* Centers items horizontally */
  align-items: center; /* Centers items vertically */

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Smaller screen adjustments */
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Further smaller screen adjustments */
  }
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
  
  // Grouped images by events
  const events = {
    "Learnedge Brand Launching Event": [
      "images/Gallery/rot13.jpeg",
      "images/Gallery/rot14.jpeg",
      "images/Gallery/rot15.jpeg",
      "images/Gallery/rot16.jpeg",
      "images/Gallery/rot20.jpeg",
      "images/Gallery/rot21.jpeg",
      "images/Gallery/rot22.jpeg",
      "images/Gallery/rot23.jpeg",
      "images/Gallery/rot24.jpeg",
      "images/Gallery/rot28.jpeg",
      "images/Gallery/rot40.jpeg",
      "images/Gallery/rot41.jpeg"
    ],
    "Office Celebrations": [
      "images/Gallery/rot2.jpeg",
      "images/Gallery/rot3.jpeg",
      "images/Gallery/rot34.jpeg",
      "images/Gallery/rot37.jpeg",
      "images/Gallery/rot39.jpeg",
      "images/Gallery/rot42.jpeg",
      "images/Gallery/rot48.jpeg",
    ],
    "Special Events": [
      "images/Gallery/rot17.jpg",
      "images/Gallery/rot19.jpg",
      "images/Gallery/rot10.jpg",
      "images/Gallery/rot11.jpg",
      "images/Gallery/rot12.jpg",
      "images/Gallery/rot18.jpg",
      "images/Gallery/rot25.jpeg",
      "images/Gallery/rot26.jpeg",
      "images/Gallery/rot27.jpeg",
      "images/Gallery/rot29.jpeg",
      "images/Gallery/rot30.jpeg",
      "images/Gallery/rot31.jpeg",
      "images/Gallery/rot32.jpeg",
      "images/Gallery/rot35.jpeg",
      "images/Gallery/rot36.jpeg",
      "images/Gallery/rot38.jpeg",
      "images/Gallery/rot45.jpeg",
      "images/Gallery/rot46.jpeg",
      "images/Gallery/rot47.jpeg",
      
    ],
    "Corporate Office": [
      "images/Gallery/rot9.jpg",
      "images/Gallery/rot4.jpg",
      "images/Gallery/rot6.jpg",
      "images/Gallery/rot7.jpg",
      "images/Gallery/rot8.jpg",
      "images/Gallery/rot33.jpeg"
    ]
  };

  return (
    <div>
      <PageHeader title="GALLERY" image="images/hero/hero2.webp" />
      <GalleryContainer>
        {/* Loop through each event and display its images */}
        {Object.keys(events).map((eventName, index) => (
          <EventSection key={index}>
            <EventHeader>{eventName}</EventHeader>
            <GalleryGrid>
              {events[eventName].map((src, imgIndex) => (
                <GalleryImage
                  key={imgIndex}
                  src={src}
                  alt={`${eventName} Image ${imgIndex + 1}`}
                  effect="blur"
                />
              ))}
            </GalleryGrid>
          </EventSection>
        ))}
      </GalleryContainer>
    </div>
  );
};

export default Gallery;
