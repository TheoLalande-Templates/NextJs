import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient } from '@tanstack/react-query'
import { MedusaProvider } from 'medusa-react'
import { env } from '../../env.mjs'
import Medusa from '@medusajs/medusa-js'
import { darkTheme, lightTheme } from '../components/theme'
import { Outfit } from 'next/font/google'
import StoreProvider from '../storeProvider'
import { ColorModeScript } from '@chakra-ui/react'
const outfit = Outfit({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient()
	const medusaClient = new Medusa({
		baseUrl: env.NEXT_PUBLIC_MEDUSA_BACKEND_URL,
		maxRetries: 1,
	})

	return (
		<StoreProvider>
			<ChakraProvider theme={lightTheme}>
				<MedusaProvider
					medusaClient={medusaClient}
					queryClientProviderProps={{ client: queryClient }}
					baseUrl={env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}
				>
					<div className={outfit.className}>
						<Component {...pageProps} />
					</div>
				</MedusaProvider>
			</ChakraProvider>
		</StoreProvider>
	)
}
