import React from 'react'
import styled from 'styled-components'
import { Container } from '../../styles/components'

const Header = () => {
	return (
		<OuterContainer>
			<Container>
				<InnerContainer>Header</InnerContainer>
			</Container>
		</OuterContainer>
	)
}

const OuterContainer = styled.div`
	display: block;
`

const InnerContainer = styled.div`
	display: block;
`

export default Header
