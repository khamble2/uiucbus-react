import React, {Component} from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SearchBar from './search_bar';
import Suggestions from './search_results/suggestions';
import SearchResults from './search_results/search_results';
import Nearby from './search_results/nearby';
import Timer from './timer';
import Departures from './departures/departures';

injectTapEventPlugin();

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div className="card">
                        <SearchBar />
                        <Timer />
                    </div>
                    <SearchResults />
                    <div className="card">
                        <Departures className="card"/>
                    </div>
                    
                </div>
            </MuiThemeProvider>
        );
    }
}