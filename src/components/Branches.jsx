import React from 'react';
import styled from 'styled-components';

const BranchesSection = styled.section`
  padding: 50px 20px;
  background-color: #f9f9f9;
  text-align: center;

  h2 {
    font-family: "Poppins", sans-serif;
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 30px;
  }

  .branch-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .branch {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px);
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
      color: #f0bc5e;
    }

    p {
      font-size: 1rem;
      color: #555;
    }
  }
`;

const branches = [
  { name: "Pune", address: "123 Marine Drive, Mumbai" },
  { name: "Mumbai", address: "456 Connaught Place, Delhi" },
  { name: "Chennai", address: "789 MG Road, Bangalore" },
  { name: "Hyderabad", address: "321 FC Road, Pune" },
  { name: "Dubai", address: "654 Jubilee Hills, Hyderabad" },
  { name: "Muskat", address: "654 Jubilee Hills, Hyderabad" }
];

const Branches = () => {
  return (
    <BranchesSection>
      <h2>Our Branches</h2>
      <div className="branch-list">
        {branches.map((branch, index) => (
          <div className="branch" key={index}>
            <h3>{branch.name}</h3>
            <p>{branch.address}</p>
          </div>
        ))}
      </div>
    </BranchesSection>
  );
};

export default Branches;
