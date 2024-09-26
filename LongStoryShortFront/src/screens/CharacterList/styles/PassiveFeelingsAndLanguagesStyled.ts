import {Box, Button, styled, Typography} from '@mui/material';

export const StyledPassiveFeelingButton = styled(Button)`
    width: 100%;
    border-width: 2px;
    border-color: ${(props) => props.theme.palette.border.main};
    border-radius: 10px;
    justify-content: start;
    margin-left: 15px;
    :hover {
        border-width: 2px;
        border-color: ${(props) => props.theme.palette.border.main};
        background-color: transparent;
    }
;

    :focus {
        outline: none;
    }
`;

type StyledWrapperProps = {
    isrewritten?: string
}

export const StyledPassiveFeelingValueWrapper = styled(Box)<StyledWrapperProps>`
    border-style: solid;
    border-width: 1px;
    background-color: ${(props) => props.theme.palette.background.paper};
    border-color: ${(props) => props.isrewritten == "true" ? props.theme.palette.accent.main : props.theme.palette.border.main};
    position: absolute;
    border-radius: 7px;
    z-index: 2;
    min-width: 40px;
    padding-top: 1px;
    padding-bottom: 1px;
`

export const StyledPassiveFeelingValueLabel = styled(Typography)`
    margin: 1px 2px;
    color: ${(props) => props.theme.palette.textColor.main};
    text-align: center
`

export const StyledLabelText = styled(Typography)`
    color: ${(props) => props.theme.palette.textColor.dark};
`