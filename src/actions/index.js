// import { fetchSuggestions } from './fetch_suggestions';
import axios from 'axios';

export const FETCH_SUGGESTIONS = 'FETCH_SUGGESTION';
export const FETCH_NEARBY = 'FETCH_NEARBY';
export const FETCH_DEPARTURE = 'FETCH_DEPARTURE';
export const FETCH_POSITION = 'FETCH_POSITION';

const API_KEY = `532ed8c1dba447ed8ae0f69f3a438de1`;
const QUERY_URL = `https://www.cumtd.com/autocomplete/stops/v1.0/json/search?query=`;
const NEARBY_URL = `https://developer.cumtd.com/api/v2.2/json/GetStopsByLatLon?key=${API_KEY}`;
const DEPARTURE_URL = `https://developer.cumtd.com/api/v2.2/json/GetDeparturesByStop?key=${API_KEY}`;

export function fetchLocation() {
    let payload = new Promise((resolve, reject) => {
            navigator.geolocation
            .getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                resolve({lat, lon});
            }, null);
    });

    return {type: FETCH_POSITION, payload: payload}

    // if (navigator.geolocation) {
    // navigator.geolocation.getCurrentPosition((position) => {
    // actionRespose.payload = {                 lon: position.coords.longitude,
    //         lat: position.coords.latitude             };             return
    // actionRespose;         }, () => {             return actionRespose; });
}

export function fetchSuggestions(query) {
    const url = `${QUERY_URL}${query}`;
    const request = axios.get(url);
    return {type: FETCH_SUGGESTIONS, payload: request}
}

export function fetchNearby(lon, lat) {
    const url = `${NEARBY_URL}&lon=${lon}&lat=${lat}&count=5`;
    const request = axios.get(url);
    return {type: FETCH_NEARBY, payload: request}
}

export function fetchDepartures(stopId) {
    const url = `${DEPARTURE_URL}&stop_id=${stopId}`;
    const request = axios.get(url);
    return {type: FETCH_DEPARTURE, payload: request}
}