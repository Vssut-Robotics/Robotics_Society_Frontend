import {
  Card,
  Button,
  Typography,
  CardActionArea,
  CardActions,
  Paper,
  Grid,
} from "@mui/material";
import React from "react";
import "../styles/MemberStyle.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { SimpleGrid } from "@chakra-ui/react";
import AutoFitImage from "react-image-autofit-frame";
import { Box, ThemeProvider, createTheme } from "@mui/system";

function Member({ member, profileImg }) {
  const theme = createTheme({
    palette: {
      background: {
        paper: "#EFF7FF",
      },
      text: {
        primary: "#173A5E",
        secondary: "#46505A",
      },
      action: {
        active: "#001E3C",
      },
      success: {
        dark: "#009688",
      },
    },
  });

  const profilepic =
    "https://devroboticssociety.pythonanywhere.com/" +
    { profileImg }.profileImg;
  return (
    <div className="MemberDiv">
      <div className="member_boc">
        <Card
          variant="outlined"
          style={{ backgroundColor: "#00B2DF", backdropFilter:"blur(7.5px)" }}
          elevation={3}
          className="member_card"
        >
          <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
            <div className="grid">
              <img src={profilepic} alt="" />
            </div>
          </Grid>
          <p>{member.name}</p>
        </Card>
      </div>
    </div>
  );
}

export default Member;
