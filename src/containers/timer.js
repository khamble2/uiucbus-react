import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

export default class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countDown: 100,
        };
    }

    tick() {
        if (this.state.countDown < 0) {
            this.setState({ countDown: 100 });
        } else {
            this.setState((prevState) => ({
                countDown: prevState.countDown - 1
            }));
        }

    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <LinearProgress color="#BBDEFB" mode="determinate" value={this.state.countDown} />
        );
    }
}