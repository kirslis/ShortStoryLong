import {Button, styled, Typography} from "@mui/material";

interface IMultiLabelSwitchButtonStyled {
    current_state: number;
    state_value: number;
}

export const MultiLabelSwitchButtonStyles = styled(Button)<IMultiLabelSwitchButtonStyled>`
    border-style: solid;
    border-bottom-width: ${(props) => props.current_state == props.state_value ? "4px" : "0px"};
    border-color: ${(props) => props.theme.palette.border.light};

    :hover {
        border-style: solid;
        border-color: ${(props) => props.theme.palette.border.light};
    }
    :focus {
        outline: none;
    }
    && .MuiTouchRipple-child {
        background-color: transparent;
    }
`

export const MultiLabelTextLabel  = styled(Typography)<IMultiLabelSwitchButtonStyled>`
    color: ${(props) => props.current_state == props.state_value ? props.theme.palette.border.light : props.theme.palette.textColor.main};
    font-size: 14px;
`