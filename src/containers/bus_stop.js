import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchDepartures, fetchPosition, fetchStop} from '../actions';
import {distanceAndBearing} from '../utilities';
import {List, ListItem} from 'material-ui/List';


class BusStop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Loading',
            heading: 'Loading',
            stopPostition: null
        }


        fetchDepartures(this.props.id).payload.then((data) => {
            let message = `No upcoming bus`;
            if (data.data.departures.length !== 0) {

                let nextDeparture = data.data.departures[0];
                message = `Next: ${nextDeparture.headsign} in ${nextDeparture.expected_mins} mins`;
            };
            this.setState({message: message})
        });
    }

                //         fetchStop(this.props.id)
                // .payload
                // .then((data) => {
                //     let stopPostition = {
                //         lat: data.data.stops[0].stop_points[0].stop_lat,
                //         lon: data.data.stops[0].stop_points[0].stop_lon
                //     };
                //     this.setState({stopPostition: stopPostition});
                // })
                // .then(() => {
                //     let headingMessage = distanceAndBearing(this.props.position.lat, this.props.position.lon, this.state.stopPostition.lat, this.state.stopPostition.lon);
                //     this.setState({heading: headingMessage});
                // });

    renderHeader() {
        return <div className="row">
            <div className="col-md-10">{this.props.name}</div>
            <div className="col-md-2">{this.state.heading}</div>
        </div>
    }

    render() {
        return (<ListItem primaryText={this.renderHeader()} secondaryText={this.state.message}/>);
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
        fetchPosition
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BusStop);