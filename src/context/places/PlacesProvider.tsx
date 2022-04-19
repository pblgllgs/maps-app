import { useEffect, useReducer } from 'react';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';
import { getUserLocation } from '../../helpers/getUserLocation';
import { searchApi } from '../../apis';
import { Feature, PlacesResponse } from '../../interfaces/places';

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingPlaces: boolean;
  places: Feature[]
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: []
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PlacesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation().then((lngLat) =>
      dispatch({ type: 'SET_USER_LOCATION', payload: lngLat })
    );
  }, []);

  const searchPlacesByTerm = async (query: string) => {
    if (query.length === 0) {
      dispatch({type: 'SET_PLACES',payload: []});
      return []
    };
    if (!state.userLocation) throw new Error('User location is not defined');
    dispatch({type: 'SET_LOADING_PLACES'});
    const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: state.userLocation.join(',')
      },
    });
    dispatch({type: 'SET_PLACES', payload: resp.data.features});
    return resp.data.features;
  };

  return (
    <PlacesContext.Provider
      value={{
        ...state,
        searchPlacesByTerm,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};
