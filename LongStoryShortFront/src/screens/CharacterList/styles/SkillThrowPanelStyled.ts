import {Button, styled} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import CircleIcon from "@mui/icons-material/Circle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export const SkillThrowStatNameButtonStyled = styled(Button)`
    align-self: center;
    align-content: center;
    //height={"27px"}
    background-color: ${(props) => props.theme.palette.primary.main};
    width: 90%;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    :hover {
        background-color: ${(props) => props.theme.palette.primary.main};
    }
`

export const SkillThrowCheckboxStyled = styled(Checkbox)`
    z-index: 2;
    position: absolute;
    top: -3px;
    left: -3px;
    background-color: transparent;

    :hover {
        backgroundColor: transparent
    }
`

export const SkillThrowUncheckedIcon = styled(CircleIcon)`
    color: ${(props) => props.theme.palette.background.paper};
    width: 20px;
    height: 20px;
`
export const SkillThrowCheckedIcon = styled(RadioButtonUncheckedIcon)`
    color: ${(props) => props.theme.palette.background.paper};
    width: 20px;
    height: 20px;
`
