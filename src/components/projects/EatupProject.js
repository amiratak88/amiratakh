import React from "react"

const EatupProject = () => (
	<div className="project__card">

		<div className="project__actions">
			<a target="_blank" href="https://github.com/amiratak88/eatup-client"><img src="icons/github.svg"></img></a>
			<a target="_blank" href="https://youtu.be/O9pYRAWddMY"><img src="icons/youtube.svg"></img></a>
		</div>
		<h2 className="project__title">Eatup</h2>

		<div className="project__img-box">
			<img src="/demo-gifs/eatup-demo.gif" className="project__img" />
		</div>


		<div className="project__hr-line"></div>

		<p className="project__description">
			Allows restaurants to upload their menu and receive online orders in real time
		</p>

		<ul className="project__features-list">
			<li className="project__feature-item">
				<img src="icons/check-mark.png" />
				<p>Built a restful API using Ruby on Rails</p>
			</li>
			<li className="project__feature-item">
				<img src="icons/check-mark.png" />
				<p>Employed action cables and web sockets to allow real time features, including search, ordering and order updates for both customers and managers</p>
			</li>
			<li className="project__feature-item">
				<img src="icons/check-mark.png" />
				<p>Developed front end incorporating React, Redux and Semantic UI React for the user interface design</p>
			</li>
		</ul>
	</div>
)

export default EatupProject