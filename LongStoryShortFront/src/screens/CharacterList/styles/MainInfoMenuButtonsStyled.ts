import SettingsIcon from '@mui/icons-material/Settings';
import {styled} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';

export const StyledSettingsIcon = styled(SettingsIcon)`
    color: ${(props) => props.theme.palette.textColor.dark};
    width: 20px;
    height: 20px;
`

export const StyledPortraitIcon = styled(PersonIcon)`
    color: ${(props) => props.theme.palette.textColor.dark};
    width: 20px;
    height: 20px;
`

export const DownloadPDFIcon = styled(DescriptionIcon)`
    color: ${(props) => props.theme.palette.textColor.dark};
    width: 20px;
    height: 20px;
`