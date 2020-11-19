import { Grid } from "@material-ui/core";
import React from "react";
import { MyImage } from "./styled";

function ProfileImage() {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="flex-start"
      justify="flex-end"
    >
      <img src="./addy.jpg" alt="profileImage" />
    </Grid>
  );
}

export default ProfileImage;
