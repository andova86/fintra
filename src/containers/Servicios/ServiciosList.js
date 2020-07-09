import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import BombaItem from "../../components/Bomba/BombaItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import ImageTittle from "../../components/ImageTittle/ImageTittle";
import Servicio from "../../components/Servicio/Servicio";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#161616",
    color: "white",
  },

  bg_blue: {
    background: "#0064A6",
  },

  pad: {
    paddingBottom: 50,
    paddingTop: 50,
  },

  pad_bottom: {
    paddingBottom: 50,
  },
  text_blanco: {
    color: "#fff !important",
  },
}));

const ServiciosList = (props) => {
  const classes = useStyles();

  const theme = createMuiTheme();

  theme.typography.h3 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.5rem",
    },
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        justify={"center"}
        spacing={3}
        className={`${classes.bg_blue} ${classes.pad_bottom}`}
      >
        <Grid item xs={12} sm={12} container justify={"center"}>
          <Typography
            variant={"h4"}
            className={(classes.text_blanco, classes.pad)}
            style={{padding:'10px'}}
          >
            TE GARANTIZAMOS
          </Typography>
        </Grid>
        <Grid item xs={12} lg={3} sm={6} container>
          <Servicio
            image={"/img/asistencia.png"}
            texto_titulo={"ASISTENCIA"}
            texto_desc={
              "Estaremos siempre para ti y con oficina propia en La Habana y representantes que hacen que nunca estés solo. Siempre estamos disponible para  cualquier problema, duda y modificación de tu viaje las 24 horas del día."
            }
          />
        </Grid>

        <Grid item xs={12} lg={3} sm={6} container>
          <Servicio
            image={"/img/seguridad.png"}
            texto_titulo={"SEGURIDAD"}
            texto_desc={
              "Somos una empresa legalmente registrada y ofrecemos seguridad a nuestros clientes para todas las facetas del viaje, incluyendo los pagos y la ley de protección de datos.."
            }
          />
        </Grid>

        <Grid item xs={12} lg={3} sm={6} container>
          <Servicio
            image={"/img/asistencia.png"}
            texto_titulo={"ASISTENCIA"}
            texto_desc={
              "Estaremos siempre para ti y con oficina propia en La Habana y representantes que hacen que nunca estés solo. Siempre estamos disponible para  cualquier problema, duda y modificación de tu viaje las 24 horas del día."
            }
          />
        </Grid>

        <Grid item xs={12} lg={3} sm={6} container>
          <Servicio
            image={"/img/asistencia.png"}
            texto_titulo={"ASISTENCIA"}
            texto_desc={
              "Estaremos siempre para ti y con oficina propia en La Habana y representantes que hacen que nunca estés solo. Siempre estamos disponible para  cualquier problema, duda y modificación de tu viaje las 24 horas del día."
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ServiciosList;
