import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDepartures, fetchPosition, fetchStop, setActiveStop } from '../../actions';
import { distanceAndBearing } from '../../utilities';
import { List, ListItem } from 'material-ui/List';

class DepartureItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Loading',
            heading: 'Loading',
            stopPostition: null
        }
    }

    renderPrimaryText() {
        return (<div className="row">
            <div className="col-xs-10">{this.props.bus.headsign}</div>
            <div className="col-xs-2">{this.props.bus.expected_mins}mins</div>
        </div>);
    }

    renderSecondaryText() {
        return (<div className="row">
            <div className="col-xs-10">{this.props.bus.headsign}</div>
            <div className="col-xs-2">{this.props.bus.expected_mins}mins</div>
        </div>);
    }

    render() {
        return (<ListItem
            primaryText={this.renderPrimaryText()}
            secondaryText={this.renderSecondaryText()}
            />);
    }

}

function mapStateToProps(state) {
    return { position: state.position };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchPosition,
        setActiveStop
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartureItem);