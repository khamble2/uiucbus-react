import React, { Component } from 'react';
import { connect } from 'react-redux';

class Suggestions extends Component {
    constructor(props) {
        super(props);

    }

    renderList() {
        return this.props.suggestions.map((suggestion) => {
            return (
                <li key={suggestion.i} className="list-group-item"> {suggestion.n}</li>
            )
        });
    }

    render() {
        return (
            <div>
                Your search did not match any stop.
                {this.renderList()}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        suggestions: state.suggestions
    };
}

export default connect(mapStateToProps)(Suggestions);