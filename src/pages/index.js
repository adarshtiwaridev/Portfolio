import React from 'react'
import { Header, Hero, About, Projects, Contact, Footer } from '../Components'

export default function Home() {
	return (
		<div style={{fontFamily: 'Inter, system-ui, Arial, sans-serif', color: '#111'}}>
			<Header />
			<main>
				<Hero />
				<About />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</div>
	)
}
