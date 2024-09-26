import {Box, styled} from "@mui/material";

type StyledCharacterIconProps = {
    srcimage: string,
    maxheight: string
}

export const StyledCharacterIcon = styled(Box)<StyledCharacterIconProps>`
    width: ${(props) => props.maxheight};
    height: ${(props) => props.maxheight}; 
    background-image:  url(${(props) => props.srcimage});
    background-repeat: no-repeat;
    background-size: cover;
    border-style: solid;
    border-width: 1px;
    border-color: ${(props) => props.theme.palette.border.main};
    border-radius: 5px;
`


export const StyledLvlBox = styled(Box)`
    border-width: 1px;
    border-color: ${(props) => props.theme.palette.accent.light};
    border-style: solid;
    background-color: ${(props) => props.theme.palette.accent.main};
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    padding: 1px 5px;
`

export const StyledLvlWrapper = styled(Box)`
    display: flex; 
    flex: 1;
    width: 90%;
    height: 16px; 
    gap: 5px;
`