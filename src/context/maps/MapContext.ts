import { createContext } from "react";
//@ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import { Map } from '!mapbox-gl';

export interface MapContextProps {
    isMapReady: boolean,
    map?: Map,
    setMap: (map: Map) => void,
    getRouteBetweenPoints: (start: [number, number], end: [number, number]) => Promise<void>

}

export const MapContext = createContext({} as MapContextProps);