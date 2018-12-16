const darkColors = {
  black: '#111111',
  grayDark: '#282A36',
  gray: '#6C6C6C',
  grayLight: '#EEF0F2',
  pink: '#FF6AC1',
  orange: '#FF5C57',
  blue: '#55C2F8',
  green: '#5AF78E',
}

const lightColors = {}

export const theme = {
  dark: {
    primaryColor: darkColors.blue,
    secondaryColor: darkColors.green,
    textColor: darkColors.grayLight,
    bgColor: darkColors.grayDark,
  },
  light: {
    primaryColor: lightColors.blue,
    secondaryColor: lightColors.gray,
    textColor: lightColors.yellow,
    bgColor: lightColors.sand,
  },
}
