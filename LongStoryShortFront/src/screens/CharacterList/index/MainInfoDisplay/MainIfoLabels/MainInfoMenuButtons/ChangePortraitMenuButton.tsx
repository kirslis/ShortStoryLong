import {BaseMainInfoMenuButtons} from "./BaseMaininfoMenuButton.tsx";
import {StyledPortraitIcon} from "../../../../styles/MainInfoMenuButtonsStyled.ts";

export const ChangePortraitMenuButtons = () => {
    const onClick = () => {
    }
    return(
        <BaseMainInfoMenuButtons icon={<StyledPortraitIcon/>} text={"Change portrait"} onClick={onClick}/>
    )
}