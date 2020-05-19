import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { HeaderWrapper, Logo, LinkWrapper, SingleLinkBlock } from "./style";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    color: "white"
  }
}));

export default function Header() {
  const classes = useStyles();

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
      <FormControl variant="outlined" className={classes.formControl}>
        {" "}
        <Logo
          className={enableHeader ? "active" : null}
          src={require("../sources/logo.jpg")}
          alt="The Studio"
        />
      </FormControl>{" "}
      <FormControl variant="outlined" className={classes.formControl}>
        <LinkWrapper>
          <Link color="inherit" underline="none" component={RouterLink} to="/">
            Home
          </Link>
        </LinkWrapper>
      </FormControl>{" "}
      <FormControl variant="outlined" className={classes.formControl}>
        <LinkWrapper>
          <Link color="inherit" component={RouterLink} to="/menu">
            Menu
          </Link>
        </LinkWrapper>
      </FormControl>{" "}
      <FormControl variant="outlined" className={classes.formControl}>
        <LinkWrapper>
          <Link color="inherit" component={RouterLink} to="/about">
            About
          </Link>
        </LinkWrapper>
      </FormControl>{" "}
      <FormControl variant="outlined" className={classes.formControl}>
        <LinkWrapper>
          {" "}
          <Link color="inherit" component={RouterLink} to="/location">
            Location
          </Link>
        </LinkWrapper>
      </FormControl>
      {/* <Breadcrumbs aria-label="breadcrumb" className="breadCrumbs">
        <Link color="inherit" component={RouterLink} to="/">
          About
        </Link>
        <Link color="inherit" component={RouterLink} to="/cakes">
          Cakes
        </Link>
        <Link color="inherit" component={RouterLink} to="/prices">
          Prices
        </Link>
        <Link color="inherit" component={RouterLink} to="/cakes">
          Blogs
        </Link>
        <Link color="inherit" component={RouterLink} to="/cakes">
          Contact
        </Link>
      </Breadcrumbs> */}
    </HeaderWrapper>
  );
}
