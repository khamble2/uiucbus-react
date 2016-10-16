import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchNearby, fetchPosition} from '../../actions';
import BusStop from './bus_stop';

import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';

class Nearby extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lon: "",
            lat: ""
        }
        
        this.props.fetchPosition().then(() => {
            // TODO: Past object instead of varaible 
            this.props.fetchNearby(this.props.position.lon, this.props.position.lat);
        });

    }

    renderList() {
        return this
            .props
            .nearby
            .map((stop) => {
                return (<BusStop key={stop.stop_id} name={stop.stop_name} id={stop.stop_id}/>)
            });
    }

    renderEmpty() {
        return (
            <CardText>
                Sorry we can not fetch your current location.
            </CardText>
        );
    }

    renderContent() {
        if (this.props.nearby && this.props.nearby.length != 0) {
            return this.renderList();
        } else {
            return this.renderEmpty();
        }
    }

    render() {
        return (
            <Card>
                <CardTitle subtitle="Nearby Stops"/> {this.renderContent()}
            </Card>
        );

    }
}

function mapStateToProps(state) {
    return {nearby: state.nearby, position: state.position};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchNearby,
        fetchPosition
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Nearby);