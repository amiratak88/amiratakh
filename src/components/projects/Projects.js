import React, { Component } from 'react'

import EatupProject from "./EatupProject"

class Projects extends Component {
	render() {
		return (
			<section className="projects">
				<h1 className="projects__heading">technical projects</h1>
				<div className="projects__pojects-box">
					<EatupProject />
				</div>
			</section>
		)
	}
}

export default Projects