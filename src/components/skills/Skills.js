import React from 'react'

import WebBasicsCard from './WebBasicsCard'
import DatabasesCard from './DatabasesCard'
import BackendCard from './BackendCard'
import JSLibrariesCard from './JSLibrariesCard'
import OtherSkillsCard from './OtherSkillsCard'

const Skills = () => (
	<section id="skills" className="skills">
		<h1 className="skills__heading">technical skills</h1>
		<div className="skills__box">
			<WebBasicsCard />
			<BackendCard />
			<JSLibrariesCard />
			<DatabasesCard />
			<OtherSkillsCard />
		</div>
	</section>
)

export default Skills