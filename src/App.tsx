import { ThemeProvider } from 'styled-components'
import { CyclesProvider } from './context/CyclesContext'
import { MainRoutes } from './routes'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <CyclesProvider>
        <MainRoutes />
      </CyclesProvider>
    </ThemeProvider>
  )
}
