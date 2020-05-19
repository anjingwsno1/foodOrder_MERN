import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import ShowItem from "./components/ShowItem";

import {
  MainWrapper,
  BackgroundImg,
  AboutWrapper,
  HistoryWrapper,
  ShowWrapper,
  AboutTitle,
  AboutContent,
  HistoryTitle,
  HistoryContent
} from "./style";
import show1 from "../../sources/show_1.png";
import show2 from "../../sources/show_2.png";
import show3 from "../../sources/show_3.png";
import show4 from "../../sources/show_4.png";
import ocean from "../../sources/ocean.jpg";

const tileData = [
  {
    img: show1,
    number: "1996",
    content:
      "he first CSC restaurant in Australia opened in 1996 and was located in Sydney, NSW."
  },
  {
    img: show2,
    number: "32+",
    content:
      "Today, CSC has grown to more than 32 restaurants across the country."
  },
  {
    img: show3,
    number: "5",
    content:
      "CSC Australia owns and operates 5 restaurants with the remainder owned by our community of franchisees.    "
  },
  {
    img: show4,
    number: "1500",
    content:
      "We employ more than 1,500 Aussies and serve more than 30 thousand customers weekly.    "
  }
];

export default function About() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MainWrapper>
        <BackgroundImg src={ocean}></BackgroundImg>
        <AboutWrapper>
          <AboutTitle>About Us</AboutTitle>
          <AboutContent>
            CSC landed in Australia in 1996 with our first restaurant in Sydney
            NSW. That was a time when long hair, flower crowns and lava lamps
            were still totally groovy, dude. Today we serve over 30 thousand
            customers a week across 50+ restaurants. And even after all these
            years, the original secret remains under lock and key in our
            headquarters in Chongqing, China. And no, we'll never tell. Nice
            try.
          </AboutContent>
        </AboutWrapper>
        <HistoryWrapper>
          <HistoryTitle>Our History</HistoryTitle>
          <HistoryContent>
            This restaurant chain was founded in 1996 and was originally called
            the village chicken. By 2013, the group had opened a total of 250
            restaurants in Chongqing, Sichuan, Guizhou, Shaanxi, Yunnan and
            other places. the company. The CFO of this restaurant group in 2013
            was Adam Zhao. On April 21, 2016, Village Base was delisted from the
            New York Stock Exchange and began the privatization process. As of
            2019, a total of 600 restaurant bases have been opened
          </HistoryContent>
        </HistoryWrapper>
        <ShowWrapper>
          <Grid container spacing={3}>
            {tileData.map((object, i) => (
              <Grid item lg={3} sm={6} xs={12}>
                <ShowItem item={object} index={i}></ShowItem>{" "}
              </Grid>
            ))}
          </Grid>
        </ShowWrapper>
      </MainWrapper>
    </React.Fragment>
  );
}
