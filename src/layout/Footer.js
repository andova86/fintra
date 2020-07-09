import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import lightGreen from "@material-ui/core/colors/lightGreen";
import Redes from "../components/Footer/Redes";
import Secciones from "../components/Footer/Secciones";
import Contacto from "../components/Footer/Contacto";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(3),

    padding: theme.spacing(5),
    border: "1px",
    background: theme.palette.background.paper,
  },

  block: {
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  
  blue: {
    background: "#0064A6",
    color: 'white'
  },

  
  pad: {
    paddingBottom: 50,
    paddingTop: 50,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    
   
      <Grid container justify={"center"} className={`${classes.blue} ${classes.pad}`} >
        <Grid item xs={12} md={10} justify={"center"} container spacing={1}>
          <Grid item xs={10} sm={6} md={4}justify={"center"} container>
            <Redes />
          </Grid>
          <Grid item xs={10} sm={6} md={4} justify={"center"} container>
          <Secciones/>
          </Grid>
          <Grid item xs={10} sm={6} md={4} justify={"center"} container>
          <Contacto/>
          </Grid>
        </Grid>
        
      </Grid>
   
  );
}
