import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSuggestions, setActiveStop } from '../actions/index';

import Paper from 'material-ui/Paper';

import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
        };
        this.onInputChange = this
            .onInputChange
            .bind(this);
        this.clearInput = this
            .clearInput
            .bind(this);
       this.search = this
            .search
            .bind(this);
    }

    clearInput() {
        this.setState({ query: "" });
        this
            .props
            .fetchSuggestions("");

        this.props.setActiveStop();
    }

    onInputChange(event) {
        this.setState({ query: event.target.value });
        this
            .props
            .fetchSuggestions(event.target.value);

        this.props.setActiveStop();
    }

    getIcon(){
        let value = this.props.activeStop ? "arrow_back" : "search"
        return value;
    }

    search(){
        this.props.setActiveStop();
    }


    render() {
        return (
            <Paper>
                <div className="row vertical-center">
                    <FontIcon className="material-icons" onClick={this.search}>{this.getIcon()}</FontIcon>
                        <TextField
                            hintText="Search Here"
                            fullWidth={true}
                            onChange={this.onInputChange}
                            value={this.state.query} />
                    <FontIcon className="material-icons" onClick={this.clearInput}>clear</FontIcon>
                </div>
            </Paper>
        );
    }

}

function mapStateToProps(state) {
    return { activeStop:state.activeStop };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchSuggestions,
        setActiveStop
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);