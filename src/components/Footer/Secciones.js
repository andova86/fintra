import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from "@material-ui/styles";
import ImageTittle from "../ImageTittle/ImageTittle";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


const Secciones = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    img: {
      height: "100% !important",
      width: "auto !important",
      "&:hover ": {
        opacity: props.opacity,
      },
    },

    block: {
      position: "relative",
      width: "100%",
    },

    texto: {
      width: "100% !important",
      padding: "10px",
      position: "absolute",
      bottom: 5,
      left: "0",
      background: props.back,
      color: "white",
      display: "flex",
      justifyContent: "center",
    },
    white: {
      color: "white",
    },
    blue: {
      background: "#0064A6",
      color: "white",
    },
    ul_list: {
      listStyle: "none",
      paddingLeft: 0,
    },
    pad: {
      paddingBottom: 50,
      paddingTop: 50,
    },
  }));
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

  const [texto, setTexto] = useState(props.texto_desc);
  const [titulo, setTitulo] = useState(props.texto_titulo);
  const [imagen, setImagen] = useState(props.image);

  return (
    <Grid
      container
      spacing={3}
      justify="center"
      alignItems="center"
      alignContent="center"
    >
      <Grid item xs={"12"} container justify="flex-start">
        <Typography variant={"h5"} className={classes.white} autoCapitalize>
          SECCIONES
        </Typography>
      </Grid>

      <Grid item xs={"12"} container justify="flex-start">
        <Typography variant={"body1"} className={classes.white}>
          <ul className={classes.ul_list}>
            <li>
              <Link
                to={"/"}
                style={{ textDecoration: "none" }}
                className={classes.pad}
              >
                   <Button className={classes.white}>
                <Typography variant="body1"  color={"white"}>
                  Quienes somos
                </Typography>
                </Button>
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                style={{ textDecoration: "none" }}
                className={classes.pad}
              >
                  <Button className={classes.white}>
                  <Typography variant="body1" className={classes.bold} color={"white"}>
                  Productos
                </Typography>
                  </Button>
               
              </Link>
            </li>

            <li>
              <Link
                to={"/"}
                style={{ textDecoration: "none" }}
                className={classes.pad}
              >
                   <Button className={classes.white}>
                <Typography variant="body1" className={classes.bold} color={"white"}>
                  Contactos
                </Typography>
                </Button>
              </Link>
            </li>
          </ul>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Secciones;
