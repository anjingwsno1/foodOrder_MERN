import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  LocationImg,
  LocationName,
  LocationPhone,
  LocationEmail,
  LocationAddress
} from "../style";

const useStyles = makeStyles(theme => ({
  root: {
    width: 250,
    textAlign: "center",
    paddingBottom: 10,
    border: "1px solid rgba(0,0,0,.125)"
  }
}));

export default function LocationItem(props) {
  const classes = useStyles();
  const index = props.index;
  const item = props.item;

  return (
    <div className={classes.root}>
      <LocationImg src={item.img}></LocationImg>
      <LocationName>{item.name}</LocationName>
      <LocationPhone>{item.phone}</LocationPhone>
      <LocationEmail>{item.email}</LocationEmail>
      <LocationAddress>{item.address}</LocationAddress>
    </div>
  );
}
