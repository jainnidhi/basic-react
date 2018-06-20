import React from 'react';
import NavItems from './NavItems';

class HeaderNav extends React.Component {
	render() {
		return (
			<div className="header-nav">
				<ul className="nav-items">
				<NavItems />
				</ul>
			</div>
		)
	}
}

export default HeaderNav;