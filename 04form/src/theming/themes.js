import {createTheme} from '@mui/material'

export const darkTheme = createTheme({
    palette: {
        primary: {
          light: "#665794",
          main: "#402E7A",
          dark: "#2c2055"
        },
        secondary: {
          light: "#6f62d8",
          main: "#4C3BCF",
          dark: "#352990"
        },
        text: {
          main: "#fff"
        }
    }
})

export const lightTheme = createTheme({
    palette: {
        primary: {
          light: "#35baf6",
          main: "#03a9f4",
          dark: "#0276aa"
        },
        secondary: {
          light: "#6f8cf7",
          main: "#4B70F5",
          dark: "#344eab"
        },
        text: {
          main: "#000"
        }
    }
})