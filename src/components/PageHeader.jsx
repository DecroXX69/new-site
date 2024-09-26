import React from 'react';
import styled from 'styled-components';

const PageHeader = ({ title, image }) => {
    return (
        <HeaderWrapper image={image}>
            <div className="overlay">
                <h1>{title}</h1>
            </div>
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 300px; /* Adjust height as needed */
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: top;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:65px;

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7); /* Adjust opacity as needed */
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h1 {
        color: white;
        font-size: 2.5rem; /* Adjust font size as needed */
        z-index: 1;
    }

    @media (max-width: 768px) {
        height: 200px; /* Adjust height for smaller screens */
        background-position: center; /* Center the image for smaller screens */
        h1 {
            font-size: 1.5rem; /* Adjust font size for smaller screens */
        }
    }

    @media (max-width: 480px) {
        height: 150px; /* Adjust height for extra small screens */
        background-position: center; /* Center the image for extra small screens */
        h1 {
            font-size: 1.2rem; /* Adjust font size for extra small screens */
        }
    }
`;

export default PageHeader;
