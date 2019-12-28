const palette = {
  black: '#1F2933',
  grayDark: '#3E4C59',
  gray: '#7B8794',
  grayLight: '#CBD2D9',
  grayLighter: '#F5F7FA',
  white: '#FFFFFF',
  pink: '#E8368F',
  red: '#EF4E4E',
  blueLight: '#C8EEFF',
  blue: '#2BB0ED',
  blueDark: '#1F80AD',
  yellow: '#F7C948',
  green: '#3EBD93',
}

export default {
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
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    heading: 'Vidaloka, serif',
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  lineHeights: {
    body: 1.8,
    heading: 1.25,
  },
  shadows: {
    small: '0 1px 1px hsla(255, 0%, 0%, 0.1)',
    large: '0 4px 6px hsla(255, 0%, 0%, 0.1)',
    xlarge: '0 1px 15px hsla(255, 0%, 0%, 0.1)',
  },
  text: {
    heading: {
      color: palette.gray,
    },
    display: {
      color: palette.gray,
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
  link: {
    color: palette.blue,
    '&:hover': {
      textDecoration: 'none',
    },
  },
  buttons: {
    primary: {
      color: palette.gray,
      backgroundColor: palette.grayLight,
      boxShadow: 'small',
      fontWeight: 'bold',
      transition: 'box-shadow 0.3s ease-in-out',
      '&:hover': {
        color: palette.grayDark,
        cursor: 'pointer',
        boxShadow: 'large',
      },
    },
    secondary: {
      variant: 'buttons.primary',
      color: palette.blueLight,
      bg: palette.blue,
      '&:hover': {
        color: palette.white,
        cursor: 'pointer',
        boxShadow: 'large',
      },
    },
  },
}
