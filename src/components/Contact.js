import React from 'react';

class Contact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fields: {},
			errors: {},
			hasSubmitted: false
		};
	}

	componentDidMount() {
		const fields = {
			name: '',
			email: '',
			phone: '',
			skill: ['WordPress'],
			message: ''
		};

		this.setState( { fields } );
	}

	handleValidation(event) {

		const {fields} = this.state;
		let {errors} = this.state;

		//Name
		if (fields["name"] === '') {
			errors["name"] = "Name field is required.";
		} else if (typeof fields["name"] !== "undefined") {
			if (!fields["name"].match(/^[a-zA-Z]+$/)) {
				errors["name"] = "Invalid Name.";
			}
		}

		//Email
		if (fields["email"] === '') {
			errors["email"] = "Email field is required.";
		}

		//Phone
		if (fields["phone"]=== '') {
			errors["phone"] = "Phone field is required.";
		}

		//Message
		if (fields["message"] === '') {
			errors["message"] = "Message field is required.";
		}

		this.setState({ errors });

		if ( Object.keys(errors).length > 0 ) {
			return false;
		} else {
			return true;
		}
	}

	result(event) {
		event.preventDefault();
		this.setState({ hasSubmitted: true });

		if (this.handleValidation()) {
			alert("Form submitted");
		} else {
			this.setState({ hasSubmitted: false });
		}
	}

	handleChange(field, e) {
		const {fields} = this.state;
		let {errors} = this.state;

		if (e.target.getAttribute('multiple') !== null) {
			fields[field] = [];
			let options = e.target.options;
			for ( let i = 0; i < options.length; i++ ) {
				if ( options[i].selected ) {
					fields[field].push( options[i].value );
				}
			}
		} else {
			fields[field] = e.target.value;
		}

		this.setState({ fields });

		if (e.target.value.length > 0 && 'undefined' !== typeof errors[field] ) {
			delete errors[field];
		}

		this.setState( { errors } );
	}

	render() {
		const { fields } = this.state;
		const { errors } = this.state;
		const { hasSubmitted } = this.state;

		return(
			<div className="contact-form-wrapper">
				<div className="section-content">
					<form onSubmit={(e) => this.result(e)}>
						<h2>Contact Form</h2>
						<div className="form-field">
							<label>Name</label>
							<input type="text" placeholder="" onChange={this.handleChange.bind(this, "name")} />
						</div>
						<div className="form-field">
							<label>Email</label>
							<input type="email" placeholder="" onChange={this.handleChange.bind(this, "email")} />
						</div>
						<div className="form-field">
							<label>Phone</label>
							<input type="number" placeholder="" onChange={this.handleChange.bind(this, "phone")} />
						</div>
						<div className="form-field">
							<label>Skills</label>
							<select multiple={true} onChange={this.handleChange.bind(this, "skill")} value={fields.skill}>
								<option value="WordPress">WordPress</option>
								<option value="Drupal">Drupal</option>
								<option value="Magento">Magento</option>
							</select>
						</div>
						<div className="form-field">
							<label>Message</label>
							<textarea placeholder="" onChange={this.handleChange.bind(this, "message")}></textarea>
						</div>
						<div className="errors">
							{Object.keys(errors).length > 0 && Object.keys(errors).map((key, i) => (
								<div className="error" key={i}>{errors[key]}</div>
							)) }
						</div>
						<button type="submit">Submit</button>
					</form>
					{hasSubmitted &&
					<div className="form-entries">
						{Object.keys(fields).length > 0 && Object.keys(fields).map((key, i) => (
							<div className="result-field" key={i}>{
								'object' === typeof fields[key] ? fields[key].join(', ') : fields[key]
							}</div>
						))}
					</div>
					}
				</div>
			</div>
		)
	}
}

export default Contact;