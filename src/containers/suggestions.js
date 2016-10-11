import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Suggestions extends Component {
    constructor(props) {
        super(props);

    }

    renderList() {
        return this.props.suggestions.map((suggestion) => {
            return (
                <li key={suggestion.i} className="list-group-item"> {suggestion.n}</li>
            )
        });
    }

    renderEmpty(){
        return (
            <CardText>
                Your search did not match any stop.
            </CardText>
        );
    }

    renderContent(){
        if (this.props.suggestions) {
            return this.renderList();
        }else{
            return this.renderEmpty();
        }
    }

    render() {
        return (
            <Card>
                {this.renderContent()}
            </Card>
        );

    }
}


function mapStateToProps(state) {
    return {
        suggestions: state.suggestions
    };
}

export default connect(mapStateToProps)(Suggestions);