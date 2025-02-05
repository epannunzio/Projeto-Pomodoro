//a extensão d.ts significa definição de tipos, que dentro desse arquivo existem apenas códigos typescript

import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType { }
}

//aqui, integramos as propriedades de estilo que antes não estavam integradas