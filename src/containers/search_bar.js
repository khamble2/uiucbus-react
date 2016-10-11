import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSuggestions } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { query: '' };
        this.onInputChange = this.onInputChange.bind(this);
    }
    render() {
        return (
            <div onClick={() => this.props.fetchSuggestions('test')}>
                <input onChange={this.onInputChange} placeholder="Search Here" />
            </div>
        );
    }

    onInputChange(event) {
        this.setState({ query: event.target.value });
        this.props.fetchSuggestions(event.target.value);
    }
}

function mapStateToProps({suggestions}) {
    return {suggestions};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSuggestions: fetchSuggestions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);