
export enum ThemeStyle {
  LIGHT = 'LIGHT',
  DARKK = 'DARK'
}
export interface colorsType {
  textPrimary?:string,
  textSecondary?: string,
  
  buttonPrimary?: string,
  buttonTextPrimary?: string,
  buttonSecondary?: string,
  buttonTextSecondary?: string,
  placeholderColor?:string,
  tinColor?: string,
  profileColor?: string,
  borderColor?: string,
  backgroundColor?: string,
  white?: string,
  black?: string,
  darkorange?: string
};
export interface fontFamilyType {
  medium?: string,
  regular?: string,
  bold?: string,
  italic?: string
};
export interface fontSizeType {
  default?: number,
}

export interface ITheme {

  background?: string,
  colors?: colorsType,
  fontFamily?: fontFamilyType,
  fontSize?: fontSizeType,


}
type ThemeType = { [key in ThemeStyle]: ITheme };
export const Theme: ThemeType = {
  LIGHT: {
      fontFamily: {
          regular: 'Roboto-Regular',
          bold: 'Roboto-Bold',
          italic: 'Roboto-Italic',
          medium: 'Roboto-Bold',
      },
      colors:
      {
        textPrimary:'#000001',
        textSecondary:'#1877F4',
        buttonPrimary:'#1877F4',
        buttonSecondary:'#E3E6EC',
        buttonTextPrimary:'white',
        buttonTextSecondary:'#EDEEF0',
        placeholderColor:'#9d9ea3',
        tinColor:'#00eeff',
        profileColor: '#EEE',
        backgroundColor:'#9d9ea3',
        borderColor:'#9d9ea3',
        white: '#FFF',
        black: '#000',
        darkorange: '#FF8C00'
      }

  },
  DARK: {

  }

}