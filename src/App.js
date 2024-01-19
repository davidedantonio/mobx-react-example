import React from 'react';
import { Grid } from "@material-ui/core";
import Tickets from "./Tickets";
import { support } from "./WebeetleSupport";
import { Provider } from "mobx-react";

function App() {
  return (
    <Grid
      container

      
      direction="row"
      
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} md={6}>
        <Provider support={support}>
          <Tickets />
        </Provider>
      </Grid>
    </Grid>
  );
}

export default App;
