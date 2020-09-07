import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";

import BannerPrincipal from "../components/Banner/BannerPrincipal";

import OfertaText from "../components/Oferta/OfertaText";
import ImageTittle from "../components/ImageTittle/ImageTittle";
import BombaList from "../containers/Bombas/BombaList";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import CategoriaList from "../containers/Categorias/CategoriaList";

import ServiciosList from "../containers/Servicios/ServiciosList";
import BombaBanner from "../components/Bomba/BombaBanner";

const Home = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },

    pad: {
      paddingBottom: 50,
      paddingTop: 50,
    },

    offset: {
      offset: theme.mixins.toolbar,
    },
    control: {
      padding: theme.spacing(2),
    },

    bold: {
      fontWeight: "bold",
    },

    gris: {
     background: "gray"
    },
    img: {
       width:'100%',
       height:'100%',
      
    }

  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      <div>
        <CssBaseline />
        <div className={classes.offset} />
        <Grid
          spacing={1}
          justify="center"
          alignItems="center"
          alignContent="stretch"
        >
          <Grid item xs={12}>
            <BannerPrincipal />
          </Grid>

          <Container maxWidth="xl">
            <Grid item xs={12} container justify={"center"}>
              <Grid item xs={12} md={6}>
                <Typography variant={"body1"} className={classes.control}>
                  Fintra Soluciones Hidráulicas es la nueva división del grupo
                  Fintra SLU., especializada en el segmento hogar, con más de 20
                  años de experiencia en el sector de los Sistemas Hidráulicos
                  de bombeo y extracción. Somos la primera empresa con entrega
                  totalmente directa para Cuba, con oficinas propias en varios
                  países y con oficina en La Habana, contando con un gran número
                  de personal para atender a nuestros clientes.
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  alignContent="center"
                >
                  <Grid item sm={6} alignItems={"flex-end"} container>
                    <ImageTittle
                      image={"/img/bomba1.png"}
                      texto_right=""
                      variant=""
                      back={""}
                    />
                  </Grid>

                  <Grid item sm={6} container>
                    <OfertaText />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} container justify={"center"}>
              <Typography variant="h5" color="primary" className={classes.pad}>
                PRODUCTOS MÁS DEMANDADOS
              </Typography>

              <BombaList />

              <Link
                to={"/"}
                style={{ textDecoration: "none" }}
                className={classes.pad}
              >
                <Button variant={"text"} color={"primary"}>
                  <Typography
                    variant="h6"
                    color="primary"
                    className={classes.bold}
                  >
                    {" "}
                    Ver todos los productos »
                  </Typography>
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} container justify={"center"}>
              <Typography variant="h5" color="primary" className={classes.pad}>
                CATEGORÍAS
              </Typography>

              <CategoriaList />
            </Grid>

            <Grid
              item
              xs={12}
              container
              justify={"center"}
              className={(classes.control, classes.pad)}
            >
              <ServiciosList />
            </Grid>

            <Grid item xs={12} container justify={"center"}>
              <Grid
                item
                xs={6}
                container
                justify={"center"}
                className={(classes.control, classes.pad)}
              >
                <BombaBanner />
              </Grid>

              <Grid
                item
                xs={6}
                container
                justify={"center"}
                className={(classes.control, classes.pad)}
              >
                <img src={"/img/fintra_gris.PNG"} className={classes.img} alt={"fintra_gris"}/>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Home;
