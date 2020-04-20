import React, { useState, useEffect } from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { HeaderWrapper, Logo } from "./style";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Header() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  const [enableHeader, setEnableHeader] = useState(false);

  const handleScroll = function() {
    if (window.scrollY > 0) {
      setEnableHeader(true);
    } else {
      setEnableHeader(false);
    }
  };

  return (
    <HeaderWrapper className={enableHeader ? "active" : null}>
      <Logo
        className={enableHeader ? "active" : null}
        src={require("../sources/logo.jpeg")}
        alt="The Studio"
      />
      <Breadcrumbs aria-label="breadcrumb" className="breadCrumbs">
        <Link color="inherit" component={RouterLink} to="/">
          About
        </Link>
        <Link color="inherit" component={RouterLink} to="/cakes">
          Cakes
        </Link>
        <Link color="inherit" component={RouterLink} to="/cakes">
          Prices
        </Link>
        <Link color="inherit" component={RouterLink} to="/cakes">
          Blogs
        </Link>
        <Link color="inherit" component={RouterLink} to="/cakes">
          Contact
        </Link>
      </Breadcrumbs>
    </HeaderWrapper>
  );
}
