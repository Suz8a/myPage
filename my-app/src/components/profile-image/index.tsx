import { Grid } from "@material-ui/core";
import React from "react";
import { MyImage } from "./styled";
import img from "../../assets/addy.jpg";
function ProfileImage() {
  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      justify="flex-end"
    >
      <Grid item xs={12}>
        <MyImage src={img} />
      </Grid>
    </Grid>
  );
}

export default ProfileImage;
