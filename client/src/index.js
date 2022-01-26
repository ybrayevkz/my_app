import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyles} from "./global-styles";

ReactDOM.render(
    <>
        <GlobalStyles />
        <App />
    </>,
  document.getElementById('root')
);

reportWebVitals();
