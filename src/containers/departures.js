import React, {Component} from 'react';
import {connect} from 'react-redux';
import DepartureItem from './Departure_item';
import {fetchDepartures} from '../actions';

import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';

class Departures extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departures: []
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.activeStop && nextProps.activeStop.stopId != this.props.activeStop.stopId) {
            fetchDepartures(this.props.activeStop.stopId)
                .payload
                .then((data) => {
                    this.setState({departures: data.data.departures});
                });
        }
    }

    renderList() {
        return this
            .state
            .departures
            .map((departure) => {
                return (<DepartureItem key={departure.trip.trip_id} bus={departure}/>);
            });
    }

    renderEmpty() {
        return (<ListItem primaryText="Sorry there are no upcoming bus."/>);
    }

    renderContent() {
        if (this.state.departures && this.state.departures.length != 0) {
            return this.renderList();
        } else {
            return this.renderEmpty();
        }
    }

    render() {
        if (!this.props.activeStop) {
            return (
                <Card></Card>
            );
        }
        return (
            <Card>
                <CardTitle subtitle={this.props.activeStop.stopName}/> {this.renderContent()}
            </Card>
        );

    }
}

function mapStateToProps(state) {
    return {suggestions: state.suggestions, activeStop: state.activeStop};
}

export default connect(mapStateToProps)(Departures);