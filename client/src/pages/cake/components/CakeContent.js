import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

import image from "../../../sources/cake2.webp";

import {
  SingleContentWrapper,
  SingleContentImg,
  SingleContentPrice,
  SingleContentRating,
  SingleContentName
} from "../style";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    padding: "20px 10vw",
    width: "100vw"
  },
  rating: {
    marginBottom: 0
  }
}));
const tileData = [
  {
    img: image,
    name: "草莓芝士蛋糕",
    price: "35",
    rating: 4
  },
  {
    img: image,
    name: "草莓小蛋糕",
    price: "44.5",
    rating: 3
  },
  {
    img: image,
    name: "草莓生日蛋糕",
    price: "88",
    rating: 2
  },
  {
    img: image,
    name: "巧克力小蛋糕",
    price: "89",
    rating: 4.5
  },
  {
    img: image,
    name: "巧克力芝士蛋糕",
    price: "124",
    rating: 4.2
  },
  {
    img: image,
    name: "巧克力生日蛋糕",
    price: "545",
    rating: 4.4
  },
  { img: image, name: "香草生日蛋糕", price: "255", rating: 4.9 },
  {
    img: image,
    name: "香草芝士蛋糕",
    price: "333",
    rating: 4.8
  }
];

export default function CakeContent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {tileData.map((object, i) => (
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <SingleContentWrapper>
              <Link
                color="inherit"
                component={RouterLink}
                to={"/cakeDetail/" + i}
              >
                <SingleContentImg
                  src={object.img}
                  alt="The Studio"
                ></SingleContentImg>
                <SingleContentRating>
                  <Box
                    className={classes.rating}
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                  >
                    <Rating
                      name="read-only"
                      value={object.rating}
                      precision={0.1}
                      size="small"
                      readOnly
                    />
                  </Box>
                </SingleContentRating>
                <SingleContentPrice>$ {object.price}</SingleContentPrice>
                <SingleContentName>{object.name}</SingleContentName>
              </Link>
            </SingleContentWrapper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
