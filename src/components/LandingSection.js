import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import "../styles/LandingSectionStyle.css";
import { Button } from "@mui/material";

function LandingSection() {
  return (
    <section id="LandingSection">
      <div className="socialmedia">
        <Button sx={{ color: "#fff" }} variant="outline">
          <a href="https://www.youtube.com/c/VSSUTROBOTICS">Youtube</a>
        </Button>
        <Button sx={{ color: "#fff" }} variant="outline">
          <a href="https://www.instagram.com/vssut_robotics/?hl=en">
            Instagram
          </a>
        </Button>
        <Button sx={{ color: "#fff" }} variant="outline">
          <a href="https://www.facebook.com/vssutrobotics/">Facebook</a>
        </Button>
      </div>
    </section>
  );
}

export default LandingSection;
