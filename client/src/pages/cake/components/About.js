import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import image from "../../../sources/wedding1.jpg";

const useStyles = makeStyles(theme => ({
  about: {
    position: "absolute",
    top: 900,
    textAlign: "center",
    padding: "auto",
    width: "100vw"
  },
  root: {},
  card: { width: 200, margin: "auto" },
  media: {
    height: 140
  }
}));

export default function About() {
  const tileData = [
    {
      img: image,
      title: "Image1",
      author: "author"
    },
    {
      img: image,
      title: "Image2",
      author: "author"
    },
    {
      img: image,
      title: "Image3",
      author: "author"
    },
    {
      img: image,
      title: "Image4",
      author: "author"
    },
    {
      img: image,
      title: "Image5",
      author: "author"
    },
    {
      img: image,
      title: "Image6",
      author: "author"
    },
    {
      img: image,
      title: "Image7",
      author: "author"
    },
    {
      img: image,
      title: "Image8",
      author: "author"
    }
  ];
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <Typography variant="h2" gutterBottom position="relative">
        Cakes
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        The Studio is a comprehensive professional service for your wedding. We
        co-ordinate photography, video and pre-wedding photo shoots as well as
        makeup services. You can relax in the knowledge that we have in hand all
        your needs in planning your wedding , down to organising wedding
        decorations and floral arrangements.
      </Typography>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {tileData.map((object, i) => (
            <Grid item lg={2} md={3} sm={6} xs={12}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={object.img}
                    title={object.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {object.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {object.author}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
