import {Box} from "@mui/material";
import {ThrowCard} from "./ThrowCard.tsx";
import {useThemeProvider} from "../../../providers/ThemeProvider/ThemeProvider.tsx";
import {ThemeProvider} from "@mui/material/styles";

export const ThrowViewer = () => {
    return (
        <ThemeProvider theme={useThemeProvider}>
            <Box display={"flex"} zIndex={2} position={"fixed"} top={"48%"} left={"1%"} justifyContent={"flex-end"} flexDirection={"column"} rowGap={"10px"}  bgcolor={"white"}
                 sx={{
                     height: "50%",
                     width: '30%'
                 }}>
                <ThrowCard/>
                <ThrowCard/>
            </Box>
        </ThemeProvider>
    )
}