import {createTheme} from "@mui/material";
import {ThemesMap} from "./ThemesMap.tsx";

const theme = createTheme({
    palette: ThemesMap["dark"].palette,
    typography: {
        fontFamily: "Open Sans, sans-serif",

        body1: {
            fontSize: "40px",
        },
        h1: {
            fontSize: "25px",
        },
        h2: {
            fontSize: "20px",
        },
        h3: {
            fontSize: "15px",
        },
        h4: {
            fontSize: "10px",
        },
        h5: {
            fontSize: "11px",
        },
    },
})

export const useThemeProvider = () => {
    return (theme)
}