import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        languaje: 'es',
        access_token: 'pk.eyJ1IjoicGJsZ2xsZ3MiLCJhIjoiY2t2ODdtYnljMDF5czJ3cnM0Z2l3djFpNiJ9.HXM0GxSGKBlqix7MQ8Kv0A',

    }
});

export default searchApi;