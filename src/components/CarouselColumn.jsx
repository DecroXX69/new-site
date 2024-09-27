import React from 'react';
import styled from 'styled-components';

const ColumnContainer = styled.div`
  position: relative;
  top: -100px;
  z-index: 3;
  width: 100%;
  display: flex;
  flex-wrap: wrap; /* Allow wrapping of columns on smaller screens */
  justify-content: space-between; /* Space between columns */
  align-items: stretch; /* Make all columns the same height */
  padding: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* Center columns in a column layout */
    gap: 10px;
  }
`;

const ColumnStyled = styled.div`
  flex: 1; /* Allow columns to grow equally */
  text-align: left; /* Align text to the left */
  color: #fff;
  background: rgba(240,188,94,0.7);
  padding: 20px; /* Increased padding for better spacing */
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center icon horizontally */
  
  /* Ensure column height is equal */
  min-height: 250px; /* Minimum height for better appearance */
  
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px; /* Space between icon and text */
    transition: color 0.3s ease; /* Smooth transition for color change */
  }

  h3 {
    margin: 10px 0;
    color: rgba(0, 0, 0, 0.7);
    text-align: center; /* Center the header text */
    display: flex;
    align-items: center;
    gap: 10px; /* Space between icon and text */
    transition: color 0.3s ease; /* Smooth transition for color change */
  }

  p {
    margin: 0;
    color: rgba(0, 0, 0, 0.7);
    text-align: center; /* Align text to the left */
    transition: color 0.3s ease; /* Smooth transition for color change */
  }

  &:hover {
    background: rgba(0, 0, 0, 0.7); /* Optional: Change background color on hover */
    transition: 0.3s;

    .icon-container {
      color: rgba(0, 0, 0, 0.7); /* Change icon color on hover */
    }

    h3 {
      color: rgba(240,188,94,0.7); /* Change header text color on hover */
    }

    p {
      color: rgba(240,188,94,0.7); /* Change paragraph text color on hover */
    }
  }

  @media (max-width: 768px) {
    width: 100%; /* Ensure full width on smaller devices */
    margin-bottom: 20px;
    padding: 15px; /* Adjust padding for mobile view */
    text-align: left; /* Ensure text aligns to the left */
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px; /* Adjust padding further for very small screens */
  }
`;

const CarouselColumn = ({ icon, content1, content2 }) => {
  return (
    <ColumnStyled>
      <h3>{icon}</h3>
      <p>{content1}</p><br />
      <p>{content2}</p>
    </ColumnStyled>
  );
};

export { CarouselColumn, ColumnContainer };
