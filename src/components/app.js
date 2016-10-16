import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from '../containers/search_bar';
import Suggestions from '../containers/search_results/suggestions';
import Nearby from '../containers/search_results/nearby';
import Timer from '../containers/timer';
import Departures from '../containers/departures/departures';

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
                    <div className="card">
                        <Suggestions className="card"/>
                    </div>
                    <div className="card">
                        <Nearby className="card"/>
                    </div>
                    <div className="card">
                        <Departures className="card"/>

                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}