import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import {
  ContactImg,
  ContactText,
  ContactPhoneWrapper,
  ContactTitle,
  ContactPhone
} from "../style";
import image1 from "../../../sources/chicken.png";

const useStyles = makeStyles(theme => ({
  root: { marginTop: 30, textAlign: "center" }
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item lg={2} sm={4}>
          <ContactImg src={image1}></ContactImg>
        </Grid>
        <Grid item lg={6} sm={8}>
          {" "}
          <ContactText>
            Regarding a recent spam on KFC Chizza launch promotion which offers
            free Chizza to participants, please be alerted that this is not an
            official promotion of KFC Hong Kong and we reserve all rights to
            pursue legal action against the infringer. For the latest
            information or promotional offers, please visit KFC Hong Kong
            official website, Facebook Page, Instagram, WeChat or mobile app.
          </ContactText>
        </Grid>
        <Grid item lg={4} sm={12}>
          <ContactPhoneWrapper>
            <ContactTitle>Order by Phone: </ContactTitle>
            <ContactPhone>Sydney 0421234567</ContactPhone>
            <ContactPhone>Melbourne 0421234568</ContactPhone>
          </ContactPhoneWrapper>
        </Grid>
      </Grid>
    </div>
  );
}
