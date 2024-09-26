import {FC} from "react";
import {BaseRightHeaderButton} from "./BaseRightHeaderButton.tsx";
import {StyledTextLabel} from "../../styles/IndexStyled.ts";
import {useMainStatsStore} from "../../CharacterListData/MainStatsStore.ts";
import {useStatsStore} from "../../CharacterListData/StatsStore.ts";
import {getModifier} from "../../StatsAndSkillsPanel/StatPanels/statsPanelProps.ts";

export const InitiativeButton: FC = () => {
    const {initiativeValue} = useMainStatsStore(state => ({
        initiativeValue: state.mainStats.initiative
    }))
    const {dexterityValue} = useStatsStore(state => ({
        dexterityValue: state.stats.dexterity
    }))

    return (
        <BaseRightHeaderButton name={"Initiative"} children={
            <StyledTextLabel variant={"h2"}>
                {initiativeValue ? initiativeValue : getModifier(dexterityValue)}
            </StyledTextLabel>
        }/>
    )
}