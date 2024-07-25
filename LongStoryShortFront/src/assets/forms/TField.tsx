import {FC} from "react";
import {TextField} from "@mui/material";
import {baseTheme} from "../../props/theme.ts";


type TFieldPros = {
    label: string,
    onChange: (value: string) => void,
    value?: string
    isError: boolean
};

export const TField: FC<TFieldPros> = ({onChange, isError, ...rest}) => {
    const textColor = isError ? baseTheme.colors.error: baseTheme.colors.textColor;
    const borderColor  = isError ? baseTheme.colors.error: baseTheme.colors.border;
    return <TextField {...rest}
                      id= {isError ? "outlined-error": "outlined-basic"}
                      variant="filled" onChange={(e) => onChange(e.target.value)} sx={{
        WebkitTextFillColor: textColor,
        border: 1,
        borderColor: borderColor,
        backgroundColor: baseTheme.colors.button,
    }}/>
}