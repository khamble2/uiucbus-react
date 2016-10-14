import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';



class Stop extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div> Stop Name and Upcoming </div>
        );
    }
}

Stop.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string
};

function mapStateToProps({}) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Stop);