import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Suggestions from './suggestions';
import Nearby from './nearby'


class SearchResults extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                <div className="card">
                    <Suggestions className="card" />
                </div>
                <div className="card">
                    <Nearby className="card" />
                </div>
            </div>
        );

    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);