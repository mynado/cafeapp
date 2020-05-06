import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CategoriesIndex extends React.Component {
	state = {
		categories: [],
	}

	componentDidMount() {
		axios.get('http://localhost:3000/api/categories')
		.then(response => {
			console.log(response);
			this.setState({
				categories: response.data.data.categories,
			});
		})
		.catch(err => {
			console.error('Error when fetching all categories');
		})
	}

	render() {
		console.log(this.state)
		return(
			<div id="category-index">
				<h1>Kategorier</h1>
				<ul>
					{this.state.categories.map((category, index) =>
						(<li className="" key={index}>
							<Link to={'/categories/' + category.id}>
								{category.name}
							</Link>
						</li>)
					)}
				</ul>

			</div>
		)
	}
}

export default CategoriesIndex
