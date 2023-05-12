import '@/styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className='font-GR'>
			<Head>
				<link rel='icon' type='image/x-icon' href='/favicon.ico' />
				<title>zkLaunch | zkSync Launchpad</title>

				<link rel='icon' type='image/png' sizes='32x32' href='/favicon.ico' />

				<meta name='title' content='zkLaunch | zkSync Launchpad' />

				<meta
					name='description'
					content='zkLaunch is a token launch platform that helps blockchain projects raise funds and increase their reach across the crypto ecosystem.'
				/>

				<meta property='og:type' content='website' />

				<meta property='og:url' content='https://zklaunch.app/' />

				<meta property='og:title' content='zkLaunch | zkSync Launchpad' />

				<meta
					property='og:description'
					content='zkLaunch is a token launch platform that helps blockchain projects raise funds and increase their reach across the crypto ecosystem.'
				/>

				<meta property='og:image' content='preview.png' />

				<meta property='twitter:card' content='summary_large_image' />

				<meta property='twitter:url' content='https://zklaunch.app/' />

				<meta property='twitter:title' content='zkLaunch | zkSync Launchpad' />

				<meta
					property='twitter:description'
					content='zkLaunch is a token launch platform that helps blockchain projects raise funds and increase their reach across the crypto ecosystem.'
				/>

				<meta property='twitter:image' content='preview.png' />
			</Head>
			<Component {...pageProps} />
		</div>
	)
}
