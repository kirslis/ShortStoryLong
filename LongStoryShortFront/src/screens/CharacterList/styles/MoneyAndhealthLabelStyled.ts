import {Box, styled} from "@mui/material";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";

export const HealthBorderWrapperStyled = styled(Box)`
    display: flex;
    border-width: 2px;
    border-style: solid;
    border-color: ${(props) => props.theme.palette.health.main};
    border-radius: 5px;
    padding: 10px 10px;
`

export const HealthIconStyled = styled(MonitorHeartOutlinedIcon)`
    flex: 1;
    color: ${(props) => props.theme.palette.health.main}; 
    font-size: 25px;
`