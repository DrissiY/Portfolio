import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Box, styled } from "@mui/material";
import { Container } from "@mui/system";
import mee from "./Assets/meee.jpg";
import Footer from "./Components/Footer/Footer.jsx";


const AboutPage = () => {

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
    marginleft: "10rem",

    marginBottom: "10rem",

    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      flexDirection: "column",
    },
  }));
  const CostumC = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-start",
    alignitems: "flex-start",
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

        <h1 style={{ fontSize: "200px", fontWeight: "300" }}>About</h1>
        <p
          style={{
            fontSize: "36px",
            fontWeight: "200",
            Width: "50%",
            height: "auto",
          }}
        >
          My name’s Younes Drissi, I'm a web developer with extensive experience
          in UI/UX design. My expertise lies in web applications, and the main
          languages in my technology stack are MERN.
        </p>
      </CostumContainer>

      <CostumC>
        <div

        >
          <img
            style={{ width: "50%", height: "auto", float: "right" }}
            src={mee}
            alt="Younes Drissi"
          />
        </div>
        <div>
          <button
            style={{
              float: "right",
              color: "black",
              marginleft: "auto",
              width: "300px",
              cursor: "pointer",
              border: "none",
              backgroundcolor: "red",
              padding: "3rem",
              fontsize: "24px",
              alignitems: "center",
              marginTop: "5rem",
            }}
          >
            CV
          </button>
        </div>
      </CostumC>

      <Costumjob>
        <div>
          <h1 style={{ fontSize: "100px", fontWeight: "300" }}>I do ...</h1>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "3rem",
          }}
        >
          <div className="technologies">
            <h3 style={{ fontWeight: "400" }}>Design</h3>
            <p style={{ fontWeight: "100" }}>
              With a solid track record in designing websites and apps, I
              deliver strong and user-friendly digital designs. Solid company
              branding is the foundation of any succesful website.
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
        </div>
      </Costumjob>
      <Footer></Footer>
    </Box>
  );
};

export default AboutPage;
