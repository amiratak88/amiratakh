import React from 'react'

import DatabaseIcon from '../icons/DatabaseIcon'
import PostgresIcon from '../icons/PostgresIcon'
import MongoDBIcon from '../icons/MongoDBIcon'

const DatabasesCard = () => (
	<div className="skills__card">
		<DatabaseIcon className="skills__category-icon" />
		<p className="skills__title">databases</p>
		<div className="skills__hr-line"></div>
		<div className="skills__skills">
			<div className="skills__skill">
				<PostgresIcon className="skills__skill-icon" />
				<p className="skills__skill-title">PostgreSQL</p>
			</div>
			<div className="skills__skill">
				<MongoDBIcon className="skills__skill-icon" />
				<p className="skills__skill-title">MongoDB</p>
			</div>
		</div>
	</div>
)

export default DatabasesCard