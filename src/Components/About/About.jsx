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
            "True success in one's career is not measured solely by external
            achievements, but by the inner development of wisdom, integrity, and
            the constant pursuit of knowledge." <span>- Socrates</span>
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
            <button style={{ border: "solid 0.2rem black" }}>
            <Link style={{ color: "white" }} to="/about">
              About me
            </Link>
          </button>
          </motion.div>
        </motion.div>
      </CostumContainer>
    </Box>
  );
};

export default About;
