import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import ActionInfo from 'material-ui/svg-icons/action/info';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';



class BusStop extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <ListItem
                leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
                rightIcon={<ActionInfo />}
                primaryText={this.props.name}
                secondaryText="Jan 20, 2014"
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