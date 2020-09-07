import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import BombaItem from "../../components/Bomba/BombaItem";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#161616",
    color: "white",
  },
}));

const BombaList = (props) => {
  const classes = useStyles();

  const theme = createMuiTheme();

  theme.typography.h3 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.5rem",
    },
  };

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      alignItems="center"
      alignContent="center"
     
    >
      <Grid item xs={12} lg={4} sm={6} container>
        <Link to={"/"} style={{textDecoration:"none"}}>
          <BombaItem
            img={"/img/bomba1.png"}
            desc="El “caballo de mil batallassss”"
            number="BM-985 SD"
            azul="300"
          />
        </Link>
      </Grid>

      <Grid item xs={12} lg={4} sm={6} container>
        <Link to={"/"} style={{textDecoration:"none"}}>
          <BombaItem
           img={"/img/bomba2.png"}
            desc="Bomba de hogar genial"
            number="BM-985 SD"
            azul="600"
          />
        </Link>
      </Grid>

      <Grid item xs={12} lg={4} sm={6} container>
        <Link to={"/"} style={{textDecoration:"none"}}>
          <BombaItem
           img={"/img/bomba3.png"}
            desc="Tira el agua H2O acuífera"
            number="BM-985 SD"
            azul="900"
          />
        </Link>
      </Grid>
    </Grid>
  );
};

export default BombaList;
