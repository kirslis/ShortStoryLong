import {DownloadPDFIcon} from "../../../../styles/MainInfoMenuButtonsStyled.ts";
import {BaseMainInfoMenuButtons} from "./BaseMaininfoMenuButton.tsx";

export const DownloadPDFMenuButtons = () =>  {
    const onClick = () => {
    }
    return(
        <BaseMainInfoMenuButtons icon={<DownloadPDFIcon/>} text={"Download .pdf"} onClick={onClick}/>
    )
}