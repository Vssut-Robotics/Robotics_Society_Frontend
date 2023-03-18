import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import "../styles/LandingSectionStyle.css";
import { Button } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

function LandingSection() {
  return (
    <section id="LandingSection">
      <div className="tagline">
        <img src="https://i.imgur.com/P0iABw4.png" alt="" />
      </div>
      <div className="landing_img">
        <img src="https://i.imgur.com/i0oVIwY.png" alt="" srcset="" />
      </div>
      <div className="socialmedia">
        <Button sx={{ color: "#fff" }} variant="outline">
          <YouTubeIcon
            className="socialIcon"
            href="https://www.youtube.com/c/VSSUTROBOTICS"
            target="_blank"
          />
          <a
            className="sociaLinks"
            href="https://www.youtube.com/c/VSSUTROBOTICS"
          >
            Youtube
          </a>
        </Button>
        <Button sx={{ color: "#fff" }} variant="outline">
          <LinkedInIcon
            className="socialIcon"
            href="https://www.instagram.com/vssut_robotics/?hl=en"
            target="_blank"
            sx={{ color: "white" }}
          />
          <a
            className="sociaLinks"
            href="https://www.instagram.com/vssut_robotics/?hl=en"
          >
            Instagram
          </a>
        </Button>
        <Button sx={{ color: "#fff" }} variant="outline">
          <FacebookIcon
            className="socialIcon"
            target="_blank"
            sx={{ color: "#3b5998" }}
            href="https://www.facebook.com/vssutrobotics/"
          />
          <a
            className="sociaLinks"
            href="https://www.facebook.com/vssutrobotics/"
          >
            Facebook
          </a>
        </Button>
      </div>
    </section>
  );
}

export default LandingSection;
