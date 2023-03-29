import { Grid } from "@mui/material";
import React from "react";
import "../styles/EventScreenStyle.css";
import "../static/achievement1.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

function EventScreen() {
  const events_data = require("../jsonFolder/Events.json");
  const past_events = events_data.past_events;

  return (
    <div className="EventScreen">
      <div className="UpcomingEvent"></div>
      <div className="currentEvent"></div>
      <div className="PastGrid">
        {past_events.map((key) => (
          <Grid container className="PastGrid">
            {key.events_under.map((event) => (
              <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
                <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                  <div className="event">
                    <img src={event.poster_link} alt="" srcset="" />
                    <h2>{event.name}</h2>
                    <p>{event.desc}</p>
                  </div>
                </AnimationOnScroll>
              </Grid>
            ))}
          </Grid>
        ))}
      </div>
    </div>
  );
}

export default EventScreen;
