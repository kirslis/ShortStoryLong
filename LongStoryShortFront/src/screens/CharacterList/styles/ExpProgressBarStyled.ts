import {LinearProgress, styled} from "@mui/material";

export const ExpProgressBarStyled = styled(LinearProgress)`
    border-width: 1px;
    border-color: ${(props) => props.theme.palette.accent.light};
    border-style: solid;
    background-color: ${(props) => props.theme.palette.secondary.main};
    width: 100%;
    height: 100%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`