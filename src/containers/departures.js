import React, { Component } from 'react';
import { connect } from 'react-redux';
import BusStop from './bus_stop';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';

class Departures extends Component {
    constructor(props) {
        super(props);

    }

    renderList() {
        return this.props.suggestions.map((suggestion) => {
            return (
                <BusStop key={suggestion.i} name={suggestion.n} id={suggestion.i}/>
                // <li key={suggestion.i} className="list-group-item"> {suggestion.n}</li>
            )
        });
    }

    renderEmpty(){
        return (
            <ListItem primaryText="Sorry there are no upcoming bus." />
        );
    }

    renderContent(){
        if (this.props.suggestions && this.props.suggestions.length != 0) {
            return this.renderList();
        }else{
            return this.renderEmpty();
        }
    }

    render() {
        return (
            <Card>
                <CardTitle subtitle="Illini Union" />
                {this.renderContent()}
            </Card>
        );

    }
}


function mapStateToProps(state) {
    return {
        suggestions: state.suggestions
    };
}

export default connect(mapStateToProps)(Departures);