import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Land from './land.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Land />
    <div id='bottom'>dd</div>
  </React.StrictMode>,
  document.getElementById('root')
);
