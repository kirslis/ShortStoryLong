import {FC} from "react";
import {AttackLabel} from "./AttackLabel.tsx";
import {ClosableLabel} from "../ClosableLabel.tsx";
import {AttacksPanelHeader} from "./AttacksPanelHeader.tsx";
import {ClosableTextsWrapper} from "../../../styles/MultiPanelStyled.ts";

export const AttacksPanel: FC = () => {
    return (
        <ClosableTextsWrapper>
            <AttacksPanelHeader/>
            <AttackLabel/>
            <AttackLabel/>
            <AttackLabel/>
            <ClosableLabel name={"attacks and spells"} value={""}/>
            <ClosableLabel name={"skills and abilities"} value={""}/>
        </ClosableTextsWrapper>
    )
}