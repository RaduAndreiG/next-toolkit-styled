import React, { ReactNode } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Header from '../Header/Header'
import { COLORS } from '../../styles/constants'

interface Props {
	children?: ReactNode
	// any props that come into the component
}

const Layout = ({ children }: Props) => {
	const router = useRouter()

	const showHeader = router.pathname === '/log-in' ? false : true
	return (
		<>
			<Header /> {/* {showHeader ? <Header /> : null} */}
			<Content>{children}</Content>
			{/* <Footer /> */}
		</>
	)
}

const Content = styled.div`
	display: block;
	background-color: ${COLORS.background.one};
`

export default Layout
