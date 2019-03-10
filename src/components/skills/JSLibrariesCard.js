import React from 'react'

import BooksIcon from '../icons/BooksIcon'
import ReactIcon from '../icons/ReactIcon'
import ReduxIcon from '../icons/ReduxIcon'
import D3Icon from '../icons/D3Icon'

const JSLibrariesCard = () => (
	<div className="skills__card">
		<BooksIcon className="skills__category-icon" />
		<p className="skills__title">js libraries</p>
		<div className="skills__hr-line"></div>
		<div className="skills__skills">
			<div className="skills__skill">
				<ReactIcon className="skills__skill-icon" />
				<p className="skills__skill-title">React.js</p>
			</div>
			<div className="skills__skill">
				<ReduxIcon className="skills__skill-icon" />
				<p className="skills__skill-title">Redux.js</p>
			</div>
			<div className="skills__skill">
				<D3Icon className="skills__skill-icon" />
				<p className="skills__skill-title">D3.js</p>
			</div>
		</div>
	</div>
)

export default JSLibrariesCard