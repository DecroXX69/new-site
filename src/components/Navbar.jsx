import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Header component styles
const Header = styled.header`
  background-color: ${({ scrolled }) => (scrolled ? 'rgba(0, 0, 0, 0.3)' : 'transparent')};
  backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(5px)' : 'none')};
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px 0;
  z-index: 1000;
  border-bottom: solid 1px #777;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
`;

// Container component styles
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
`;

// Logo component styles
const Logo = styled.div`
  img {
    height: 35px; /* Reduce logo size */
    
    @media (min-width: 769px) {
      height: 45px; /* Slightly larger for larger screens */
    }
  }
`;

// Nav component styles
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: ${({ menuOpen }) => (menuOpen ? '0' : '-100%')}; /* Toggle menu visibility */
  height: 100vh;
  width: 220px; /* Reduce width */
  background: rgba(0, 0, 0, 0.8); /* Background color */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left */
  padding: 60px 0; /* Adjust padding */
  list-style: none;
  transition: left 0.25s ease;
  z-index: 2;

  ul {
    width: 100%;
    padding: 0;
    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align items to the left */
    
    li {
      margin: 10px 0; /* Reduce margin */
      padding: 8px 16px; /* Reduce padding */
      font-size: 14px; /* Adjust font size */
      
      @media (min-width: 769px) {
        font-size: 13px; /* Adjust font size for larger screens */
        margin: 0 15px; /* Adjust margin for larger screens */
        padding: 0;
      }
    }
  }

  @media (min-width: 769px) {
    position: static;
    display: flex;
    flex-direction: row; /* Align links in a row for larger screens */
    align-items: center;
    height: auto; /* Adjust height for larger screens */
    width: auto; /* Adjust width for larger screens */
    background: transparent;
    padding: 0;
    margin-left: auto; /* Align Nav to the right */
    justify-content: center; /* Center content */
    
    ul {
      flex-direction: row; /* Display links in a row */
      align-items: center;
      margin: 0;
    }
  }
`;

// MenuToggle component styles
const MenuToggle = styled.div`
  display: ${({ menuOpen }) => (menuOpen ? 'none' : 'block')};
  cursor: pointer;
  font-size: 24px;
  color: #fff; /* Light color */
  position: absolute;
  top: 20px;
  right: 20px; /* Move the button to the right */
  z-index: 1100;

  @media (min-width: 769px) {
    display: none; /* Hide on larger screens */
  }

  span {
    display: block;
    width: 30px; /* Reduce width */
    height: 3px; /* Reduce height */
    margin-bottom: 5px;
    position: relative;
    background: #fff; /* Light color */
    border-radius: 3px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
      opacity 0.55s ease;
  }

  span:first-child {
    transform-origin: 0% 0%;
  }

  span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
`;

// CloseButton component styles
const CloseButton = styled.div`
  display: ${({ menuOpen }) => (menuOpen ? 'block' : 'none')};
  cursor: pointer;
  font-size: 24px;
  color: #fff;
  position: absolute;
  top: 20px;
  right: 20px; /* Move the button to the same place as the MenuToggle */
  z-index: 1100;

  @media (min-width: 769px) {
    display: none; /* Hide on larger screens */
  }

  span {
    display: block;
    width: 30px; /* Width of the lines forming the X */
    height: 3px; /* Height of the lines forming the X */
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  span:nth-child(2) {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

// NavLinkStyled component styles
const NavLinkStyled = styled(NavLink).attrs({ activeClassName: 'active' })`
  font-family: 'Poppins', sans-serif; /* Apply Poppins font */
  color: #fff;
  text-decoration: none;
  transition: color 0.25s;

  &:hover {
    color: #f6c298; /* Hover color */
    transition: color 0.2s;
  }

  &.active {
    color: #f6c298; /* Active link color */
  }
`;

// Navbar component
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Header scrolled={scrolled}>
      <Container>
        <Logo>
          <NavLink to="/">
            <img src="images/logo1.jpg" alt="Logo" />
            <img src="images/Logo.webp" alt="Logo" />
          </NavLink>
        </Logo>
        <MenuToggle menuOpen={menuOpen} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </MenuToggle>
        <CloseButton menuOpen={menuOpen} onClick={toggleMenu}>
          <span></span>
          <span></span>
        </CloseButton>
        <Nav menuOpen={menuOpen}>
          <ul>
            <li><NavLinkStyled exact to="/" onClick={() => setMenuOpen(false)}>HOME</NavLinkStyled></li>
            <li><NavLinkStyled to="/about" onClick={() => setMenuOpen(false)}>ABOUT</NavLinkStyled></li>
            <li><NavLinkStyled to="/courses" onClick={() => setMenuOpen(false)}>COURSES</NavLinkStyled></li>
            <li><NavLinkStyled to="/services" onClick={() => setMenuOpen(false)}>SERVICES</NavLinkStyled></li>
            <li><NavLinkStyled to="/parteners" onClick={() => setMenuOpen(false)}>PARTENERS</NavLinkStyled></li>
            <li><NavLinkStyled to="/gallery" onClick={() => setMenuOpen(false)}>GALLERY</NavLinkStyled></li>
            <li><NavLinkStyled to="/blogs" onClick={() => setMenuOpen(false)}>BLOGS</NavLinkStyled></li>
            <li><NavLinkStyled to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</NavLinkStyled></li>
          </ul>
        </Nav>
      </Container>
    </Header>
  );
};

export default Navbar;
