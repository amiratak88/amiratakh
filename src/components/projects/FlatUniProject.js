import React from "react"

const FlatUniProject = () => (
	<div className="project__card">

		<div className="project__actions">
			<a target="_blank" href="https://github.com/amiratak88/flatiron_university"><img src="icons/github.svg"></img></a>
			<a target="_blank" href="https://youtu.be/ZNDX129n4Uc"><img src="icons/youtube.svg"></img></a>
		</div>
		<h2 className="project__title">Flatiron University</h2>

		<div className="project__img-box">
			<img src="/demo-gifs/flat-uni-demo.gif" className="project__img" />
		</div>


		<div className="project__hr-line"></div>

		<p className="project__description">
			A platform for students and professors to manage their school related activities such as course registration, grading and etc.
		</p>

		<ul className="project__features-list">
			<li className="project__feature-item">
				<img src="icons/check-mark.png" />
				<p>Employed Ruby on Rails along with standard design patterns to develop an MVC app</p>
			</li>
			<li className="project__feature-item">
				<img src="icons/check-mark.png" />
				<p>Worked with “sessions” to store the logged-in status</p>
			</li>
			<li className="project__feature-item">
				<img src="icons/check-mark.png" />
				<p>Implemented required logic to redirect users from unauthorized views</p>
			</li>
			<li className="project__feature-item">
				<img src="icons/check-mark.png" />
				<p>Used bcrypt gem for authentication and storing encrypted password in the database</p>
			</li>
		</ul>
	</div>
)

export default FlatUniProject