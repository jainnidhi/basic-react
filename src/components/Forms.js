import React from 'react';

class Forms extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			message: ''
		};
	}
	result(event) {
		event.preventDefault();

		this.setState({
			message: this.formInput.value
		});
		setTimeout(() => {
			this.setState({
				message: ''
			});
			
		}, 2000);
	}
	render() {
		return (
			<div className="form-wrapper">
				<form onSubmit={(e) => this.result(e)}>
					<h2>Please Enter a value</h2>
					<input type="text" required placeholder="Enter a value" ref={(input) => { this.formInput = input }} />
					<button type="submit">Submit</button>
					<div className="form-result">{this.state.message}</div>
				</form>
			</div>
		)
	}
}

export default Forms;