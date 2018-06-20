import React from 'react';

class Post extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			image: false
		};
	}

	componentDidMount() {
		const imageId = this.props.data.featured_media;

		if ( parseInt( imageId, 10 ) > 0 ) {
			fetch(`http://powerpacktest.local/wp-json/wp/v2/media/${imageId}`)
				.then(response => response.json())
				.then(data => this.setState({ image: data }));
		}
	}

	render() {
		const { data } = this.props;
		const { style } = this.props;
		const classes = `post post-${data.id}`;
		const { image } = this.state;

		return(
			<div className={classes}>
				<div className="post-header">
				{image &&
					<div className="post-image">
						<a href={data.link} target="_blank">
							{style === 'grid' ? (
								<img src={image.media_details.sizes.medium.source_url} alt={data.title.rendered} />
								
							) : (
								<img src={image.media_details.sizes.full.source_url} alt={data.title.rendered} />
							)}
						</a>
					</div>
				}
					<h3 className="post-title">{data.title.rendered}</h3>
				</div>
				<div className="post-content" dangerouslySetInnerHTML={{ __html: data.excerpt.rendered}}></div>
				<div className="post-action">
					<a href={data.link} target="_blank">Read More</a>
				</div>
			</div>
		);
	}
}

export default Post;