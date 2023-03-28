import { Grid } from "@mui/material";
import React from "react";
import "../styles/EventScreenStyle.css";
import "../static/achievement1.png";
import { NewsHeaderCard } from "react-ui-cards";

function EventScreen() {
  return (
    <div className="EventScreen">
      <div className="UpcomingEvent"></div>
      <div className="currentEvent"></div>
      <div className="PastEvent">
        <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
            <div className="event">
              <NewsHeaderCard
                href="https://github.com/nekonee"
                thumbnail="https://i.imgur.com/rLFk5nd.jpg"
                title="Polish mountaineers on the top"
                author="Daily Sport"
                date="Feb 2, 2018"
                tags={["nature", "photo", () => <i>component</i>]}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
            <div className="event"></div>
            <NewsHeaderCard
              href="https://github.com/nekonee"
              thumbnail="https://i.imgur.com/rLFk5nd.jpg"
              title="Polish mountaineers on the top"
              author="Daily Sport"
              date="Feb 2, 2018"
              tags={["nature", "photo", () => <i>component</i>]}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
            <div className="event">
              <NewsHeaderCard
                href="https://github.com/nekonee"
                thumbnail="https://i.imgur.com/rLFk5nd.jpg"
                title="Polish mountaineers on the top"
                author="Daily Sport"
                date="Feb 2, 2018"
                tags={["nature", "photo", () => <i>component</i>]}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default EventScreen;
