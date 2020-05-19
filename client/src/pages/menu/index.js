import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import FoodItem from "./components/FoodItem";

import {
  MenuWrapper,
  CategoryWrapper,
  MenuTitle,
  MenuList,
  MenuItem,
  FoodWrapper
} from "./style";
import Wicked_Wings_img from "../../sources/3_Wicked_Wings.jpg";
import BBQ_Bacon_Stacker_Burger_img from "../../sources/BBQ_Bacon_Stacker_Burger.jpg";
import chips_img from "../../sources/chips.jpg";
import Double_Tender_Burger_img from "../../sources/Double_Tender_Burger.jpg";
import mdew_img from "../../sources/mdew.jpg";
import orange_juice_img from "../../sources/orange_juice.jpg";
import Original_Bacon_Cheese_Burger_img from "../../sources/Original_Bacon_Cheese_Burger.jpg";
import pepsi_img from "../../sources/pepsi.jpg";
import Popcorn_Chicken_img from "../../sources/Popcorn_Chicken.jpg";

const tileData = [
  {
    img: Wicked_Wings_img,
    name: "Wicked Wings",
    price: "1",
    type: "snack",
    rating: 4
  },
  {
    img: Popcorn_Chicken_img,
    name: "Popcorn Chicken",
    price: "12",
    type: "snack",
    rating: 3.5
  },
  {
    img: chips_img,
    name: "chips",
    price: "3",
    type: "snack",
    rating: 3
  },
  {
    img: BBQ_Bacon_Stacker_Burger_img,
    name: "BBQ Bacon Stacker Burger",
    price: "13",
    type: "burger",
    rating: 4.5
  },
  {
    img: Double_Tender_Burger_img,
    name: "Double Tender Burger",
    price: "13.5",
    type: "burger",
    rating: 4.2
  },
  {
    img: Original_Bacon_Cheese_Burger_img,
    name: "Original Bacon Cheese Burger",
    price: "14",
    type: "burger",
    rating: 4.4
  },
  {
    img: orange_juice_img,
    name: "orange juice",
    price: "3",
    type: "drink",
    srating: 3.4
  },
  {
    img: pepsi_img,
    name: "pepsi",
    price: "3",
    type: "drink",
    rating: 3.6
  },
  {
    img: mdew_img,
    name: "mountain drew",
    price: "3",
    type: "drink",
    rating: 3.5
  }
];

export default function Menu() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MenuWrapper>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={12}>
            <CategoryWrapper>
              <MenuTitle>Category</MenuTitle>
              <MenuList>
                <MenuItem>All</MenuItem>
                <MenuItem>Burgers</MenuItem>
                <MenuItem>Snacks</MenuItem>
                <MenuItem>Drinks</MenuItem>
              </MenuList>
            </CategoryWrapper>
          </Grid>
          <Grid item lg={9} sm={12}>
            <FoodWrapper>
              <Grid container spacing={3}>
                {tileData.map((object, i) => (
                  <Grid item lg={4} sm={6} xs={12}>
                    <FoodItem item={object} index={i}></FoodItem>{" "}
                  </Grid>
                ))}
              </Grid>
            </FoodWrapper>
          </Grid>
        </Grid>
      </MenuWrapper>
    </React.Fragment>
  );
}
