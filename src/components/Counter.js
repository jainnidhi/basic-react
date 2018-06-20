import React from 'react';

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};
	}

	componentDidMount() {
		this.interval = setInterval(
			() => this.updateCounter(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval( this.interval );
	}

	handlePauseButton() {
		clearInterval( this.interval );
	}

	handlePlayButton() {
		this.interval = setInterval(
			() => this.updateCounter(),
			1000
		);
	}

	handleResetButton() {
		this.setState({
			counter: 0
		});
	}

	updateCounter() {
		this.setState((prevState, props) => ({
			counter: prevState.counter + parseInt(props.increment, 10)
		}));
	}

	render() {
		return (
			<div className="counter-wrapper">
				<h2>It is showing counter {this.state.counter}</h2>
				<button onClick={this.handlePauseButton.bind(this)} >Pause</button>
				<button onClick={this.handlePlayButton.bind(this)} >Play</button>
				<button onClick={this.handleResetButton.bind(this)} >Reset</button>
			</div>
		)
	}
}

export default Counter;