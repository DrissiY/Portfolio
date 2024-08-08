import React from "react";
import { Box, styled } from "@mui/material";
import { Container } from "@mui/system";
import "./Footer.css";

const Footer = () => {
  const CostumContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
    padding: "2rem",

    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      flexDirection: "column",
    },
  }));
  return (
    <Box sx={{ backgroundColor: "black" }}>
      <CostumContainer>
        <div>
          <h1 style={{ color: "white", fontSize: "100px", fontWeight: "500" }}>
          👋 Let's work <br /> together.
          </h1>
        </div>
        <div>
          <button className="hireme">Hire me</button>
        </div>
      </CostumContainer>
      <CostumContainer>
        <p className="email" style={{ color: "#949494" }}>
          unesdrissi2@gmail.com +212703719535
        </p>
        <div className="lineed"></div>
      </CostumContainer>

      <CostumContainer>
        <div>
          <p style={{ color: "white" }}>
            <span style={{ fontWeight: "500", color: "#949494" }}>Version</span>{" "}
            <br /> 2023{" "}
          </p>
        </div>
        <div style={{ color: "white" }}>
          <p style={{ color: "#fffff" }}>
            <span style={{ fontWeight: "500", color: "#949494" }}>Social</span>{" "}
            <br />{" "}
            <span style={{display:"flex", justifyContent:"space-between", gap:"15px"}}>
              <a>Instagram</a> <a>linkedIn</a> <a>Dribble</a>
            </span>{" "}
          </p>
        </div>
      </CostumContainer>
    </Box>
  );
};

export default Footer;
