import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import "../styles/LandingSectionStyle.css";
import { Button } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import Particle from "../components/Particle";

function LandingSection() {
  return (
    <section id="LandingSection">
      <div className="tagline">
        <img src="https://i.imgur.com/P0iABw4.png" alt="" />
      </div>
      <div className="landing_img">
        <img src="https://i.imgur.com/TDPSh8f.png" alt="" srcset="" />
      </div>
      <div className="socialmedia">
        <a
          className="sociaLinks"
          href="https://www.youtube.com/c/VSSUTROBOTICS"
        >
          Youtube
        </a>
        <a
          className="sociaLinks"
          href="https://www.instagram.com/vssut_robotics/?hl=en"
        >
          Instagram
        </a>
        <a
          className="sociaLinks"
          href="https://www.facebook.com/vssutrobotics/"
        >
          Facebook
        </a>
      </div>
    </section>
  );
}

export default LandingSection;
