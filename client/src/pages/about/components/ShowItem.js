import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ShowImg, ShowNumber, ShowContent } from "../style";

const useStyles = makeStyles(theme => ({
  root: {
    width: 200,
    height: 250,
    backgroundColor: "#f5ebda",
    textAlign: "center",
    paddingBottom: 10
  }
}));

export default function ShowItem(props) {
  const classes = useStyles();
  const index = props.index;
  const item = props.item;

  return (
    <div className={classes.root}>
      <ShowImg src={item.img}></ShowImg>
      <ShowNumber>{item.number}</ShowNumber>
      <ShowContent>{item.content}</ShowContent>
    </div>
  );
}
