import {styled, Typography} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export const ConditionDot = styled(FiberManualRecordIcon)`
    color: ${(props) => props.theme.palette.textColor.dark};
    padding-top: 3px;
    width: 10px;
    height: 10px;
`

export const ConditionTextLabel = styled(Typography)`
    color: ${(props) => props.theme.palette.textColor.dark};
    width: 90%;
`