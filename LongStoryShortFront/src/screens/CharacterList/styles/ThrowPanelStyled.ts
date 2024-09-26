import {Button, styled} from "@mui/material";

export const StatNameButtonStyled = styled(Button)`
    border-width: 1px;
    border-color: ${(props) => props.theme.palette.border.main};
    border-radius: 10px;
    border-style: solid;
    background-color: ${(props) => props.theme.palette.background.paper};

    :hover {
        border-color: ${(props) => props.theme.palette.border.main};
        background-color: ${(props) => props.theme.palette.background.paper};
    }
`

export const StatValueButtonStyled = styled(Button)`
    position: absolute;
    max-width: 45px;
    min-width: 45px;
    padding: 7px;
    border-width: 1px;
    border-color: ${(props) => props.theme.palette.border.main};
    border-radius: 5px;
    border-style: solid;
    background-color: ${(props) => props.theme.palette.secondary.main};
    transform: translate(-100%, -12%);
:hover {
    border-color: ${(props) => props.theme.palette.border.main};
    background-color: ${(props) => props.theme.palette.secondary.main};
}
`
