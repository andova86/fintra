import * as React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {Button, CssBaseline, LinearProgress} from '@material-ui/core';
import {RadioGroup, SimpleFileUpload, TextField} from 'formik-material-ui';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import {Select} from 'formik-material-ui';
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Box from "@material-ui/core/Box";
import * as Yup from "yup";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import WhiteButton from "../../components/Buttons/WhiteButton";
import {MailRounded} from "@material-ui/icons";
/*interface Values {
  email: string;
  password: string;
}*/

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },

    bloque: {
        padding: theme.spacing(3),
        margin: 10,


    },

    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },


}));

interface FormValues {
    name: string;
    email: string;
}

const InitialValues: FormValues = {
    name: '',
    email: '',
}

const MySchema = Yup.object().shape({
    name: Yup.string()
        .required('Requerido'),
    email: Yup.string().email("Debe Ingresar una direccion valida de correo")
        .required('Requerido'),


});


const Prueba = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };


    const handleSubmit = (values: FormValues): void => {


        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

        }, 1000);


    }

    return (
        <div className={classes.root} >


        <Formik
            initialValues={InitialValues}
            validationSchema={MySchema}
            onSubmit={handleSubmit}
        >
            {({dirty, isValid}) => (
                <Form>


                    <Grid container justify={"center"}>

                        <Grid item md={10} xs={12} container={"xl"} justify={"center"}>


                            <Grid item xs={12} container spacing={3}>
                                <Grid item xs={12} container justify={"flex-start"} style={{ paddingLeft:'0px !important'}} alignItems={'center'}>
                                    <MailRounded color="white" style={{fontSize: 30, paddingLeft:'0px !important'}} />
                                    <Typography variant={"body1"}
                                                style={{ color: 'white', paddingLeft: 5}}>
                                        Contactar Directamente
                                    </Typography>


                                </Grid>

                                <Grid item xs={12}>
                                    <Field

                                        component={TextField}
                                        name="name"
                                        type="text"
                                        placeholder="Mensaje"
                                        variant="outlined"
                                        fullWidth
                                        multiline
                                        rows={4}
                                        size="small"
                                        style={{background: 'white',borderRadius:5}}
                                    />

                                </Grid>

                                <Grid item xs={12}>
                                    <Field
                                        component={TextField}
                                        name="email"
                                        type="email"
                                        placeholder="Correo"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        style={{background: 'white',borderRadius:5}}
                                    />

                                </Grid>

                                <Grid item xs={12} container justify={"flex-start"} style={{paddingTop: 20}}>


                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        type={'submit'}
                                        disabled={!dirty || !isValid}
                                        style={{background: '#7FA5CC', color:'white'}}
                                        onClick={handleToggle}


                                    >
                                        Enviar Solicitud
                                    </Button>

                                    <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                                        <CircularProgress color="inherit"/>
                                    </Backdrop>
                                </Grid>


                            </Grid>


                        </Grid>


                    </Grid>

                </Form>


            )}
        </Formik>

            </div>

    )

}

export default Prueba