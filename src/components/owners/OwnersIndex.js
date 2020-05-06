import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class OwnersIndex extends React.Component {
	state = {
		owners: [],
	}

	componentDidMount() {
		axios.get('http://localhost:3000/api/owners')
		.then(response => {
			console.log(response);
			this.setState({
				owners: response.data.data.owners,
			});
		})
		.catch(err => {
			console.error('Error when fetching all owners');
		})
	}

	render() {
		return(
			<div id="owner-index">
				<h1>Ägarlista</h1>
				<ul>
					{this.state.owners.map((owner, index) =>
						(<li className="" key={index}>
							<Link to={'/owners/' + owner.id}>
								{owner.first_name} {owner.last_name}
							</Link>
						</li>)
					)}
				</ul>

			</div>
		)
	}
}

export default OwnersIndex
