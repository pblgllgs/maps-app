import { useContext, useState } from 'react';
import { MapContext, PlacesContext } from '../context';
import { Feature } from '../interfaces/places';
import { LoadingPlaces } from './LoadingPlaces';

export const SearchResults = () => {
  const { isLoadingPlaces, places, userLocation } = useContext(PlacesContext);
  const { getRouteBetweenPoints } = useContext(MapContext);
  const { map } = useContext(MapContext);

  const [activeId, setActiveId] = useState('');

  const onPlaceClick = (place: Feature) => {
    setActiveId(place.id);
    const [lng, lat] = place.center;
    map?.flyTo({
      center: [lng, lat],
      zoom: 15,
    });
  };

  const getRoute = (place: Feature) => {
    if (!userLocation) return;
    const [lng, lat] = place.center;

    getRouteBetweenPoints(userLocation,[lng, lat]);
  };

  if (isLoadingPlaces) {
    return <LoadingPlaces />;
  }
  if (places.length === 0) {
    return <></>;
  }
  return (
    <ul className="list-group mt-3">
      {places.map((place) => (
        <li
          className={`list-group-item list-group-item-action pointer ${
            activeId === place.id ? ' active' : ''
          }`}
          key={place.id}
          onClick={() => onPlaceClick(place)}
        >
          <h6>{place.text_es}</h6>
          <p
            style={{
              fontSize: '12px',
            }}
          >
            {place.place_name}
          </p>
          <button
            className={`btn btn-sm ${
              activeId === place.id
                ? 'btn-outline-light'
                : 'btn-outline-primary'
            } `}
            onClick={() => getRoute(place)}
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
};
