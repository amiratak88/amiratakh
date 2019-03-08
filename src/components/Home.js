import React, { Component } from 'react'

// import Image from 'public/img/nyc.svg'

class Home extends Component {
	render() {
		return (
			<section id="home" className="home">
				<h1 className="home__heading">Welcome to My Site</h1>
				<p className="home__text">I’m Amirata, a full stack web developer. My knowledge in HTML, CSS, JavaScript, React.js and Ruby on Rails mixed with
		passion and determination inspires me to build apps that enable positive change in our everyday lives.</p>
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
				{/* <img className="home__img" src={require("public/img/nyc.svg")} /> */}
				<svg className="home__img">
					<use xlinkHref="public/img/sprite.svg#nyc">

					</use>
				</svg>
			</section>
		)
	}
}

export default Home
