// Arquivo d.ts só terá definição de tipos TypeScript, Arquivo de Definição de tipos
import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// obtendo o tipo de uma variavel exportada anteriormente
type ThemeType = typeof defaultTheme

// toda a vez que eu importo o styled-components, a definição de tipagem, que ele irá utilizar será a definida neste arquivo
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
