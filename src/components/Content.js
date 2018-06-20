import React from 'react';
import Button from './Button';
import Image from './Image';
import HeroImage from './../images/hero-image.png';
import InfoBox from './InfoBox';

const Content = (props) => {
	return(
		<div className="content-wrapper">
			<div className="section hero-section">
				<div className="section-content">
					<h3>The #1 Beaver Builder Addon Developed Just For You</h3>
					<p>Build the websites you've always wanted with PowerPack Beaver Addons.</p>
					<Button text="GET POWERPACK" url="#" />
					<div className="section-image">
						<Image url={HeroImage} />
					</div>
				</div>
			</div>
			<div className="section info-section clearfix">
				<div className="section-content">
					<div className="section-col">
						<InfoBox
							title="Custom Modules"
							desc="Creative modules to help you build better websites."
							buttonUrl="#"
							buttonText="Read More"
						/>
					</div>
					<div className="section-col">
						<InfoBox
							title="Page Templates"
							desc="Ready to use Page Templates for various business niche."
							buttonUrl="#"
							buttonText="Read More"
						/>
					</div>
					<div className="section-col">
						<InfoBox
							title="Section Templates"
							desc="Drag & Drop sections and rows to build a custom page."
							buttonUrl="#"
							buttonText="Read More"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Content;