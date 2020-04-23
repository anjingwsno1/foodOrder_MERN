import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

import CakePicWrapper from "./components/CakePicWrapper";
import CakeDetailContent from "./components/CakeDetailContent";
import { CakeDetailWrapper } from "./style";
import image from "../../sources/cake2.webp";

const tileData = [
  {
    img: image,
    name: "草莓芝士蛋糕",
    price: "35",
    rating: 4,
    imgs: [image, image],
    detail:
      "非常好吃，纯天然手工制作非常好吃，纯天然手工制作非常好吃，纯天然手工制作非常好吃，纯天然手工制作非常好吃，纯天然手工制作非常好吃，纯天然手工制作非常好吃，纯天然手工制作非常好吃，纯天然手工制作非常好吃，纯天然手工制作非常好吃，纯天然手工制作"
  },
  {
    img: image,
    name: "草莓小蛋糕",
    price: "44.5",
    rating: 3,
    imgs: [image, image, image]
  },
  {
    img: image,
    name: "草莓生日蛋糕",
    price: "88",
    rating: 2,
    imgs: [image, image]
  },
  {
    img: image,
    name: "巧克力小蛋糕",
    price: "89",
    rating: 4.5,
    imgs: [image, image, image]
  },
  {
    img: image,
    name: "巧克力芝士蛋糕",
    price: "124",
    rating: 4.2,
    imgs: [image, image, image, image]
  },
  {
    img: image,
    name: "巧克力生日蛋糕",
    price: "545",
    rating: 4.4,
    imgs: [image, image, image, image]
  },
  {
    img: image,
    name: "香草生日蛋糕",
    price: "255",
    rating: 4.9,
    imgs: [image, image, image, image, image]
  },
  {
    img: image,
    name: "香草芝士蛋糕",
    price: "333",
    rating: 4.8,
    imgs: [image, image, image]
  }
];

const useStyles = makeStyles({
  content: {}
});

export default function CakeDetail(props) {
  const classes = useStyles;
  const id = props.match.params.id;
  return (
    <React.Fragment>
      <CssBaseline />
      <CakeDetailWrapper>
        <Grid container spacing={3}>
          <Grid item lg sm={2}></Grid>
          <Grid item lg={4} sm={8}>
            <CakePicWrapper id={id} tileData={tileData}></CakePicWrapper>{" "}
          </Grid>
          <Grid item lg sm={2}></Grid>
          <Grid item lg sm={2}></Grid>
          <Grid item lg={6} sm={8}>
            <CakeDetailContent
              className={classes.content}
              id={id}
              tileData={tileData}
            ></CakeDetailContent>{" "}
          </Grid>{" "}
          <Grid item lg sm={2}></Grid>
        </Grid>
      </CakeDetailWrapper>
    </React.Fragment>
  );
}
