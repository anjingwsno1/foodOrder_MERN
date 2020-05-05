import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import About from "./components/About";
import AutoImg from "./components/AutoImg";

import { HomeImgWrapper } from "./style";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <BackgroundImg></BackgroundImg> */}
      <HomeImgWrapper>
        <AutoImg></AutoImg>
      </HomeImgWrapper>
      <About />
    </React.Fragment>
  );
}
