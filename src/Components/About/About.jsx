import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import "./about.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const CostumContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    color: "black",
    padding: "2rem",

    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      flexDirection: "column",
    },
  }));

  return (
    <Box>
      <CostumContainer>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text"
        >
          <p>
            "Art and technology must blend seamlessly. Development is not just functional; it's about creating intuitive, beautiful experiences that inspire and elevate." <span>- John Maeda</span>
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="button_about"
        >
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <button style={{ border: "solid 0.2rem black", color: 'white', backgroundColor: 'black' }}>
                About me
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </CostumContainer>
    </Box>
  );
};

export default About;
