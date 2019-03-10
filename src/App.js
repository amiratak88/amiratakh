import React, { Component, Fragment } from 'react'

import Nav from './components/Nav'
import Home from './components/home/Home'
import Skills from './components/skills/Skills';


class App extends Component {
	render() {
		return (
			<Fragment>
				<Nav />
				<Home />
				<Skills />
			</Fragment>
		)
	}
}

export default App
