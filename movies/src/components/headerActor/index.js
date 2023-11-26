import React from "react";
import ArrowBackIcon from "@mui/icons-materialArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { withRouter } from "react-router-dom";



const ActorHeader = ( { actor, history}) => {
  const classes = {};

  return (
    <Paper component="div" className={classes.root}>
      <IconButton aria-label="go back" onClick={() => history.goBack()} >
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">
        {actor.name}
        {/* <a href={actor.homepage}>
          <HomeIcon color="primary" />
        </a> */}
        <br />
        <span className={classes.tagLine}>{`   "${actor.popularity}"`} </span>
      </Typography>
      <IconButton aria-label="go forward" onClick={() => history.goForward() } >
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default ActorHeader;