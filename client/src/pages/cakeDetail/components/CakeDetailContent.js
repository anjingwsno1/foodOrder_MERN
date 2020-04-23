import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import {
  CakeDetailName,
  CakeDetailPrice,
  CakeDetailRating,
  CakeDetailDetail
} from "../style";

const useStyles = makeStyles(theme => ({
  root: {}
}));

export default function CakeDetailContent(props) {
  const classes = useStyles();
  const id = props.id;
  const tileData = props.tileData;

  return (
    <div className={classes.root}>
      <CakeDetailName>{tileData[id].name}</CakeDetailName>
      <CakeDetailRating>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating
            name="read-only"
            value={tileData[id].rating}
            precision={0.1}
            size="small"
            readOnly
          />
        </Box>
      </CakeDetailRating>
      <CakeDetailPrice>$ {tileData[id].price}</CakeDetailPrice>
      <CakeDetailDetail>{tileData[id].detail}</CakeDetailDetail>
    </div>
  );
}
