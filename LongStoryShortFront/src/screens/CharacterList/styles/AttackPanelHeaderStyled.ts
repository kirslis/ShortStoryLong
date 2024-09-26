import {Box, Button, styled, Typography} from "@mui/material";

export const StyledInteractiveButton = styled(Button)`
    min-width: 20px;
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.palette.secondary.light};
:hover {
    background-color: ${(props) => props.theme.palette.secondary.light};
}
    :focus{
        outline: none;
    }
`

export const StyledAttackPanelBox = styled(Box)`
    border-width: 0;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.palette.border.main};
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding-bottom: 5px;
`

export const StyledAttackPanelTextLabel = styled(Typography)`
    color: ${(props) =>  props.theme.palette.textColor.dark };
`