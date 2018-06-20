import React, {Fragment} from 'react';
import Post from './Post';
import './../css/Posts.css';

class Posts extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
			style: 'grid'
		};

		this.handleStyleChange = this.handleStyleChange.bind(this);
	}

	componentDidMount() {
		if ( this.state.posts.length === 0 ) {
			fetch('http://powerpacktest.local/wp-json/wp/v2/posts')
				.then(response => response.json())
				.then(posts => this.setState({ posts }));
		}
	}

	handleStyleChange(e) {
		this.setState({
			style: e.target.value
		});
	}

	render() {
		const {posts} = this.state;
		const classes = `posts post-style-${this.state.style}`;

		return(
			<Fragment>
				<div className="post-style">
					<h2>Select Layout Type</h2>
					<select value={this.state.style} onChange={this.handleStyleChange}>
						<option value="grid">Grid</option>
						<option value="list">List</option>
					</select>
				</div>
				<div className="container">
					<div className={classes}>
						{posts.length > 0 && posts.map((post, i) =>
							<Post key={i} data={post} style={this.state.style} />
						)}
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Posts;