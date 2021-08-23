import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { AuthContextProvider } from '../contexts/AuthContext'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
