import React from 'react'

import WebIcon from '../icons/WebIcon'
import HTMLIcon from '../icons/HTMLIcon'
import CSSIcon from '../icons/CSSIcon'
import JSIcon from '../icons/JSIcon'
import SassIcon from '../icons/SassIcon'

const WebBasicsCard = () => (
	<div className="skills__card">
		<WebIcon className="skills__category-icon" />
		<p className="skills__title">web basics</p>
		<div className="skills__hr-line"></div>
		<div className="skills__skills">
			<div className="skills__skill">
				<HTMLIcon className="skills__skill-icon" />
				<p className="skills__skill-title">HTML</p>
			</div>
			<div className="skills__skill">
				<CSSIcon className="skills__skill-icon" />
				<p className="skills__skill-title">CSS</p>
			</div>
			<div className="skills__skill">
				<JSIcon className="skills__skill-icon" />
				<p className="skills__skill-title">JS</p>
			</div>
			<div className="skills__skill">
				<SassIcon className="skills__skill-icon skills__skill-icon--fix" />
				<p className="skills__skill-title">Sass</p>
			</div>
		</div>
	</div>
)

export default WebBasicsCard