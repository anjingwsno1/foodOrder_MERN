import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import About from "./components/About";
import { BackgroundImg } from "./style";

export default function Cake() {
  return (
    <React.Fragment>
      <CssBaseline />
      <BackgroundImg></BackgroundImg>
      <About />
    </React.Fragment>
  );
}
