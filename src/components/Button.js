import React from 'react';

class Button extends React.Component {
	render() {
		return (
			<a className="button" href={this.props.url}>{this.props.text}</a>
		);
	}
}

export default Button;