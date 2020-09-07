import React from "react";

import {BrowserRouter, Route, Switch} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "../pages/Home";

import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

const Contain = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },

    offset: {
      offset: theme.mixins.toolbar,
    },

    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(0),
    },
  }));

  const classes = useStyles();

  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />

      <Grid
        container
        
       
        justify="center"
        alignItems="center"
        alignContent="center"
       
      >
        <Grid item xs={12} md={10} container justify={"center"}>
          <main className={classes.content}>
            <Switch>
              
              <Route path="/" exact component={Home} />

            </Switch>
          </main>

          
        </Grid>
      </Grid>

      <Footer />
    </BrowserRouter>
  );
};

export default Contain;
