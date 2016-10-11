// import { fetchSuggestions } from './fetch_suggestions';
import axios from 'axios';

export const FETCH_SUGGESTIONS = 'FETCH_SUGGESTION';

const QUERY_URL = `https://www.cumtd.com/autocomplete/stops/v1.0/json/search?query=`

export function fetchSuggestions(query) {
    console.log('Searching: ', query);
    const url = `${QUERY_URL}${query}`;
    const request = axios.get(url);
    return {
        type: FETCH_SUGGESTIONS,
        payload: request
    }
}