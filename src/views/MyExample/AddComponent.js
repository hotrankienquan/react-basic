import React from "react";

class AddComponent extends React.Component {
	state = {
		title: '',
		salary: ''
	}
	handleChangeTitleJob = (e) => {
		this.setState({
			title: e.target.value
		})
	}
	handleChangeSalary = (e) => {
		this.setState({
			salary: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault()
		console.log('check data input', this.state)
		if (!this.state.title || !this.state.salary) {
			alert("missing something")
			return;
		}
		this.props.addNewJob({
			id: Math.floor(Math.random() * 1001),
			title: this.state.title,
			salary: this.state.salary
		})
		this.setState({
			title: '',
			salary: ''
		})
	}
	render() {
		return (
			<div>
				<div>hello add Component</div>
				<form action="/action_page.php">
					<label >Job title:</label><br />
					<input
						type="text"
						value={this.state.title}
						onChange={(e) => this.handleChangeTitleJob(e)}
					/><br />
					<label htmlFor="lname">Salary:</label><br />
					<input type="text" value={this.state.salary}
						onChange={(e) => this.handleChangeSalary(e)}
					/><br></br>
					<input type="submit" value="Submit"
						onClick={(e) => this.handleSubmit(e)} />
				</form>
			</div>
		)
	}

}
export default AddComponent;