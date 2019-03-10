import React from 'react'

import MoreIcon from '../icons/MoreIcon'
import GitIcon from '../icons/GitIcon'
import GithubIcon from '../icons/GithubIcon'
import HerokuIcon from '../icons/HerokuIcon'
import PostmanIcon from '../icons/PostmanIcon'
import SketchIcon from '../icons/SketchIcon'

const OtherSkillsCard = () => (
	<div className="skills__card">
		<MoreIcon className="skills__category-icon" />
		<p className="skills__title">other skills</p>
		<div className="skills__hr-line"></div>
		<div className="skills__skills">
			<div className="skills__skill">
				<GitIcon className="skills__skill-icon" />
				<p className="skills__skill-title">Git</p>
			</div>
			<div className="skills__skill">
				<GithubIcon className="skills__skill-icon" />
				<p className="skills__skill-title">Github</p>
			</div>
			<div className="skills__skill">
				<HerokuIcon className="skills__skill-icon" />
				<p className="skills__skill-title">Heroku</p>
			</div>
			<div className="skills__skill">
				<PostmanIcon className="skills__skill-icon skills__skill-icon--fix" />
				<p className="skills__skill-title">Postman</p>
			</div>
			<div className="skills__skill">
				<SketchIcon className="skills__skill-icon skills__skill-icon--fix" />
				<p className="skills__skill-title">Sketch</p>
			</div>
		</div>
	</div>
)

export default OtherSkillsCard