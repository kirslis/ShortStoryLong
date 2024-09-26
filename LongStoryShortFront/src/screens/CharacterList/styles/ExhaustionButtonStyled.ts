import {MenuItem, Select, styled} from "@mui/material";

export const ExhaustedSelectStyled = styled(Select)`
min-width: 70px;
    background-color: transparent;
    color: ${(props) => props.theme.palette.textColor.main};
    font-size: 20px;
'& .MuiSvgIcon-root': {
    color: ${(props) => props.theme.palette.textColor.main};
}
`

export const ExhaustedMenuItem = styled(MenuItem)`
    color: ${(props) => props.theme.palette.textColor.main};
    font-size: 20px;    
`