import React from 'react';
import ReactDOM from 'react-dom';
import { MapsApp } from './MapsApp';

//@ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  'pk.eyJ1IjoicGJsZ2xsZ3MiLCJhIjoiY2wyNnByYXhnMDE5OTNjcjBmdDBpYXBiYyJ9.CT6UxV3wXZjQJz6zIFIn8Q';

if(!navigator.geolocation){
  alert('Tuu navegador no tiene opcion de Geolocalizacion');
  throw new Error('Tuu navegador no tiene opcion de Geolocalizacion');
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);
