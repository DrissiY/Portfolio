import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Box, styled } from "@mui/material";
import { Container } from "@mui/system";
import CV from './Assets/CV.pdf';
import Footer from "./Components/Footer/Footer.jsx";
import { useMediaQuery } from "@mui/material";


const AboutPage = () => {
   const meee = "https://i.imghippo.com/files/YWFYL1723439055.jpg";
  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const CostumContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    color: "white",
    padding: "0.2rem",

    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      flexDirection: "column",
    },
  }));

  const Costumjob = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    color: "white",
    padding: "2rem",
    marginLeft: "10rem",
    marginBottom: "10rem",

    [theme.breakpoints.down("md")]: {
      alignItems: "center",
      flexDirection: "column",
      padding: "0.2rem",
      marginLeft: "1rem",
      marginBottom: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      flexDirection: "column",
      padding: "0.2rem",
      marginLeft: "1rem",
      marginBottom: "1rem",
    },
  }));

  const CostumC = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    color: "white",
    padding: "0.2rem",

    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      flexDirection: "column",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#1E1E1E" }}>
      <Navbar />
      <CostumContainer>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={{ fontSize: isMobile ? "80px" : "200px", fontWeight: "300" }}>About</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p
            style={{
              fontSize: "36px",
              fontWeight: "200",
              padding: "1rem",
              width: "90%",
              height: "auto",
            }}
          >
            My name’s Younes Drissi, I'm a web developer with extensive
            experience in UI/UX design. My expertise lies in web applications,
            and the main languages in my technology stack are MERN.
          </p>
        </motion.div>
      </CostumContainer>

      <CostumC>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            style={{ width: "50%", height: "auto", float: "right" }}
            src={meee}
            alt="Younes Drissi"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a href={CV} download="Younes-Drissi-CV.pdf">
            <button
              style={{
                float: "right",
                color: "black",
                marginLeft: "auto",
                width: "300px",
                cursor: "pointer",
                border: "none",
                backgroundColor: "white",
                padding: "3rem",
                fontSize: "24px",
                alignItems: "center",
                marginTop: "5rem",
              }}
            >
              Download CV
            </button>
          </a>
        </motion.div>
      </CostumC>

      <Costumjob>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={{ fontSize: "100px", fontWeight: "300" }}>I do ...</h1>
        </motion.div>
        <div className="techn">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "3rem",
            flexDirection: isMobile ? "column" : "row", // Adjusts based on screen size
          }}
        >
          <div className="technologies">
            <h3 style={{ fontWeight: "400" }}>Design</h3>
            <p style={{ fontWeight: "100" }}>
              With a solid track record in designing websites and apps, I
              deliver strong and user-friendly digital designs. Solid company
              branding is the foundation of any successful website.
            </p>
          </div>
          <div className="technologies">
            <h3 style={{ fontWeight: "400" }}>Front-end</h3>
            <p style={{ fontWeight: "100" }}>
              Proficient in React framework for dynamic UIs. Skilled in Tailwind
              CSS for rapid styling and native CSS for custom designs.
            </p>
          </div>
          <div className="technologies">
            <h3 style={{ fontWeight: "400" }}>Back-end</h3>
            <p style={{ fontWeight: "100" }}>
              Experienced in Node.js backend development with Express.js.
              Proficient in building robust server-side applications and
              handling API integrations effectively.
            </p>
          </div>
        </motion.div>
        </div>

      </Costumjob>
      <Footer />
    </Box>
  );
};

export default AboutPage;
