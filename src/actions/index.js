// import { fetchSuggestions } from './fetch_suggestions';

export function fetchSuggestions(query) {
    console.log('Searching: ', query);
    return {
        type: 'test',
        payload: query
    }
}