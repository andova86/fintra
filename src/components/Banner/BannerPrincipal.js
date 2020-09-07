import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import ImageTittle from "../ImageTittle/ImageTittle";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: '#161616',
        color: 'white',

    },


}));

const BannerPrincipal = (props) => {
    const classes = useStyles();

    const theme = createMuiTheme();

    theme.typography.h3 = {
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.5rem',
        },

    };
    return (


        <div>

            <ImageTittle image={'/img/banner_home.jpg'}
                         texto_right=""
                         variant=""
                         back={''}/>


        </div>


    );
}

export default BannerPrincipal;
