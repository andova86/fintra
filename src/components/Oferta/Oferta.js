import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import {blue, grey, yellow} from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';

const Oferta = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },

    cuadro: {
      background: yellow[600],
      color: "primary",
      padding: 1,
    },

    cuadro_blanco: {
      color: grey[800],
      background: "white",
      padding: 1,
      borderTop: "1px solid ",
      borderTopColor: grey[400],
      borderBottom: "1px solid",
      borderBottomColor: grey[400],
    },

    cuadro_azul: {
      background: blue[600],
      color: "white",
      padding: 1,
    },
    texto_gris: {
      color: grey[900]
    }
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>

      <Container maxWidth="xl">
      <Grid container>
        <Grid
          item
          xs={2}
          className={classes.cuadro}
          justify={"center"}
          container
          alignItems={"center"}
        >
          <Typography variant="h6" className={classes.cuadro}>
             {props.numero}
          </Typography>
        </Grid>

        <Grid
          item
          xs={5}
          className={classes.cuadro_blanco}
          justify={"center"}
          container
          alignItems={"center"}
        >
          <Typography variant="h5" color="gray">
            <strong> {props.codigo}</strong>
          </Typography>
        </Grid>

        <Grid
          item
          xs={5}
          className={classes.cuadro_azul}
          justify={"center"}
          container
          alignItems={"center"}
        >
          <Typography variant="caption">
          {props.desc}
           
          </Typography>
        </Grid>
      </Grid>
        </Container> 
      
  
      </div>
  </React.Fragment>
  );
};

export default Oferta;
