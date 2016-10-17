import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchDepartures, fetchPosition, fetchStop, setActiveStop} from '../../actions';
import {distanceAndBearing} from '../../utilities';
import {List, ListItem} from 'material-ui/List';

class BusStop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Loading',
            heading: 'Loading',
            stopPostition: null
        }

        fetchDepartures(this.props.id)
            .payload
            .then((data) => {
                let message = `No upcoming bus`;
                if (data.data.departures.length !== 0) {

                    let nextDeparture = data.data.departures[0];
                    message = `${nextDeparture.headsign} in ${nextDeparture.expected_mins} mins`;
                };
                this.setState({message: message})
            })
            .then();

        fetchStop(this.props.id)
            .payload
            .then((data) => {
                let stopPostition = {
                    lat: data.data.stops[0].stop_points[0].stop_lat,
                    lon: data.data.stops[0].stop_points[0].stop_lon
                };
                this.setState({stopPostition: stopPostition});
                let headingMessage = distanceAndBearing(this.props.position.lat, this.props.position.lon, stopPostition.lat, stopPostition.lon);
                this.setState({heading: headingMessage});
            });
    }

    renderHeader() {
        return <div className="list-item">
            <div >{this.props.name}</div>
            <div >{this.state.heading}</div>
        </div>
    }

    render() {
        return (<ListItem
            primaryText={this.renderHeader()}
            secondaryText={this.state.message}
            onClick={() => this.props.setActiveStop(this.props.name, this.props.id)}/>);
    }

}

BusStop.propTypes = {
    id: React.PropTypes.string,
    name: React.PropTypes.string
};

function mapStateToProps(state) {
    return {position: state.position};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchPosition,
        setActiveStop
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BusStop);