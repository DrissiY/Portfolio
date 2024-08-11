import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import { Box, styled } from "@mui/material";
import { Container } from "@mui/system";
import Footer from "../../Components/Footer/Footer.jsx";
import { projectData } from "./projectData.js";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Loader from "../../Components/loader/Loader.jsx";
import { useMediaQuery } from "@mui/material";
import "./WorkDetails.scss";

const WorkDetails = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const { projectId } = useParams();
  const navigate = useNavigate();
  const projectKeys = Object.keys(projectData);
  const currentProjectIndex = projectKeys.indexOf(projectId);
  const nextProjectId = projectKeys[(currentProjectIndex + 1) % projectKeys.length];
  const project = projectData[projectId];
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const loadAssets = async () => {
      const cacheKey = `project_${projectId}_cached`;
      const isDataCached = localStorage.getItem(cacheKey);

      if (!isDataCached) {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate loading time
        localStorage.setItem(cacheKey, 'true');
      }

      setIsLoading(false);
    };

    loadAssets();
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
    cursor: "pointer",
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
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Navbar />
          <CostumContainer>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
                <h1 style={{ fontSize: isMobile ? "80px" : "200px", fontWeight: "300" }}>{project.title}</h1>
            </motion.div>
          </CostumContainer>
          <div className="work-infos">
            <Costumjob>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="technologies">
                  <h3 style={{ fontWeight: "400" }}>Project Niche</h3>
                  <p style={{ fontWeight: "100" }}>{project.niche}</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="technologies">
                  <h3 style={{ fontWeight: "400" }}>Development</h3>
                  <p style={{ fontWeight: "100" }}>{project.development}</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="technologies">
                  <h3 style={{ fontWeight: "400" }}>Design</h3>
                  <p style={{ fontWeight: "100" }}>{project.design}</p>
                </div>
              </motion.div>
            </Costumjob>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FullWidthImage src={project.gif} alt={`${project.title} GIF`} />
          </motion.div>

          <CostumContainer>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p style={{ fontSize: "24px", fontWeight: "200" }}>{project.description}</p>
            </motion.div>
          </CostumContainer>

          <ImageGrid>
            {project.images.map((imgSrc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image src={imgSrc} alt={`Image ${index + 1}`} onClick={() => handleImageClick(imgSrc)} />
              </motion.div>
            ))}
          </ImageGrid>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <NextButton onClick={handleNextClick}>
              Next <ArrowForwardIcon style={{ marginLeft: "8px" }} />
            </NextButton>
          </motion.div>

          {isPreviewOpen && (
            <div className="image-preview-overlay" onClick={closePreview}>
              <div className="image-preview-content">
                <img src={selectedImage} alt="Preview" className="image-preview-img" />
              </div>
            </div>
          )}

          <Footer />
        </>
      )}
    </Box>
  );
};

export default WorkDetails;
