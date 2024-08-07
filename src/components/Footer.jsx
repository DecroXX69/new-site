import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'; // Import icons
import { Link } from 'react-router-dom';

// const AppContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
//`;

// const MainContent = styled.main`
//   flex: 1; /* Allows main content to grow and push footer down */
//   padding: 20px; /* Add padding as needed */
// `;

const Footer = styled.footer`
  background-color: #04091e;
  color: #fff;
  padding: 40px 15px;
  width: 100%;
  box-sizing: border-box; /* Includes padding and borders in width calculation */
  font-family: 'Poppins', sans-serif; /* Apply Poppins font */
  overflow: hidden; /* Prevents overflow */
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box; /* Includes padding in width calculation */

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Column = styled.div`
  flex: 1;
  margin: 0 15px;
  box-sizing: border-box; /* Includes padding and margin in width calculation */

  @media (min-width: 769px) {
    &:first-child {
      flex: 2; /* Logo column takes more space */
    }
  }

  h4 {
    margin-bottom: 20px;
    color: #fff; /* Header color */
    font-size: 19px; /* Font size for section headers */
  }

  p, ul, li, a {
    color: #777; /* Text color */
    font-size: 14px; /* Font size for text */
  }

  ul {
    padding: 0;
    list-style: none;
    margin: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  .footer-link{
    text-decoration: none;
    transition: color 0.3s;
  }
  a {
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #f6c298; /* Hover color */
    }
  }
  
  .social-icons {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    justify-content: center;
  }

  @media (max-width: 768px) {
    text-align: left; /* Align text to the left on mobile screens */

    .social-icons{
        justify-content: start;
    }
  }
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 50px; /* Adjust as needed */
    margin-right: 15px;
  }

  @media (max-width: 768px) {
    justify-content: flex-start; /* Align logo to the left on mobile screens */
  }
`;

const FooterBottom = styled.div`
  background-color: #04091e;
  color: #777; /* Text color for copyright */
  padding: 10px 15px;
  text-align: left;
  margin-top: 20px;
  font-size: 14px; /* Font size for copyright text */

  @media (min-width: 769px) {
    text-align: center;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    padding: 10px;
    border: none;
    border-radius: 4px;
    margin-bottom: 10px;
    outline: none;
    font-size: 14px; /* Font size for input */
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: var(--e-global-color-accent); /* Subscribe button color */
    color: #fff;
    cursor: pointer;
    transition:0.3s;
    background-color: #0A2059;
    font-size: 14px; /* Font size for button */
    
    &:hover {
      background-color: #f6c298; /* Hover color */
    }
  }
`;

const FooterComponent = () => {
  return (
    
      
      <Footer>
        <FooterContainer>
          <Column>
            <FooterLogo>
              <img src="images/learnedges logo.png" alt="Logo" />
            </FooterLogo>
            <div>
                <p>Learnedge Solutions Pvt. Ltd.</p>
                <p>
                  Office No.308, 3rd Floor, Rainbow Plaza, above McDonald's<br />
                  Near Shivar Garden, Pimple Saudagar<br />
                  Pune, Maharashtra<br />
                  411027
                </p>
              </div>
          </Column>
          <Column>
            <h4>Quick Links</h4>
            <ul>
              <li><Link className='footer-link' to="/">Home</Link></li>
              <li><Link className='footer-link' to="/cources">Courses</Link></li>
              <li><Link className='footer-link' to="/about">About Us</Link></li>
              <li><Link className='footer-link' to="/blogs">Blogs</Link></li>
              <li><Link className='footer-link' to="/contact">Contact Us</Link></li>
            </ul>
          </Column>
          <Column>
            <h4>Courses</h4>
            <ul>
              <li><a href="#">Graduation</a></li>
              <li><a href="#">Post Graduation</a></li>
              <li><a href="#">Certification</a></li>
              <li><a href="#">Executive Programs</a></li>
            </ul>
          </Column>
          <Column>
            <h4>Contact Us</h4>
            <p>Phone: +91 86691 66575<br />Email: admission@learnedges.com</p>
            <div className="social-icons">
              <a target='_blank' href="https://www.linkedin.com/company/learnedge-solutions/">
                <FaLinkedinIn size={25} />
              </a>
              <a target='_blank' href="https://www.instagram.com/learnedge_solutions/">
                <FaInstagram size={25} />
              </a>
              <a target='_blank' href="https://www.facebook.com/NGASCE.AEP.LEARNEDGE">
                <FaFacebookF size={25} />
              </a>
              <a target='_blank' href="https://www.youtube.com/@learnedgesolutions">
                <FaYoutube size={25} />
              </a>
            </div>
          </Column>
          <Column>
            <h4>Newsletter</h4>
            <p>Stay Updated with our latest news</p>
            <NewsletterForm>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </NewsletterForm>
          </Column>
        </FooterContainer>
        <FooterBottom>
          <p>&copy; 2024 Learnedge Solutions Pvt. Ltd. All rights reserved.</p>
        </FooterBottom>
      </Footer>
    
  );
};

export default FooterComponent;
