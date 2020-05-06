import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CafesIndex extends React.Component {
	state = {
		cafes: [],
	}

	componentDidMount() {
		axios.get('http://localhost:3000/api/cafes')
		.then(response => {
			this.setState({
				cafes: response.data.data.cafes,
			});
		})
		.catch(err => {
			console.error("Error when fetching all cafees.", err);
		});
	}

	render() {
		return(
			<div id="cafe-index">
				<h1>Alla caféer</h1>

				<ul>
					{this.state.cafes.map((cafe, index) =>
						(<li className="" key={index}>
							<Link to={'/cafes/' + cafe.id}>{cafe.name} ({cafe.id})</Link>
						</li>)
					)}
				</ul>
				<Link to="/cafes/create" className="btn btn-success mt-3">Skapa ett nytt café</Link>
			</div>
		)
	}
}

export default CafesIndex
