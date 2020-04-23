import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  nav: {
    textAlign: "left",
    paddingLeft: "10vw",
    width: "100vw"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  searchBtn: {
    height: 55,
    minWidth: 120
  }
}));

export default function CakeNav() {
  const classes = useStyles();
  const [type, setType] = React.useState("");
  const [flavor, setFlavor] = React.useState("");
  const [price, setPrice] = React.useState("");

  const handleTypeChange = event => {
    setType(event.target.value);
  };
  const handleFlavorChange = event => {
    setFlavor(event.target.value);
  };
  const handlePriceChange = event => {
    setPrice(event.target.value);
  };

  return (
    <div className={classes.nav}>
      {/* <Logo src={require("../../../sources/logo.jpeg")} alt="The Studio" /> */}
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">种类</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={type}
          onChange={handleTypeChange}
          label="Type"
        >
          <MenuItem value="">
            <em>所有</em>
          </MenuItem>
          <MenuItem value={"smallCake"}>小蛋糕</MenuItem>
          <MenuItem value={"cheeseCake"}>芝士蛋糕</MenuItem>
          <MenuItem value={"birthdayCake"}>生日蛋糕</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">口味</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={flavor}
          onChange={handleFlavorChange}
          label="Flavor"
        >
          <MenuItem value="">
            <em>所有</em>
          </MenuItem>
          <MenuItem value={"berry"}>草莓</MenuItem>
          <MenuItem value={"chocolate"}>巧克力</MenuItem>
          <MenuItem value={"vanilla"}>香草</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">价格</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={price}
          onChange={handlePriceChange}
          label="Price"
        >
          <MenuItem value="">
            <em>所有</em>
          </MenuItem>
          <MenuItem value={50}>100以下</MenuItem>
          <MenuItem value={150}>100-300</MenuItem>
          <MenuItem value={350}>300以上</MenuItem>
        </Select>
      </FormControl>{" "}
      <FormControl variant="outlined" className={classes.formControl}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="搜索" variant="outlined" />
          <Button
            variant="contained"
            color="primary"
            href="#contained-buttons"
            className={classes.searchBtn}
          >
            搜索
          </Button>
        </form>
      </FormControl>
    </div>
  );
}
