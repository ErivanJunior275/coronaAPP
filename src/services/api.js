import axios from 'axios';

const api = axios.create({
    baseURL: 'https://opendata.arcgis.com/datasets/bbb2e4f589ba40d692fab712ae37b9ac_1.geojson',
});

export default api;
