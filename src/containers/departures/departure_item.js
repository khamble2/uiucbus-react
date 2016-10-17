import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchDepartures, fetchPosition, fetchStop, setActiveStop} from '../../actions';
import {distanceAndBearing} from '../../utilities';
import {List, ListItem} from 'material-ui/List';
import axios from 'axios';

class DepartureItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Loading',
            heading: 'Loading',
            stopPostition: null
        }

        this.fetchLocation(`${this.props.bus.location.lat},${this.props.bus.location.lon}`)
    }

    fetchLocation(latlon) {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlon}`;
        const request = axios.get(url);
        request.then((data) => {
            let stopPostition;
            if (data.data.results[0]) {
                stopPostition = data.data.results[0].formatted_address;
            } else {
                stopPostition = 'unavaliable';
            }
            this.setState({stopPostition});
        })
    }

    renderPrimaryText() {
        return (
            <div className="row">
                <div className="col-xs-10">{this.props.bus.headsign}</div>
                <div className="col-xs-2">{this.props.bus.expected_mins}mins</div>
            </div>
        );
    }

    renderSecondaryText() {
        return (
            <div className="row">
                <div className="col-xs-10">{this.props.bus.headsign}</div>
                <div className="col-xs-2">{this.props.bus.expected_mins}mins</div>
            </div>
        );
    }

    render() {
        return (<ListItem
            primaryText={this.renderPrimaryText()}
            secondaryText={`Current: ${this.state.stopPostition}`}/>);
    }

}

function mapStateToProps(state) {
    return {position: state.position};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchPosition,
        setActiveStop
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartureItem);