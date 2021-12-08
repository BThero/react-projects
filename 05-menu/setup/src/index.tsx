import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StyledApp from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
