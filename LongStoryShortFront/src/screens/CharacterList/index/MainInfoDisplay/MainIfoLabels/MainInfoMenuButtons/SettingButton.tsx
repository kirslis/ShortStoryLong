import {BaseMainInfoMenuButtons} from "./BaseMaininfoMenuButton.tsx";
import { StyledSettingsIcon} from "../../../../styles/MainInfoMenuButtonsStyled.ts";

interface ISettingsButton {
    onClick: () => void;
}

export const SettingButton = (props: ISettingsButton) => {
    return(
        <BaseMainInfoMenuButtons icon={<StyledSettingsIcon/>} text={"Settings"} onClick={props.onClick}/>
    )
}