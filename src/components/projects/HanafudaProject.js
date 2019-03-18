import React from "react"

const HanafudaProject = () => (
	<div className="project__card">

		<div className="project__actions">
			<a target="_blank" href="https://github.com/amiratak88/hanafuda-front-end"><img src="icons/github.svg"></img></a>
			<a target="_blank" href="https://youtu.be/dS7ngUGKpDs"><img src="icons/youtube.svg"></img></a>
		</div>
		<h2 className="project__title">Hanafuda</h2>

		<div className="project__img-box">
			<img src="/demo-gifs/hanafuda-demo.gif" className="project__img" />
		</div>


		<div className="project__hr-line"></div>

		<p className="project__description">
			Built a rails API to shuffle and deal the cards
		</p>

		<ul className="project__features-list">
			<li className="project__feature-item">
				<img src="icons/check-mark.png" />
				<p>Incorporated vanilla JavaScript to manipulate the DOM and move cards around the board</p>
			</li>
			<li className="project__feature-item">
				<img src="icons/check-mark.png" />
				<p>Developed logic to calculate the total score based on the collected cards</p>
			</li>
		</ul>
	</div>
)

export default HanafudaProject