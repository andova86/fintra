import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import { yellow, blue, grey } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import ImageTittle from "../../components/ImageTittle/ImageTittle";
import { Paper } from "@material-ui/core";
import Oferta from '../Oferta/Oferta'

const BombaItem = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    block: {
        position: "relative",
        width: "100%",
      },
      texto_left: {
        position: "absolute",
      bottom:30,
      left: '10%',
     
      color: "white",
      display: "flex",
      justifyContent: "center",
        
      },

   
  }));

  const classes = useStyles();

  return (
  
      <div className={classes.block}>
        <img src={'/img/bomba1.png'} className={classes.img} style={{height:'100%',width:'100%'}} />
        <div className={classes.texto_left}>
         <Oferta  numero={"12"} codigo={"BA-859"} desc={"Oferta válida hasta el 12.20.2021"} width="50%"/>
         </div>
        
      </div>
     
  
  );
};

export default BombaItem;
