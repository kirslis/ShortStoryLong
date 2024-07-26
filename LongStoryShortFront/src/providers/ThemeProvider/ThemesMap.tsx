import {Color, ThemeType} from "./ThemeProps.tsx";
import {Theme} from "./Theme.tsx";

export const ThemesMap: Record<ThemeType, Theme> = {
    light: {
        palette: {
            primary: {
                main: Color.LIGHT_DARK_BLUE,
            },
            secondary: {
                main: Color.DARK_BLUE
            },
            background: {
                paper: Color.VERY_DARK_BLUE
            },
            border:{
                main: Color.GREY_BLUE
            },
            text:{
                main: Color.LIGHT_PURPLE_BLUE
            },
            success:{
                main: Color.GREEN
            },
            error:{
                main: Color.YELLOW
            },
            health:{
                main: Color.TURQUOISE,
                dark: Color.DARK_TURQUOISE
            },
            accent:{
                main: Color.PINK,
                light: Color.LIGHTER_PINK
            },
            header:{
                main: Color.HEADER_BLUE
            }
        }
    },
    dark: {
        palette: {
            primary: {
                main: Color.LIGHT_DARK_BLUE,
            },
            secondary: {
                main: Color.DARK_BLUE,
                light: Color.LIGHTER_DARK_BLUE,
            },
            background: {
                paper: Color.VERY_DARK_BLUE
            },
            border:{
                main: Color.GREY_BLUE,
                light: Color.LIGHT_GREY_BLUE
            },
            text:{
                main: Color.LIGHT_PURPLE_BLUE,
                dark: Color.PURPLE_BLUE,
            },
            success:{
                main: Color.GREEN
            },
            error:{
                main: Color.YELLOW
            },
            health:{
                main: Color.TURQUOISE,
                dark: Color.DARK_TURQUOISE
            },
            accent:{
                main: Color.PINK,
                light: Color.LIGHTER_PINK
            },
            header:{
                main: Color.HEADER_BLUE
            }
        }
    }
}