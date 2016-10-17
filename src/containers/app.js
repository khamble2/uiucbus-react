import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SearchBar from './search_bar';
import Suggestions from './search_results/suggestions';
import SearchResults from './search_results/search_results';
import Nearby from './search_results/nearby';
import Timer from './timer';
import Departures from './departures/departures';

injectTapEventPlugin();

class App extends Component {

    getBody(){
        if (!this.props.activeStop){
            return (<SearchResults className = "card" />);
        }else{
            return (<Departures className = "card" />);
        }
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div className="card">
                        <SearchBar />
                    </div>

                    {this.getBody()}
                    
                </div>
            </MuiThemeProvider>
        );
    }
}


function mapStateToProps(state) {
    return {activeStop: state.activeStop};
}

export default connect(mapStateToProps)(App);