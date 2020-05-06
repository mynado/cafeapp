import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class CafesShow extends React.Component {
	state = {
		cafe: false,
		error: false,
	}

	componentDidMount() {
		axios.get('http://localhost:3000/api/cafes/' + this.props.match.params.id)
		.then(response => {
			if (response.data.status !== 'success') {
				this.setState({
					error: response.data.message || 'A unknown error occurred.'
				});
				return;
			}
			this.setState({
				cafe: response.data.data.cafe,
			});
		})
		.catch(err => {
			console.error("Error when fetching all cafees.", err);
		});
	}


	render() {
		const { id, name, address, city, owner } = this.state.cafe;
		const categories = this.state.cafe.categories;

		return(
			<div id="cafe-show">
				{this.state.cafe ? (
					<div>
						<h1>{ name }</h1>
						<h2>
							{ address
								? `${address}, ${city}`
								: city }
						</h2>
						<hr />
						<h3>Ägare</h3>
						{ owner
							? <Link to={'/owners/' + owner.id}>{ owner.first_name } { owner.last_name }</Link>
							: <em>Caféet saknar ägare</em>}

						<hr />
						<h3>Kategorier</h3>
						<ul>
							{ categories.length > 0
								? categories.map(category => {
									return (
										<li key={category.id}>
											<Link to={'/categories/' + category.id}>{category.name}
											</Link>
										</li>
										)
									})
								: <em>
									<li>Caféet saknar kategorier</li>
								</em>
							}
						</ul>

					</div>
				) : (
					<h1>Laddar...</h1>
				)}
				<Link to={`/cafes/${id}/edit`}>
					<button
						className="btn btn-primary mt-3">
						Redigera
					</button>
				</Link>
			</div>
		)
	}
}

export default CafesShow
