import {Divider, styled} from "@mui/material";

export const NoneConditionDivider = styled(Divider)`
    border-width: 1px;
    border-color: ${(props) => props.theme.palette.textColor.main};
    width: 40px;
    margin-top: 5px;
`