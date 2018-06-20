import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';

class Header extends React.Component {
	render() {
		return(
			<div className="header-wrapper clearfix">
				<div className="section-content">
					<HeaderLogo url={this.props.logo} />
					<HeaderNav />
				</div>
			</div>
		)
	}
}

export default Header;