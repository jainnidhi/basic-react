import React, { Fragment } from 'react';
import './../css/chaiwala.css';

class Chaiwala extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			date: new Date().toLocaleDateString(),
			teaCount: '',
			coffeeCount: '',
			shift: 'morning',
			month: '06',
			year: '2018',
			data: '',
			reportData: {},
			showMsg: false,
		};
	}

	handleChange(field, e) {
		const {date} = this.state;
		const {teaCount} = this.state;
		const {coffeeCount} = this.state;
		const {shift} = this.state;

		this.setState({
			date: ('date' === field) ? e.target.value : date,
			teaCount: ('teaCount' === field) ? e.target.value : teaCount,
			coffeeCount: ('coffeeCount' === field) ? e.target.value : coffeeCount,
			shift: ('shift' === field) ? e.target.value : shift,
			showMsg: false
		});
	}

	handleFormSubmit(e) {
		e.preventDefault();

		let {date} = this.state;
		let dateTime = date + ' ' + new Date().toTimeString().split(' ')[0];

		fetch(`http://powerpacktest.local/wp-json/chaiwala/v2/set/?tea_count=${this.state.teaCount}&coffee_count=${this.state.coffeeCount}&tea_shift=${this.state.shift}&date=${dateTime}`)
			.then( response => response.json() )
			.then( data => {
				this.setState({
					data,
					teaCount: '',
					coffeeCount: '',
					showMsg: true
				});
			});
	}

	handleTimeChange(field, e) {

		const { month } = this.state;
		const { year } = this.state;

		this.setState({
			month: ('month' === field) ? e.target.value : month,
			year: ( 'year' === field ) ? e.target.value : year,
		});
	}

	getReport(e) {

		e.preventDefault();
		fetch(`http://powerpacktest.local/wp-json/chaiwala/v2/get/?month=${this.state.month}&year=${this.state.year}`)
			.then(response => response.json())
			.then(reportData => {
				this.setState({ reportData });
				console.log(reportData);
			});
	}

	getGrandTotal() {
		const { reportData } = this.state;
		const teaTotal = (reportData['total']['tea']['morning'] * 5) + ( reportData['total']['tea']['evening'] * 5 );
		const coffeeTotal = (reportData['total']['coffee']['morning'] * 10) + (reportData['total']['coffee']['evening'] * 10);
		return teaTotal + coffeeTotal;
	}

	render() {
		const {report} = this.props;
		const { reportData } = this.state;
		const { data } = reportData;

		return(
			<div className="ch-wrapper">
			{! report &&
			<Fragment>
				<h3>Chaiwala Helper</h3>
				<form className="ch-entries" onSubmit={this.handleFormSubmit.bind(this)}>
					<div className="ch-field">
						<label>Select Date</label>
						<input type="date" name="date" onChange={this.handleChange.bind(this, "date")} />
					</div>
					<div className="ch-field">
						<label>Tea Count</label>
						<input type="text" name="teaCount" required onChange={this.handleChange.bind(this, "teaCount")} />
					</div>
					<div className="ch-field">
						<label>Coffee Count</label>
						<input type="text" name="coffeeCount" required onChange={this.handleChange.bind(this, "coffeeCount")} />
					</div>
					<div className="ch-field">
						<label>Shift</label>
						<select name="shift" value={this.state.shift} onChange={this.handleChange.bind(this, "shift")}>
							<option value="morning">Morning</option>
							<option value="evening">Evening</option>
						</select>
					</div>
					<button>Submit</button>
					{this.state.showMsg && 
					<div>Saved!</div>}
				</form>
			</Fragment>
			}
			{report &&
			<Fragment>
			<h3>Chaiwala Report</h3>
			<form onSubmit={this.getReport.bind(this)}>
					<select name="month" value={this.state.month} onChange={this.handleTimeChange.bind(this, "month")}>
					<option>Month</option>
					<option value="01">January</option>
					<option value="02">February</option>
					<option value="03">March</option>
					<option value="04">April</option>
					<option value="05">May</option>
					<option value="06">June</option>
					<option value="07">July</option>
					<option value="08">August</option>
					<option value="09">september</option>
					<option value="10">October</option>
					<option value="11">November</option>
					<option value="12">December</option>
				</select>
					<select name="year" value={this.state.year} onChange={this.handleTimeChange.bind(this, "year")}>
					<option>Year</option>
					<option value="2018">2018</option>
					<option value="2019">2019</option>
					<option value="2020">2020</option>
					<option value="2021">2021</option>
					<option value="2022">2022</option>
					<option value="2023">2023</option>
				</select>
				<button>Submit</button>
			</form>

			<div>
			{'undefined' !== typeof reportData.data &&
				<table className="main-table">
					<thead>
						<tr>
							<th>Date</th>
							<th><span>Morning</span>
								<table>
									<thead>
										<tr>
										<th>Tea</th>
										<th>Coffee</th>
										</tr>
									</thead>
								</table>
							</th>
							<th><span>Evening</span>
								<table>
									<thead>
										<tr>
											<th>Tea</th>
											<th>Coffee</th>
										</tr>
									</thead>
								</table>
							</th>
						</tr>
					</thead>
					<tbody>
					{Object.keys(data).length > 0 && Object.keys(data).map((key, i) => (
						<tr key={i}>
							<td>{key}</td>
							<td>
								<table>
									<tbody>
										<tr>
											<td>{data[key]['tea']['morning']}</td>
											<td>{data[key]['coffee']['morning']}</td>
										</tr>
									</tbody>
								</table>
							</td>
							<td>
								<table>
									<tbody>
										<tr>
											<td>{data[key]['tea']['evening']}</td>
											<td>{data[key]['coffee']['evening']}</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					))}
					</tbody>
					<tfoot>
						<tr>
							<td>Total (₹)</td>
							<td>
								<table>
									<tbody>
										<tr>
											<td>{ reportData['total']['tea']['morning'] * 5 }</td>
											<td>{ reportData['total']['coffee']['morning'] * 10 }</td>
										</tr>
									</tbody>
								</table>
							</td>
							<td>
								<table>
									<tbody>
										<tr>
											<td>{ reportData['total']['tea']['evening'] * 5 }</td>
											<td>{ reportData['total']['coffee']['evening'] * 10 }</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr>
							<td>Grand Total (₹)</td>
							<td colSpan="2">
								{this.getGrandTotal()}
							</td>
						</tr>
					</tfoot>
				</table>
			}
			</div>

			</Fragment>
			}
			</div>
		)
	}
}

export default Chaiwala;