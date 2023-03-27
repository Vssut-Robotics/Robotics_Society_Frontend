import { Grid } from "@mui/material";
import React from "react";
import "../styles/FooterStyle.css";

function Footer() {
  return (
    <div className="footer" lg={12}>
      <div className="map">
        <iframe
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=vssut robotics society burla&t=&z=10&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
      <div div className="contact_details">
        <div className="contact">
          <p>Contact Details </p>
          <div className="phone">
            <p>Phone: </p>
            <a href="tel:+917205273725">
              <span> </span>+917205273725
            </a>
          </div>
          <div className="email">
            <p>Email: </p>
            <a href="mail to:vssutrobocon2015@gmail.com">
              <span> </span>vssutrobocon2015@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
