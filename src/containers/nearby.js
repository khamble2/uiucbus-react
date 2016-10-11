import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Nearby extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Card>
                <CardTitle subtitle="Nearby Stops" />
                <CardText>
                Hello
                </CardText>
            </Card>
        );

    }
}


function mapStateToProps(state) {
    return {
        suggestions: state.suggestions
    };
}

export default connect(mapStateToProps)(Nearby);