import type { AppProps } from 'next/app'
import { store } from '../store'
import { Provider } from 'react-redux'
import GlobalStyle from '../styles/globalStyle'
import Layout from '../features/Layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<GlobalStyle />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}

export default MyApp
