import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import ContactPanelItem from "./ContactPanelItem";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 5,
        background: "primary",

    },


}));

const ContactPanel = (props) => {
    const classes = useStyles();


    return (

        <div>



                        <ContactPanelItem title={"Por Teléfono"} icon={<PhoneInTalkOutlinedIcon/>}
                                          ref={"https://api.whatsapp.com/send?phone=34608682668"}
                                          refDesc={" +34 608 682 668"}/>


        </div>

    );
}

export default ContactPanel;
