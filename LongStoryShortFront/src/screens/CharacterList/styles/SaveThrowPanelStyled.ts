import {styled} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

export const SaveThrowCheckboxStyled = styled(Checkbox)`
    position: absolute;
    top: -5px;
    left: -17px;
    z-index: 2;

    :hover {
        background-color: transparent;
    }
`

export const SaveThrowCheckedIconStyled = styled(RadioButtonCheckedIcon)`
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.palette.background.paper};
    color: ${(props) => props.theme.palette.border.main};
`

export const SaveThrowUncheckedIconStyled = styled(RadioButtonUncheckedIcon)`
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.palette.background.paper};
    color: ${(props) => props.theme.palette.border.main};
`