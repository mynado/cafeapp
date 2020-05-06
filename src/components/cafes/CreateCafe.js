import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class CreateCafe extends React.Component {
	state = {}

	addCafe = () => {
		axios.post('http://localhost:3000/api/cafes', this.state)
		.then(result => {
			console.log(result)
			this.setState({
				id: result.data.id,
			})
			this.props.history.push('/cafes/' + result.data.id)
		})
		.catch(err => {
			console.error(err);
		})
	}

	handleChange = (e) => {
		console.log(e.target.value)
		this.setState({
			[e.target.id]: e.target.value,
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('submit')
		this.addCafe();
		console.log(this.state)
	}

	render() {
		console.log(this.state)
		return (
			<form>
				<div className="form-group">
					<label htmlFor="name">Namn</label>
					<input
						type="text"
						className="form-control"
						id="name"
						onChange={this.handleChange} />
					<label htmlFor="address">Adress</label>
					<input
						type="text"
						className="form-control"
						id="address"
						onChange={this.handleChange}
						/>
					<label htmlFor="city">Stad</label>
					<input
						type="text"
						className="form-control"
						id="city"
						onChange={this.handleChange}
						/>
				</div>
				<button
					type="submit"
					className="btn btn-success"
					onClick={this.handleSubmit}>
					Submit
				</button>
			</form>
		)
	}
}

export default CreateCafe
