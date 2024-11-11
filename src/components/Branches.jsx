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

    .contact-info {
      margin-top: 10px;
      font-size: 1rem;
      color: #555;

      a {
        color: #f0bc5e;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const branches = [
  { name: "Pune", address: "Office No.308, 3rd Floor, Rainbow Plaza, above McDonald's Near Shivar Garden, Pimple Saudagar, Pune, Maharashtra", contact: "+91 86691 66575"  },
  { name: "Muscat", address: "Villa No 12, Way No 3331, PO Box 19, Muscat 100, Oman", contact: "+968 99866458", link: "https://oman.learnedges.com" },
  { name: "Mumbai", address: "A 901, RAJSHREE TOWERS NEAR PRATAP CINEMA, KOLBAD, THANE WEST, MUMBAI, 400601", contact:"+91 77383 33543"},
  { name: "Chennai", address: "Domnic Vijay 1696,H Block,5th Street, Annanagar West, Chennai, Tamilnadu - 600040", contact: "+91 73388 23513 / 8056666902" },
  { name: "Hyderabad", address: "Janapriya Pramila Enclave Uma Nagar, Begumpet, Hyderabad - 500016, Telangana, India, contact: "+91 9394539593" },
  { name: "Dubai"}
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
            <div className="contact-info">
              {branch.contact && <p>Contact: {branch.contact}</p>}
              {branch.name === "Muscat" && (
                <a href={branch.link} target="_blank" rel="noopener noreferrer">Know More</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </BranchesSection>
  );
};

export default Branches;
