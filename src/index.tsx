import React from 'react';
import ReactDOM from 'react-dom';
import { MapsApp } from './MapsApp';


import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  'pk.eyJ1IjoicGJsZ2xsZ3MiLCJhIjoiY2t2ODdtYnljMDF5czJ3cnM0Z2l3djFpNiJ9.HXM0GxSGKBlqix7MQ8Kv0A';

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
