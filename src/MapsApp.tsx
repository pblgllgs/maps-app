import React from 'react';
import { PlacesProvider } from './context';
import { HomeScreen } from './screens';
import './styles.css';
import { MapProvider } from './context/maps/MapProvider';

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  );
};
