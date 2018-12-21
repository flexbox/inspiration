const palette = {
  black: '#1F2933',
  grayDark: '#3E4C59',
  gray: '#7B8794',
  grayLight: '#CBD2D9',
  grayLighter: '#F5F7FA',
  white: '#FFFFFF',
  pink: '#E8368F',
  red: '#EF4E4E',
  blue: '#2BB0ED',
  yellow: '#F7C948',
  green: '#3EBD93',
}

export default {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    primary: palette.blue,
    secondary: palette.pink,
    text: palette.black,
    border: palette.gray,
    bg: palette.grayLighter,
    sectionBg: palette.white,
    sectionText: palette.black,
    gray: palette.gray,
    grayLight: palette.grayLight,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  Heading: {
    fontFamily: '"Vidaloka", serif',
    lineHeight: 1.25,
    color: palette.grayLight,
  },
  Link: {
    color: palette.blue,
  },
}
