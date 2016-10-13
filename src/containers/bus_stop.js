import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDepartures } from '../actions';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import { blue500, yellow600 } from 'material-ui/styles/colors';
import ActionInfo from 'material-ui/svg-icons/action/info';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';



class BusStop extends Component {
    constructor(props) {
        super(props);
        this.state = {message:'Loading'}
    }

    componentWillMount() {
        if (this.props.id) {
            fetchDepartures(this.props.id).payload.then((data) => {
                let nextDeparture = data.data.departures[0];
                let message = `Next: ${nextDeparture.headsign} in ${nextDeparture.expected_mins} mins`;
                this.setState({message:message})
            }
            );
        }
    }

    render() {
        return (

            <ListItem
                leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
                rightIcon={<ActionInfo />}
                primaryText={this.props.name}
                secondaryText={this.state.message}
                />

        );
    }


}

BusStop.propTypes = {
    id: React.PropTypes.string,
    name: React.PropTypes.string
};

function mapStateToProps({}) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BusStop);