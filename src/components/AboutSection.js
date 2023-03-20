import React, { useEffect } from "react";
import { Flex, Box } from "@chakra-ui/react";
import "../styles/AboutSectionStyle.css";
import SimpleImageSlider from "react-simple-image-slider";
import { Container, Typography } from "@mui/material";
import "@fontsource/gfs-neohellenic";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AboutSection() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    console.log(inView);
    if (inView) {
      animation.start({
        x: 0,
        transition: { type: "spring", duration: 1, bounce: 0.3 },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView]);
  const images = [
    { url: "https://vssut.ac.in/doc/robogames2.jpg" },
    { url: "https://vssut.ac.in/doc/robogames1.jpg" },
    { url: "https://vssut.ac.in/doc/samavesh.jpg" },
    { url: "http://vssut.ac.in/doc/robotics-school-wokshop.jpg" },
  ];

  return (
    <div ref={ref} bg="#85B5C6" h="680px" id="AboutSection">
      <div className="aboutcontent">
        <p className="about_title">AIM</p>
        <p className="aimcontent">
          Developing new ideas in the field of Robotics and Technology to enable
          students to learn new <span className="capitalize">Technologies</span>
          , assimilate appropriate skills creating innovations which solve real
          world problems and improve the quality of life by training them with
          strength of character, leadership and self-attainment.
        </p>
        <p className="about_title">ABOUT</p>
        <motion.div animate={animation} className="aimcontent">
          The Robotics Club is an
          <span className="capitalize"> OFFICIAL TECHNICAL club</span> of VSSUT,
          Burla which encourages various technical activities and projects in
          the field of amateur as well as advanced Robotics, in the University.
          The members are a bunch of budding technocrats who are driven by an
          acute zest for learning technological advancements and happenings in
          the modern world, and endeavour in applying the theoretical learning
          into realistic projects.
        </motion.div>
      </div>
      <div className="vdo">
        <iframe
          className="vdoframe"
          src="https://www.youtube.com/embed/RhroZl45nQo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default AboutSection;
