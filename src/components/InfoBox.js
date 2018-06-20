import React from 'react';
import Button from './Button';

class InfoBox extends React.Component {
	render() {
		return(
			<div className="infobox">
				<h3 className="infobox-title">{this.props.title}</h3>
				<p className="infobox-desc">{this.props.desc}</p>
				<Button url={this.props.buttonURL} text={this.props.buttonText} />
			</div>
		)
	}
}

export default InfoBox;