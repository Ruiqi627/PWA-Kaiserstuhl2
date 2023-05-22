import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import vConsole from './vConsole'
//import * as serviceWorker from './serviceWorker';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

let pointsall=[];
window.pointsarrayall=pointsall;
let markerall=[];
window.markersarrayall=markerall;
let map=null;
window.map=map;
let currZoom=null;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorkerRegistration.register();

