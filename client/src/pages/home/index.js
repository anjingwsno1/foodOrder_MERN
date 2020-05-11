import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import AutoImg from "./components/AutoImg";
import Contact from "./components/Contact";

import { HomeImgWrapper } from "./style";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <BackgroundImg></BackgroundImg> */}
      <HomeImgWrapper>
        <AutoImg></AutoImg>
      </HomeImgWrapper>
      <Contact></Contact>
    </React.Fragment>
  );
}
