import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import "../styles/LandingSectionStyle.css";
import { Button } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { HashLink as Link } from "react-router-hash-link";
import Particle from "../components/Particle";
import AboutSection from "./AboutSection";
function LandingSection() {
  return (
    <section id="LandingSection">
      {/* <div className="tagline">
        <img src="https://i.imgur.com/P0iABw4.png" alt="" />
      </div>
      <div className="landing_img">
        <img src="https://i.imgur.com/TDPSh8f.png" alt="" srcset="" />
      </div> */}

      <div className="logos">
        <img
          src="https://i.imgur.com/ll5Lo2D.png"
          className="vssutlogo"
          alt=""
        />
        <img
          src="https://i.imgur.com/jt1R2Z4.png"
          className="clublogo"
          alt=""
        />
      </div>

      <div className="title">
        <p>VSSUT ROBOTICS</p>
        <span className="tagline">WHERE IMMAGINATION MEETS INNOVATION</span>
      </div>

      
      
      {/* <div className="socialmedia">
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
      </div> */}
    </section>
  );
}

export default LandingSection;
