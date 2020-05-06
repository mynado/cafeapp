import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class OwnersShow extends React.Component {
	state = {
		owner: false,
		cafes: [],
	}

	componentDidMount() {
		axios.get('http://localhost:3000/api/owners/' + this.props.match.params.id)
		.then(response => {
			console.log(response.data);
			this.setState({
				owner: response.data.data.owner,
				cafes: response.data.data.cafes,
			})
		})
		.catch(err => {
			console.error('Error when fetching all owners', err)
		})
	}

	render() {
		const { first_name, last_name, phone, email } = this.state.owner;
		console.log(this.state)
		return(
			<div id="owner-show">
				{this.state.owner ? (
					<div>
						<h1>{ first_name } { last_name }</h1>
						<h2>{ email }, { phone }</h2>
						<hr />
						<h3>Caféer</h3>
						<ul>
							{ this.state.cafes.map((cafe, i) => {
								return(
									<li key={i}>
										<Link to={'/cafes/' + cafe.id}>{cafe.name}</Link>
									</li>
								)
							}) }
						</ul>

					</div>
				) : (
					<h1>Laddar...</h1>
				)}

			</div>
		)
	}
}

export default OwnersShow
