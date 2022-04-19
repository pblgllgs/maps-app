import { useReducer } from 'react';
import { Map, Marker, Popup } from "mapbox-gl"
import { MapContext } from './MapContext';
import { MapReducer } from './MapReducer';

export interface MapState {
    isMapReady: boolean,
    map?: Map
}

const INITIAL_STATE: MapState = {
    isMapReady: false,
    map: undefined
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MapProvider = ({ children }:Props)  => {
  const [state, dispatch] = useReducer(MapReducer, INITIAL_STATE);

  const setMap = (map: Map) => {

    const myLocationPopup = new Popup().setHTML(`<h3>My Location</h3>
    <p></p>Location: ${map.getCenter().lat} ${map.getCenter().lng} </p>`);

    new Marker({
      color: '#61DAFB',
    })
      .setLngLat(map.getCenter())
      .setPopup(myLocationPopup)
      .addTo(map);

    dispatch({ type: 'SET_MAP', payload: map });
  }    

  return (
    <MapContext.Provider
      value={{
        ...state,
        setMap
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
