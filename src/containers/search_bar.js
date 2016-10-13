import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSuggestions } from '../actions/index';


import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';



class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { query: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    clearInput(){
        this.setState({ query: ""});
        this.props.fetchSuggestions("");
    }

    onInputChange(event) {
        this.setState({ query: event.target.value });
        this.props.fetchSuggestions(event.target.value);
    }

    render() {
        return (
            <Card >
                <CardText>
                    <FontIcon className="material-icons">search</FontIcon>
                    <TextField hintText="Search Here" onChange={this.onInputChange} value={this.state.query} />
                    <FontIcon className="material-icons" onClick={this.clearInput}>clear</FontIcon>
                </CardText>
            </Card>
        );
    }


}

function mapStateToProps({suggestions}) {
    return { suggestions };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSuggestions: fetchSuggestions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);