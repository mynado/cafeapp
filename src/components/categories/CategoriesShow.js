import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CategoriesShow extends React.Component {
	state = {
		categories: [],
		cafes: [],
	}

	componentDidMount() {
		axios.get('http://localhost:3000/api/categories/' + this.props.match.params.id)
		.then(response => {
			console.log(response.data);
			this.setState({
				categories: response.data.data.category,
				cafes: response.data.data.cafes,
			})
		})
		.catch(err => {
			console.error('Error when fetching all categories', err)
		})
	}

	render() {
		console.log('this.state', this.state)
		const cafes = this.state.cafes;
		const { name } = this.state.categories;
		return(
			<div id="category-show">
				<h1> { name } </h1>
				<ul>
					{ cafes.map((cafe, i) => {
						return(
							<li key={i}>
								<Link to={'/cafes/' + cafe.id}>{cafe.name}</Link>
							</li>
						)
					}) }
				</ul>

			</div>
		)
	}
}

export default CategoriesShow
