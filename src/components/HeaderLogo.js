import React, { Component } from 'react';
import Image from './Image';

class HeaderLogo extends Component {
	render() {
		return(
			<div className="header-logo">
				<Image url={this.props.url} />
			</div>
		)
	}
}

export default HeaderLogo;