import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class UpdateCafe extends React.Component {
	state = {
		cafe: false,
	}

	componentDidMount() {
		this.getCafe()
	}

	getCafe = () => {
		axios.get('http://localhost:3000/api/cafes/' + this.props.match.params.id)
		.then(response => {
			this.setState({
				name: response.data.data.cafe.name,
				address: response.data.data.cafe.address,
				city: response.data.data.cafe.city,
			});
		})
		.catch(err => {
			console.error("Error when fetching all cafees.", err);
		});
	}

	updateCafe = () => {
		axios.put(`http://localhost:3000/api/cafes/${this.props.match.params.id}`, this.state)
		.then(result => {
			this.setState({
				cafe: result.data.data.cafe,
			})
			console.log(result.data.data.cafe.id)
			// redirect to café
			this.props.history.push('/cafes/' + result.data.data.cafe.id)
			this.getCafe();
		})
		.catch(err => {
			console.error(err);
		})
	}

	deleteCafe = () => {
		axios.delete(`http://localhost:3000/api/cafes/${this.props.match.params.id}`)
		.then(result => {
			console.log(result.data.status)
			this.props.history.push("/")
		})
		.catch(err => {
			console.log(err)
		})
	}

	handleDelete = (e) => {
		e.preventDefault();
		console.log('delete')
		this.deleteCafe();
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	}

	handleUpdate = (e) => {
		e.preventDefault();
		console.log('update')
		this.updateCafe();
	}

	render() {
		return (
			<form>
				<div className="form-group">
					<label htmlFor="name">Namn</label>
					<input
						type="text"
						className="form-control"
						id="name"
						value={this.state.name}
						onChange={this.handleChange} />
					<label htmlFor="address">Adress</label>
					<input
						type="text"
						className="form-control"
						id="address"
						value={this.state.address}
						onChange={this.handleChange}
						/>
					<label htmlFor="city">Stad</label>
					<input
						type="text"
						className="form-control"
						id="city"
						value={this.state.city}
						onChange={this.handleChange}
						/>
				</div>
				<button
					type="submit"
					className="btn btn-primary"
					onClick={this.handleUpdate}>
					Uppdatera
				</button>

				<button
					className="btn btn-danger ml-2"
					onClick={this.handleDelete}>
					Radera
				</button>
			</form>
		)
	}
}

export default UpdateCafe
