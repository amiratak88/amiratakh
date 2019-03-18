import React, { Component } from 'react'

import EatupProject from "./EatupProject"
import FlatUniProject from "./FlatUniProject"
import HanafudaProject from "./HanafudaProject"

class Projects extends Component {
	render() {
		return (
			<section className="projects">
				<h1 className="projects__heading">technical projects</h1>
				<div className="projects__box">
					<EatupProject />
					<FlatUniProject />
					<HanafudaProject />
				</div>
			</section>
		)
	}
}

export default Projects