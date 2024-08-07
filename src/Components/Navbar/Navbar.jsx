import React from 'react';
import { Box, styled, Container } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const projects = ["teilen", "lba", "lirikai"];

  const getRandomProject = () => {
    const randomIndex = Math.floor(Math.random() * projects.length);
    return projects[randomIndex];
  };

  const handleWorkClick = () => {
    const randomProject = getRandomProject();
    navigate(`/work/${randomProject}`);
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
      <button className="navbar-button"><MenuIcon /></button>
    </CustomContainer>
  );
};

export default Navbar;
