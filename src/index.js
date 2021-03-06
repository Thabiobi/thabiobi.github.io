import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root'));

registerServiceWorker();
