import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ManyImg } from "../style";
import image1 from "../../../sources/back1.jpg";
import image2 from "../../../sources/back2.jpg";
import image3 from "../../../sources/back3.jpg";

const useStyles = makeStyles(theme => ({
  root: {}
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ManyImg src={image1}></ManyImg>
      <ManyImg src={image2}></ManyImg>
      <ManyImg src={image3}></ManyImg>
    </div>
  );
}
