import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <div>
        <h1>hello world</h1>
      </div>
    </ThemeProvider>
  )
}
