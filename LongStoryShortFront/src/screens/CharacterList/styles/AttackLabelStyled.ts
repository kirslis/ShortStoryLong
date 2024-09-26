import {Button, styled} from "@mui/material";

export const StyledBaseAttackLabelButton = styled(Button)`
    background-color: ${(props) => props.theme.palette.secondary.main};
    border-style: solid;
    border-width: 1px;
    border-color: ${(props) => props.theme.palette.border.main};
    height: 35px;
    min-width: 50px;
    display: flex;
    justify-content: start;

    :hover {
        background-color: ${(props) => props.theme.palette.secondary.main};
        border-color: ${(props) => props.theme.palette.border.main};
    }

    :focus {
        outline: none;
    }
`

export const StyledAttackNameButton = styled(Button)`
    padding: 0;
    display: flex;
    justify-content: start;
    height: 100%;
    width: 100%;
:hover {
    background-color: transparent
}
    :focus{
        outline: none;
    }
`