import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {CssBaseline} from "@material-ui/core";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";

const ImageTittle = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    img: {
      maxWidth: "100%",
      height: "auto",
      minHeight: props.min,
      objectFit: "cover",
      width: "100%",
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

    texto_right: {
      position: "absolute",
      bottom: "50%",
      right: 16,
      background: props.back,
      color: "white",
      display: "flex",
      justifyContent: "center",
    },

    texto_center: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: props.back,
      color: "white",
      display: "flex",
      justifyContent: "center",
      textShadow: "5px 5px 10px black",
      fontWeight: 900,
    },
    body1: {
      fontWeight: 900,
    },

    shadow: {
      textShadow: "5px 5px 10px black"
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

  const [t_centro, setT_Centro] = useState(props.texto_center) 
  const [texto_abajo, setTexto_Abajo] = useState(props.texto_abajo) 
  const [texto_derecha, setTexto_Derecha] = useState(props.texto_right) 

    function Centro() {
          if(t_centro) {
              return   <Typography variant={props.variant} className={classes.texto_center}>
              {props.texto_center}
            </Typography>
          } else {
              return 
          }
      }

      function Abajo() {
        if(texto_abajo) {
            return  <Typography variant={props.variant} className={classes.texto_abajo}>
            {props.texto}
          </Typography>
        } else {
            return 
        }
    }

    function Derecha() {
      if(texto_derecha) {
          return    <Typography variant={props.variant} className={classes.texto_right}>
          {props.texto_right}
        </Typography>
      } else {
          return 
      }
  }
      
      const texto_centro1 = Centro()  
      const texto_abajo1 = Abajo()
      const texto_derecha1 = Derecha()

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />

        <div className={classes.block}>
          <img src={props.image} className={classes.img} alt={'test'}/>

          {texto_centro1}
          {texto_abajo1}
          {texto_derecha1}

         
        </div>
      </div>
    </ThemeProvider>
  );


};

export default ImageTittle;
