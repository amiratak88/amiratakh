import React, { Component } from 'react'

import DownloadIcon from './icons/DownloadIcon'

class Nav extends Component {
	render() {
		return (
			<nav className="nav">
				<a className="nav__link" href="#home">home</a>
				<a className="nav__link" href="#skills">technical skills</a>
				<a className="nav__link" href="#projects">technical projects</a>
				<a className="nav__link" href="#contact">contact</a>
				<a target="_blank" href="resume-site-v1.pdf" className="nav__link nav__link--resume">
					<p>resume</p>
					<DownloadIcon className="nav__icon" />
				</a>
			</nav>
		)
	}
}

export default Nav
