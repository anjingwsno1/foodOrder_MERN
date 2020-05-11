import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FoodImg, FoodName, FoodPrice, OrderButton } from "../style";
import Wicked_Wings_img from "../../../sources/3_Wicked_Wings.jpg";
import BBQ_Bacon_Stacker_Burger_img from "../../../sources/BBQ_Bacon_Stacker_Burger.jpg";
import chips_img from "../../../sources/chips.jpg";
import Double_Tender_Burger_img from "../../../sources/Double_Tender_Burger.jpg";
import mdew_img from "../../../sources/mdew.jpg";
import orange_juice_img from "../../../sources/orange_juice.jpg";
import Original_Bacon_Cheese_Burger_img from "../../../sources/Original_Bacon_Cheese_Burger.jpg";
import pepsi_img from "../../../sources/pepsi.jpg";
import Popcorn_Chicken_img from "../../../sources/Popcorn_Chicken.jpg";

const useStyles = makeStyles(theme => ({
  root: {}
}));

export default function FoodContent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FoodImg></FoodImg>
      <FoodName></FoodName>
      <FoodPrice></FoodPrice>
      <OrderButton></OrderButton>
    </div>
  );
}
