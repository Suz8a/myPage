import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Divider } from "./styled";

function PersonalInfo() {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="flex-start"
      justify="flex-end"
    >
      <Grid item>
        <Typography variant="h2">Adriana Ochoa</Typography>
      </Grid>
      <Divider />
      <Grid item>
        <Typography variant="h4">Front End Developer</Typography>
      </Grid>
    </Grid>
  );
}

export default PersonalInfo;
