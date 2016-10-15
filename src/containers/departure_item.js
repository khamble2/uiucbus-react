import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchDepartures, fetchPosition, fetchStop, setActiveStop} from '../actions';
import {distanceAndBearing} from '../utilities';
import {List, ListItem} from 'material-ui/List';

class DepartureItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Loading',
            heading: 'Loading',
            stopPostition: null
        }
    }

    render() {
        return (<ListItem primaryText={this.props.bus.headsign}/>);
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