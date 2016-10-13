import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchDepartures, fetchLocation} from '../actions';
import { distanceAndBearing } from '../utilities';
import {List, ListItem} from 'material-ui/List';


class BusStop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Loading'
        }
        this.props.fetchLocation();
    }

    componentWillMount() {
        if (this.props.id) {
            fetchDepartures(this.props.id)
                .payload
                .then((data) => {
                    let nextDeparture = data.data.departures[0];
                    let message = `Next: ${nextDeparture.headsign} in ${nextDeparture.expected_mins} mins`;
                    this.setState({message: message})
                });
        }
    }

    renderGeo() {
        return (
            <div>Distance</div>
        );
    }

    renderHeader() {
        return <div className="row">
            <div className="col-md-10">{this.props.name}</div>
            <div className="col-md-2">{this.renderGeo()}</div>
        </div>
    }

    render() {
        return (<ListItem
            primaryText={this.renderHeader()}
            secondaryText={this.state.message}
            />
            );
    }

}

BusStop.propTypes = {
    id: React.PropTypes.string,
    name: React.PropTypes.string
};


function mapStateToProps(state) {
    console.log(state);
    return {
        position: state.position
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchLocation: fetchLocation }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(BusStop);