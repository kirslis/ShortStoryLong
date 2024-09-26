import {Button, styled} from "@mui/material";

export const RightHeaderButtonStyled = styled(Button)`
    background-color: ${(props) => props.theme.palette.secondary.main};
    border-style: solid;
    border-color: ${(props) => props.theme.palette.border.main};
    border-width: 1px;
    height: 40px;
    width: 70px;
    :hover {
        border-color: ${(props) => props.theme.palette.border.main};
        background-color: ${(props) => props.theme.palette.secondary.main};
    }

    :focus{
        outline: none;
    }
    && .MuiTouchRipple-child {
        background-color: ${(props) => props.theme.palette.border.light};
        center: true;
    }
    && .MuiTouchRipple-rippleVisible {
        opacity: 0.3;
        animation-duration: 0ms;
    }
`