import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CakePicBig, CakePicSmall, CakePicSmallWrapper } from "../style";
const useStyles = makeStyles(theme => ({
  root: {}
}));

export default function CakePicWrapper(props) {
  const classes = useStyles();
  const id = props.id;
  const tileData = props.tileData;
  console.log(tileData);
  console.log(id);

  return (
    <div className={classes.root}>
      <CakePicBig src={tileData[id].imgs[0]}></CakePicBig>
      <CakePicSmallWrapper>
        {tileData[id].imgs.map((object, i) => (
          <CakePicSmall src={object} alt="The Studio"></CakePicSmall>
        ))}
      </CakePicSmallWrapper>
    </div>
  );
}
