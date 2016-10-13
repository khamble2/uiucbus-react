import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNearby } from '../actions/index';
import BusStop from './bus_stop';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

class Nearby extends Component {
    constructor(props) {
        super(props);
        let self = this; 
        
        this.state = { lon: "", lat: "" }

        function initGeolocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => setPosition(position), null);
            }
        }

        function setPosition(position) {
            self.setState({ lon: position.coords.longitude, lat: position.coords.latitude })
            self.props.fetchNearby(self.state.lon, self.state.lat)
        }

        initGeolocation();        
    }


    renderList() {
        return this.props.nearby.map((stop) => {
            return (
                <BusStop key={stop.stop_id} name={stop.stop_name} id={stop.stop_id} />
            )
        });
    }

    renderEmpty(){
        return (
            <CardText>
                Sorry we can not fetch your current location.
            </CardText>
        );
    }

    renderContent(){
        if (this.props.nearby && this.props.nearby.length != 0) {
            return this.renderList();
        }else{
            return this.renderEmpty();
        }
    }


    render() {
        return (
            <Card>
                <CardTitle subtitle="Nearby Stops" />
                    {this.renderContent()}
            </Card>
        );

    }
}


function mapStateToProps(state) {
    return {
        nearby: state.nearby
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchNearby: fetchNearby }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Nearby);