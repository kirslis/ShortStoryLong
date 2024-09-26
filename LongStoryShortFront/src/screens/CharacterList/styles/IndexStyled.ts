import {styled, TextField, Typography} from "@mui/material";

interface ITextLabel {
    normal?: string;
    dark?: string;
}

export const StyledTextLabel = styled(Typography)<ITextLabel>`
    color: ${(props) => props.dark == "true" ? props.theme.palette.textColor.dark : props.theme.palette.textColor.main};
    font-weight: ${(props) => props.normal == "true" ? "normal" : "bold"};
`
export const StyledUnderlinedInputField = styled(TextField)`
    width: 100%;
    color: ${(props) => props.theme.palette.textColor.main};

    .MuiInputBase-root {
        color: ${(props) => props.theme.palette.textColor.main}
    }
`