import '@fontsource/poppins'
import '@fontsource/playfair-display'

import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import React from 'react'

import { theme } from '~/styles'

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (
    <ChakraProvider theme={theme}>
        <Component {...pageProps} />
    </ChakraProvider>
)

export default MyApp
