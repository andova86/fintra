import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import { yellow, blue, grey } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';

const OfertaText = (props) => {
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
        <Grid item xs={12} container>
          <Typography
            variant={"h4"}
            className={classes.texto_right}
            color={"primary"}
          >
            "La mejor <br /> <span>bomba casera </span>
            <br /> de <strong>agua"</strong>
            <br /> -El País
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          className={classes.cuadro}
          justify={"center"}
          container
          alignItems={"center"}
        >
          <Typography variant="h6" className={classes.cuadro}>
            12
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
            <strong>BA-859</strong>
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
            Oferta válida hasta el 12.20.2021
          </Typography>
        </Grid>
      </Grid>
        </Container> 
      
  
      </div>
  </React.Fragment>
  );
};

export default OfertaText;
