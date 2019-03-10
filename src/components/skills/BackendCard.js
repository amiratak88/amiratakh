import React from 'react'

import ServerIcon from '../icons/ServerIcon'
import RubyIcon from '../icons/RubyIcon'
import RailsIcon from '../icons/RailsIcon'
import NodeIcon from '../icons/NodeIcon'
import ExpressIcon from '../icons/ExpressIcon'

const BackendCard = () => (
	<div className="skills__card">
		<ServerIcon className="skills__category-icon" />
		<p className="skills__title">back-end languages and frameworks</p>
		<div className="skills__hr-line"></div>
		<div className="skills__skills">
			<div className="skills__skill">
				<RubyIcon className="skills__skill-icon" />
				<p className="skills__skill-title">Ruby</p>
			</div>
			<div className="skills__skill">
				<RailsIcon className="skills__skill-icon" />
				<p className="skills__skill-title">Ruby on Rails</p>
			</div>
			<div className="skills__skill">
				<NodeIcon className="skills__skill-icon" />
				<p className="skills__skill-title">Node.js</p>
			</div>
			<div className="skills__skill">
				<ExpressIcon className="skills__skill-icon" />
				<p className="skills__skill-title">Express.js</p>
			</div>
		</div>
	</div>
)

export default BackendCard