import React, { useState } from 'react';
import { styled, Container } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const projects = ["teilen", "lba", "lirikai"];

  const getRandomProject = () => {
    const randomIndex = Math.floor(Math.random() * projects.length);
    return projects[randomIndex];
  };

  const handleWorkClick = () => {
    const randomProject = getRandomProject();
    navigate(`/work/${randomProject}`);
    setMenuOpen(false); // Close the menu after navigation
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const CustomContainer = styled(Container)(({ theme }) => ({
    fontFamily: "poppins",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    padding: "2rem",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      gap: theme.spacing(2),
    },
  }));

  return (
    <>
      <CustomContainer>
        <div>
          © Code By <Link style={{ color: "white", textShadow: "#FC0 5px 0 10px" }} to="/">Younes</Link>
        </div>
        <div className='navlist'>
          <ul className='navbar-nav'>
            <li><Link to="/about">About</Link></li>
            <li><span onClick={handleWorkClick} style={{ cursor: "pointer", color: "white" }}>Work</span></li>
            <li><a href="mailto:unesdrissi2@gmail.com" style={{ color: "white" }}>Contact</a></li>
          </ul>
        </div>
        <button className="navbar-button" onClick={toggleMenu}>
          <MenuIcon />
        </button>
      </CustomContainer>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleMenu}>
          <CloseIcon />
        </button>
        <ul className="mobile-navlist">
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><span onClick={handleWorkClick} style={{ cursor: "pointer", color: "white" }}>Work</span></li>
          <li><a href="mailto:unesdrissi2@gmail.com" style={{ color: "white" }}>Contact</a></li>
        </ul>
        <div className="contact-info">
          <p>+212-703-719535</p>
          <p>Email: unesdrissi2@gmail.com</p>
          <p>Location: Morocco</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
