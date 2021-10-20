import React from "react";
import './Demo.scss'
class ChildComponent extends React.Component {
	state = {
		showJobs: false
	}
	handelShowHide = () => {
		this.setState({
			showJobs: !this.state.showJobs
		})
	}
	handelOnClickDelete = (job) => {
		this.props.deleteAJob(job)
	}
	render() {
		let { jobs } = this.props;
		let { showJobs } = this.state;
		let check = showJobs === false ? 'showJobs = false' : 'showJobs = true'
		return (
			<>
				{showJobs === false ?
					<div
					><button
						style={{ color: 'red' }}
						onClick={() => this.handelShowHide()}
						className="btn-show"
					>
							SHow
						</button>
					</div>
					:
					<>
						<div>
							{jobs.map((job, index) => {
								return (
									<div key={index}>{job.title}-{job.salary} <> </>
										<span
											onClick={() => this.handelOnClickDelete(job)}
										>x</span>
									</div>
								)
							})}
						</div>
						<div><button onClick={() => this.handelShowHide()}>Hide</button></div>
					</>}
			</>
		)
	}
}

export default ChildComponent;