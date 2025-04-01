import { Box, useTheme } from '@mui/material'

const Footer = () => {
    const theme = useTheme()

    return (
        <Box style={{display: "flex", justifyContent: "center", backgroundColor: theme.palette.primary.main, color: theme.palette.text.main}} >
            <h1>Footer</h1>
        </Box>
    )
}

export default Footer