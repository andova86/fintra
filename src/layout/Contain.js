import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "../pages/Home";
import CountryDetail from "../pages/Countries/CountryDetail";
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";
import Inscription2 from "../pages/Login/Inscription2";
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
              <Route path="/inscription" exact component={Inscription2} />
              <Route path="/:texto/detalle" exact component={CountryDetail} />
            </Switch>
          </main>

          
        </Grid>
      </Grid>

      <Footer />
    </BrowserRouter>
  );
};

export default Contain;
