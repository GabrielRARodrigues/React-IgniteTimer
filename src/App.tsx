import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'

import { Button } from './components/Button'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Button variant="primary">Enviar</Button>
      <Button variant="secondary">Enviar</Button>
      <Button variant="danger">Enviar</Button>
      <Button variant="success">Enviar</Button>
      <Button>Enviar</Button>
    </ThemeProvider>
  )
}
