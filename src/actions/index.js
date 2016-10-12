// import { fetchSuggestions } from './fetch_suggestions';
import axios from 'axios';

export const FETCH_SUGGESTIONS = 'FETCH_SUGGESTION';
export const FETCH_NEARBY = 'FETCH_NEARBY';

const API_KEY = `532ed8c1dba447ed8ae0f69f3a438de1`;
const QUERY_URL = `https://www.cumtd.com/autocomplete/stops/v1.0/json/search?query=`;
const NEARBY_URL = `https://developer.cumtd.com/api/v2.2/json/GetStopsByLatLon?key=${API_KEY}`;


export function fetchSuggestions(query) {
    const url = `${QUERY_URL}${query}`;
    const request = axios.get(url);
    return {
        type: FETCH_SUGGESTIONS,
        payload: request
    }
}

export function fetchNearby(lon, lat) {
    const url = `${NEARBY_URL}&lon=${lon}&lat=${lat}&count=5`;
    const request = axios.get(url);
    return {
        type: FETCH_NEARBY,
        payload: request
    }
}