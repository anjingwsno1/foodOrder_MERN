import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import CakeNav from "./components/CakeNav";
import CakeContent from "./components/CakeContent";
import { CakeWrapper } from "./style";

export default function Cake() {
  return (
    <React.Fragment>
      <CssBaseline />
      <CakeWrapper>
        <CakeNav></CakeNav>
        <CakeContent></CakeContent>
      </CakeWrapper>
    </React.Fragment>
  );
}
