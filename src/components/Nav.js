import React, { Component, Fragment } from 'react'

import DownloadIcon from './icons/DownloadIcon'

class Nav extends Component {

	state = {
		showNav: false
	}

	closeNav = () => this.setState({ showNav: false })
	toggleNav = () => this.setState({ showNav: !this.state.showNav })

	getNavClass = () => {
		return this.state.showNav ? "nav" : "nav nav--hidden"
	}

	render() {
		return (
			<Fragment>
				<nav className="nav-small">
					<input id="nav-checkbox" className="nav-small__checkbox" type="checkbox"></input>
					<label onClick={this.toggleNav} className="nav-small__label" htmlFor="nav-checkbox">
						<div className="nav-small__hamburger">
							<div>
							</div>
						</div>
					</label>
				</nav>
				<nav className={this.getNavClass()}>
					<a onClick={this.closeNav} className="nav__link" href="#home">home</a>
					<a onClick={this.closeNav} className="nav__link" href="#skills">technical skills</a>
					<a onClick={this.closeNav} className="nav__link" href="#projects">technical projects</a>
					<a onClick={this.closeNav} className="nav__link" href="#contact">contact</a>
					<a onClick={this.closeNav} target="_blank" href="resume-site-v1.pdf" className="nav__link nav__link--resume">
						<p>resume</p>
						<DownloadIcon className="nav__icon" />
					</a>
				</nav>
			</Fragment>
		)
	}
}

export default Nav
