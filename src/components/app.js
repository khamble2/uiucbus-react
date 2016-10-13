import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from '../containers/search_bar';
import Suggestions from '../containers/suggestions';
import Nearby from '../containers/nearby';
import BusStop from '../containers/bus_stop';

injectTapEventPlugin();

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <SearchBar />
          <Suggestions />
          <Nearby />
          <BusStop />
        </div>
      </MuiThemeProvider>
    );
  }
}