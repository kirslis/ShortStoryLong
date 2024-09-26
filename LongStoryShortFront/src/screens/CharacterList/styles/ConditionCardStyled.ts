import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import {Button, styled} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const ConditionCheckboxCheckedStyled = styled(Checkbox)`
    disable-ripple: true;
`

export const ConditionCheckedIcon = styled(CheckBoxRoundedIcon)`
    color: ${(props) => props.theme.palette.border.main};
    width: 25px;
    height: 25px;
`

export const ConditionUncheckedIcon = styled(CheckBoxOutlineBlankRoundedIcon)`
    color: ${(props) => props.theme.palette.border.main};
    width: 25px;
    height: 25px;
`

export const DescriptionArrowUnchecked = styled(KeyboardArrowUpIcon)`
    color: ${(props) => props.theme.palette.textColor.main};
    width: 25px;
    height: 25px;
`

export const DescriptionArrowChecked = styled(KeyboardArrowDownIcon)`
    color: ${(props) => props.theme.palette.textColor.main};
    width: 25px;
    height: 25px;
`

export const NameButtonStyled = styled(Button)`
    min-width: 90%;
    padding-left: 0;
    padding-right: 0;
    :focus{
        background-color: transparent;
    }
    :focus{
        outline: none;
    }
`