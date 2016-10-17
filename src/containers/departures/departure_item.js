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
            stopPostition: 'Loading'
        }

        this.fetchLocation(`${this.props.bus.location.lat},${this.props.bus.location.lon}`)
    }

    fetchLocation(latlon) {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlon}`;
        const request = axios.get(url);
        request.then((data) => {
            let stopPostition;
            if (data.data.results[0]) {
                let street = (data.data.results[0].address_components.filter((e) => e.types.indexOf('route') != -1)[0]['short_name'])
                let city = (data.data.results[0].address_components.filter((e) => e.types.indexOf('locality') != -1)[0]['short_name'])

                stopPostition = `${street}, ${city}`;
            } else {
                stopPostition = 'unavaliable';
            }
            this.setState({stopPostition});
        })
    }

    renderPrimaryText() {
        return (
            <div className="list-item">
                <div>{this.props.bus.headsign}</div>
                <div>{this.props.bus.expected_mins}mins</div>
            </div>
        );
    }

    render() {
        return (<ListItem
            primaryText={this.renderPrimaryText()}
            secondaryText={this.state.stopPostition}/>);
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