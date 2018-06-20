import React, { Fragment } from 'react';

class NavItems extends React.Component {
	render() {
		return(
			<Fragment>
				<li className="nav-list-item"><a href="/">Home</a></li>
				<li className="nav-list-item"><a href="/about">About</a></li>
				<li className="nav-list-item"><a href="/contact">Contact</a></li>
				<li className="nav-list-item"><a href="/blog">Blog</a></li>
			</Fragment>
		)
	}
}

export default NavItems;