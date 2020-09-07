import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import BombaItem from "../../components/Bomba/BombaItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import ImageTittle from "../../components/ImageTittle/ImageTittle";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#161616",
    color: "white",
    
  },
 
 
}));

const CategoriaList = (props) => {
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
          <ImageTittle image={'/img/jardineria.jpg'} min={'250px !important'}  variant="h4"
            texto_center="JARDINERIA"  
            opacity={'.5'}
          />
        </Link>
      </Grid>

      <Grid item xs={12} lg={4} sm={6} container>
        <Link to={"/"} style={{textDecoration:"none"}} >
        <ImageTittle image={'/img/piscina.jpg'}  min={'250px !important'}  variant="h4"
            texto_center="PISCINAS"  
            opacity={'.5'}
          />
        </Link>
      </Grid>

      <Grid item xs={12} lg={4} sm={6} container>
        <Link to={"/"} style={{textDecoration:"none"}}>
        <ImageTittle image={'/img/hogar.png'} min={'250px !important'}   variant="h4"
            texto_center="HOGAR"
            opacity={'.5'}
          />
        </Link>
      </Grid>
    </Grid>
  );
};

export default CategoriaList;
