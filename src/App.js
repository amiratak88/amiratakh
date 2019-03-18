import React, { Component, Fragment } from 'react'

import Nav from './components/Nav'
import Home from './components/home/Home'
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';


class App extends Component {
	render() {
		return (
			<Fragment>
				<Nav />
				<Home />
				<Skills />
				<Projects />
			</Fragment>
		)
	}
}

export default App
