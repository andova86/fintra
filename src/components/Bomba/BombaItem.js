import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import { yellow, blue, grey } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import ImageTittle from '../../components/ImageTittle/ImageTittle'
import { Paper } from "@material-ui/core";

const BombaItem = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
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

    cuadro_azul_claro: {
      background: blue[300],
      color: "white",
      padding: 1,
    },

    cuadro_azul: {
        background: blue[props.azul],
        color: "white",
        padding: 1,
      },

      cuadro_azul_oscuro: {
        background: blue[900],
        color: "white",
        padding: 1,
      },

    texto_gris: {
      color: grey[900]
    },
      ul_list: {
            listStyle: "none",
            paddingLeft: 10,
        },
    paper_item: {
     

      '&:hover ': {
        transform: 'translateY(-5%)',
        transition: "opacity 0.9s ease-out"


    },

        [theme.breakpoints.down('sm')]: {
                    transform: 'none !important',
                },
    }
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
         <Paper elevation={3} className={classes.paper_item}>
         <Grid container justify="center">
         
         <Grid item xs={10}  container justify="center">
          
             <img src={props.img} height="250px" width="100%" style={{objectFit:"contain", paddingTop:"10px"}}
                         />
 
         </Grid>
        
         <Grid item xs={12} container className={classes.cuadro_azul}>
             
 
             <ul className={classes.ul_list}>
                 <li >
                 <Typography variant="h6" color="initial" >
             {props.number}
             </Typography>
                 </li>
                 <li >
                 <Typography variant="h5" color="initial" >
                 {props.desc}
             </Typography>
         
                 </li>
               
             </ul>
 
            
             
 
          
         </Grid>
         
       </Grid>
              </Paper>
     
    </React.Fragment>
  );
};

export default BombaItem;
