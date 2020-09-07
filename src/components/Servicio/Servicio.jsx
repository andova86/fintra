import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import Grid from "@material-ui/core/Grid";

const Servicio = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    img: {
      height: "100px !important",
      width: "100px !important",
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

  /* function Titulo(props) {
            const existT = props.texto;
            if (!existT) {

                return ()
                 ;
            }
            return <span/>;
        }*/

  return (
    <Grid
      container
      spacing={3}
      justify="center"
      alignItems="center"
      alignContent="center"
    >
      <Grid
        item
        xs={"6"}
        container
        justify="center"
        alignItems="center"
        alignContent="center"
      >
        <img src={imagen} className={classes.img}  alt={texto}/>
      </Grid>servicio

      <Grid item xs={"12"} container justify="center">
        <Typography variant={"h4"} className={classes.white} >
          {titulo}
        </Typography>
      </Grid>

      <Grid item xs={"12"} container justify="center">
        <Typography variant={"body1"} className={classes.white} style={{padding:'10px'}}>
          {texto}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Servicio;
