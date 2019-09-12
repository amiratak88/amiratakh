import React, { Component } from 'react'

import Image from './Image'

class Home extends Component {
	render() {
		return (
			<section id="home" className="home">
				<h1 className="home__heading">Amirata Khodaparast</h1>
				<p className="home__text">Hello, thanks for checking out my portfolio</p>
				<p className="home__text">I’m a full stack web developer based in greater New York City area.</p>
				<p className="home__text">I'm proficient in technologies like Ruby on Rails, ReactJS and NodeJS.</p>
				<p className="home__text">I strive to become a better developer everyday by experimenting with new languages and technologies and learning modern techniques and best practices. Currently seeking a full time position in the web and software industry</p>
				<div className="scroll">
					<p className="scroll__text">Scroll</p>
					<div className="scroll__chevron">
						<div className="scroll__line"></div>
						<div className="scroll__line"></div>
					</div>
					<div className="scroll__chevron">
						<div className="scroll__line"></div>
						<div className="scroll__line"></div>
					</div>
					<div className="scroll__chevron">
						<div className="scroll__line"></div>
						<div className="scroll__line"></div>
					</div>
				</div>
				<Image />
			</section>
		)
	}
}

export default Home
