import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
	/**
	 * 
	 * @returns 
	 * jsx => return block
	 * 
	 */
	state = {
		arrJobs: [
			{ id: 'abxJob1', title: 'Developers', salary: '500' },
			{ id: 'abxJob2', title: 'Testers', salary: '400' },
			{ id: 'abxJob3', title: 'Manager', salary: '800' },
		]
	}
	addNewJob = (job) => {
		console.log('check submit from parent', job)
		this.setState({
			arrJobs: [...this.state.arrJobs, job]
		})
	}
	deleteAJob = (job) => {
		let currentJob = this.state.arrJobs;
		currentJob = currentJob.filter(item => item.id !== job.id)
		this.setState({
			arrJobs: currentJob
		})
	}
	componentDidMount() {
		console.log('>>>component did mount')
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('>>> component did update', 'prev state:', prevState, 'currentState', this.state)
	}
	render() {
		console.log('>>>call render:', this.state)
		return (
			<>
				<AddComponent
					addNewJob={this.addNewJob}
				/>
				<div>
					<ChildComponent
						jobs={this.state.arrJobs}
						deleteAJob={this.deleteAJob}
					/>
				</div>
			</>
		)
	}
}
export default MyComponent;