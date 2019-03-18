import React from "react"

const Contact = () => (
	<section id="contact" className="contact">
		<div className="contact-way">
			<img src="icons/email.svg" className="contact-way__img"></img>
			<a href="mailto:amiratak88@gmail.com" className="contact-way__link">amiratak88@gmail.com</a>
		</div>
		<div className="contact-way">
			<img src="icons/github-color.svg" className="contact-way__img"></img>
			<a href="https://github.com/amiratak88" className="contact-way__link">amiratak88</a>
		</div>
		<div className="contact-way">
			<img src="icons/medium.svg" className="contact-way__img"></img>
			<a href="https://medium.com/@amiratak88" className="contact-way__link">@amiratak88</a>
		</div>
	</section>
)

export default Contact