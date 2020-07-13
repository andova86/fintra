import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import Grid from "@material-ui/core/Grid";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { MailRounded } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Contacto = (props) => {
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
    blue_c: {
        background: "#7FA5CC",
        color: 'white'
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

    bg_white: {
      background: "white",
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
      <Grid item xs={"12"} container justify="flex-start" alignItems={"center"}>
        <MailRounded color="white" style={{fontSize: 30}}/>
        <Typography
          variant={"subtitle1"}
          className={classes.white}
          style={{ paddingLeft: "10px" }}
        >
          Contactar Directamente
        </Typography>
      </Grid>

      <Grid item xs={"12"} container justify="flex-start">
        <TextField
          id="outlined-multiline-static"
          placeholder="Mensaje..."
          multiline
          fullWidth
          className={classes.bg_white}
          rows={4}
          size="small"
          variant="filled"
        />
 


       
      </Grid>

      <Grid item xs={"12"} container justify="flex-start">
       
      <TextField
          id="outlined-textarea"
         placeholder="Correo..."

          fullWidth
          className={classes.bg_white}

          size="small"
          variant="filled"
        />


      </Grid>
      <Grid item xs={"12"} container justify="flex-start">
       
      <FormGroup row>
     
      <FormControlLabel
        control={
          <Checkbox
          inputProps={{ 'aria-label': 'checkbox with default color' }}
            name="checkedB"
           
          className={classes.white} />
        }
        label="He leído, entiendo la política de privacidad y cookies"
      />
      </FormGroup>
      </Grid>
      <Grid item xs={"12"} container justify="flex-start">
       <Button variant="outlined" className={classes.blue_c}>
         Enviar
       </Button>
      
      </Grid>
     
    </Grid>
  );
};

export default Contacto;
