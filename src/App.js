import React, {Component} from 'react';
import {ThemeProvider} from '@material-ui/core'

import './App.css';

import Contain from "./layout/Contain";
import theme from '../src/layout/themeConfig'
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";


class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Contain/>
            </ThemeProvider>

        );
    }
}


export default App;
