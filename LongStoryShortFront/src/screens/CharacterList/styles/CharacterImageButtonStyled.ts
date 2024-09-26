import {Menu, MenuItem, styled} from "@mui/material";

export const StyledCharacterImageMenu = styled(Menu)`
    .MuiMenu-paper {
        border-style: solid;
        border-width: 1px;
        border-color: ${(props) => props.theme.palette.border.main};
    }
`

export const StyledCharacterImageMenuItem = styled(MenuItem)`
    margin: 5px;
    padding-left: 0;
    padding-right: 10px;
    border-radius: 5px;
    :hover {
        background-color: ${(props) => props.theme.palette.border.main};
    }
`