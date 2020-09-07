import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: 'lightgray',
        display: 'flex',


    },

     img: {
        maxWidth: '100%',
        height: 'auto',
         padding: 0,


    },

}));

const BannerW = (props) => {
    const classes = useStyles();


    return (



        <div className={classes.root}>
               <CssBaseline />
            <main>
                <div className={classes.root}>
                     <img src={'/img/mundo.png'} className={classes.img}/>
                </div>

            </main>


        </div>

    );
}

export default BannerW;
