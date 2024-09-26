import {Palette} from "@mui/material";

export interface Theme {
    palette: Palette;
}

declare module '@mui/material/styles' {
    interface Palette {
        background: Palette['background'];
        border: Palette['border'];
        accent: Palette['accent'];
        textColor: Palette['textColor'];
        health: Palette['health'];
    }
}

