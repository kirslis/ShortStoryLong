import {Box, styled} from "@mui/material";

export const LeftModalBoxStyled = styled(Box)`
    background-color: ${(props) => props.theme.palette.background.paper};
    border-radius: 10px;
    width: 600px;
    height: 100%;
    position: fixed;
`

export const MiddleModalBox = styled(Box)`
    background-color: ${(props) => props.theme.palette.secondary.main};
    border-radius: 10px;
    padding: 20px 20px 50px;
    left: 50%;
    top: 40%;
    width: 700px;
    height: auto;
    transform: translate(-50%, -50%);
    position: fixed;
`