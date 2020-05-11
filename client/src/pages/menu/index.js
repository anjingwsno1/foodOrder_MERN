import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import FoodContent from "./components/FoodContent";

import {
  MenuWrapper,
  CategoryWrapper,
  MenuTitle,
  MenuList,
  MenuItem,
  FoodWrapper
} from "./style";

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
                <MenuItem>Burgers</MenuItem>
                <MenuItem>Snacks</MenuItem>
                <MenuItem>Drinks</MenuItem>
              </MenuList>
            </CategoryWrapper>
          </Grid>
          <Grid item lg={9} sm={12}>
            <FoodWrapper>
              <FoodContent></FoodContent>
            </FoodWrapper>
          </Grid>
        </Grid>
      </MenuWrapper>
    </React.Fragment>
  );
}
