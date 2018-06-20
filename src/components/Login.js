import React from 'react';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = { isLoggedIn: false };
	}

	handleLoginClick() {
		this.setState({ isLoggedIn: true });
	}

	handleLogoutClick() {
		this.setState({ isLoggedIn: false });
	}

	greeting() {
		const isLoggedIn = this.state.isLoggedIn;
		if (isLoggedIn) {
			return <h2>Welcome back!</h2>;
		}
		return <h2>Please sign up.</h2>;
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;

		const button = isLoggedIn ? (
			<button onClick={this.handleLogoutClick}>Logout</button>
		) : (
			<button onClick={this.handleLoginClick}>Login</button>
		);

		return(
			<div>
				{button}
				{this.greeting()}
			</div>
		)
	}
}


export default Login;