import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import Suggestions from '../containers/suggestions';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Suggestions />
      </div>
    );
  }
}