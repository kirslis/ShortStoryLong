import {ClosableLabel} from "../ClosableLabel.tsx";
import {FC} from "react";
import {ClosableTextsWrapper} from "../../../styles/MultiPanelStyled.ts";

export const EquipmentPanel:FC = () => {
    return (
        <ClosableTextsWrapper >
            <ClosableLabel name={"equipment"} value={""}/>
            <ClosableLabel name={"treasures"} value={""}/>
        </ClosableTextsWrapper>
    )
}