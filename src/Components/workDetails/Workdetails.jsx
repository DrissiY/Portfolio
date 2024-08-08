import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import { Box, styled } from "@mui/material";
import { Container } from "@mui/system";
import Footer from "../../Components/Footer/Footer.jsx";
import { projectData } from "./projectData.js";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./WorkDetails.scss";

const WorkDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const projectKeys = Object.keys(projectData);
  const currentProjectIndex = projectKeys.indexOf(projectId);
  const nextProjectId = projectKeys[(currentProjectIndex + 1) % projectKeys.length];
  const project = projectData[projectId];
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return <div>Project not found</div>;
  }

  const CostumContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    color: "white",
    padding: "0.2rem",
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      flexDirection: "column",
    },
  }));

  const Costumjob = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    color: "white",
    gap: "2rem",
    marginBottom: "10rem",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      flexDirection: "column",
    },
  }));

  const FullWidthImage = styled("img")({
    width: "100%",
    height: "auto",
    marginBottom: "2rem",
    backgroundColor: "black",
    display: "block",
    maxHeight: "500px",
    objectFit: "contain",
    borderRadius: "0px",
  });

  const ImageGrid = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem",
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  }));

  const Image = styled("img")({
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "0px",
    cursor: "pointer", // Make the image look clickable
  });

  const NextButton = styled("button")(({ theme }) => ({
    backgroundColor: "white",
    color: "black",
    borderRadius: "50%",
    border: "none",
    width: "120px",
    height: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    cursor: "pointer",
    margin: "5rem auto",
    transition: "transform 0.3s ease-in-out",
    '&:hover': {
      transform: "scale(1.1)",
    },
  }));

  const handleNextClick = () => {
    window.scrollTo(0, 0);
    navigate(`/work/${nextProjectId}`);
  };

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box sx={{ backgroundColor: "#1E1E1E" }}>
      <Navbar />
      <CostumContainer>
        <div>
          <h1 style={{ fontSize: "200px", fontWeight: "300" }}>{project.title}</h1>
        </div>
      </CostumContainer>
      <div className="work-infos">
        <Costumjob>
          <div className="technologies">
            <h3 style={{ fontWeight: "400" }}>Project Niche</h3>
            <p style={{ fontWeight: "100" }}>{project.niche}</p>
          </div>
          <div className="technologies">
            <h3 style={{ fontWeight: "400" }}>Development</h3>
            <p style={{ fontWeight: "100" }}>{project.development}</p>
          </div>
          <div className="technologies">
            <h3 style={{ fontWeight: "400" }}>Design</h3>
            <p style={{ fontWeight: "100" }}>{project.design}</p>
          </div>
        </Costumjob>
      </div>

      <FullWidthImage src={project.gif} alt={`${project.title} GIF`} />

      <CostumContainer>
        <p style={{ fontSize: "24px", fontWeight: "200" }}>{project.description}</p>
      </CostumContainer>
      <ImageGrid>
        {project.images.map((imgSrc, index) => (
          <Image key={index} src={imgSrc} alt={`Image ${index + 1}`} onClick={() => handleImageClick(imgSrc)} />
        ))}
      </ImageGrid>

      <NextButton onClick={handleNextClick}>
        Next <ArrowForwardIcon style={{ marginLeft: "8px" }} />
      </NextButton>

      {isPreviewOpen && (
        <div className="image-preview-overlay" onClick={closePreview}>
          <div className="image-preview-content">
            <img src={selectedImage} alt="Preview" className="image-preview-img" />
          </div>
        </div>
      )}

      <Footer />
    </Box>
  );
};

export default WorkDetails;
