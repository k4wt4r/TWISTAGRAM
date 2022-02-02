import React from 'react'
import NavBar from './Nav/NavBar'

export default function PageLayout({children}) {
	return (
		<>
			<NavBar />
			{children}
		</>
	)
}
