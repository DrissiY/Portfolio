import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../Navbar/Navbar";
import "./hero.css";
import { styled, Container } from "@mui/material";
import { motion } from "framer-motion";

const Hero = () => {
  const CostumContainer = styled(Container)(({ theme }) => ({
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    padding: "2rem",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      flexDirection: "column",
    },
  }));

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url("https://i.imghippo.com/files/paCx01723324078.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar style={{ backgroundColor: "white" }} />
      <CostumContainer>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="location"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.p
            animate={{
              x: ["-10px", "-5px"],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{ fontSize: "40px" }}
          >
            📍
          </motion.p>
          <p>
            Located in <br /> <span style={{ fontWeight: "600" }}>Morocco</span>{" "}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="job"
          style={{ fontSize: "48px", fontWeight: "300" }}
        >
          <p>
            Designer <br /> <span style={{ color: "#FF8484" }}>&</span>{" "}
            Developer
          </p>
        </motion.div>
      </CostumContainer>

      <div className="name">
        {" "}
        <motion.h1
          animate={{
            translateX: ["100%", "-100%"],
          }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="mine"
        >
          YOUNES-DRISSI
        </motion.h1>
      </div>
    </Box>
  );
};

export default Hero;
