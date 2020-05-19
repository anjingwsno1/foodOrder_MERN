import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FoodImg, FoodName, FoodPrice, OrderButton } from "../style";

const useStyles = makeStyles(theme => ({
  root: {
    width: 250,
    backgroundColor: "#f5ebda",
    textAlign: "center",
    paddingBottom: 10
  }
}));

export default function FoodItem(props) {
  const classes = useStyles();
  const index = props.index;
  const item = props.item;

  return (
    <div className={classes.root}>
      <FoodImg src={item.img}></FoodImg>
      <FoodName>{item.name}</FoodName>
      <FoodPrice>$ {item.price}</FoodPrice>
      <OrderButton>start order</OrderButton>
    </div>
  );
}
