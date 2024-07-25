import {createTheme} from "@mui/material";
import {ThemesMap} from "./ThemesMap.tsx";

const theme = createTheme({
    palette: ThemesMap["dark"].palette
})

export const useThemeProvider = () => {
    return (theme)
}