import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { CssBaseline } from "@material-ui/core";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from "@material-ui/styles";
import ImageTittle from "../ImageTittle/ImageTittle";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


const Servicio = (props) => {
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
      color: 'white'
    },
    ul_list: {
       listStyle:"none",
       paddingLeft:0
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
      <Grid
        item
        xs={"12"}
        container
        justify="flex-start"
      
      >
        <img src={'/img/logo_azul.png'} className={classes.img} />
      </Grid>

      <Grid item xs={"12"} container justify="flex-start">
        <Typography variant={"body1"} className={classes.white}>
       <ul className={classes.ul_list}>
         <li>
         Email: comercial.1@fintra.com
        
         </li>
         <li>
         Telf.: (+53) 0000 0000
         </li>

       </ul>

        
        </Typography>
      </Grid>

     

      <Grid item xs={"12"} container justify="flex-start" style={{paddingBottom:0}}>
        <Typography variant={"h6"} className={classes.white} >
        Síguenos en nuestras redes
        </Typography>
       
      </Grid>

      <Grid item xs={"12"} container justify="flex-start">
      <FacebookIcon color="white" style={{ fontSize: 60 }}></FacebookIcon>
      <InstagramIcon color="white" style={{ fontSize: 60 }}></InstagramIcon>
        </Grid>

       
        
    </Grid>
  );
};

export default Servicio;
