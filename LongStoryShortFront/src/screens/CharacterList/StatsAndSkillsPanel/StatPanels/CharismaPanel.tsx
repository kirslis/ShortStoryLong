import {useEffect, useState} from "react";
import {useStatsStore} from "../../CharacterListData/StatsStore.ts";
import {useStatsAdditionalBonusesStore} from "../../CharacterListData/StatsAdditionalBonusesStore.ts";
import {useStatsProficiencyStore} from "../../CharacterListData/StatsProficiencyStore.ts";
import {useSkillsProficiencyStore} from "../../CharacterListData/SkillsProficiencyStore.ts";
import {useSkillsAdditionalBonusesStore} from "../../CharacterListData/SkillsAdditionalBonusesStore.ts";
import {Grid} from "@mui/material";
import {CharacteristicsPanel} from "./CharacteristicsPanel.tsx";
import {SkillThrowPanel} from "../ThrowPanels/SkillThrowPanel.tsx";
import {gap, getModifier, IStatPanel} from "./statsPanelProps.ts";

export const CharismaPanel = (props: IStatPanel) => {
    const [mod, setMod] = useState<number>(0)
    const {stat} = useStatsStore((state) => ({
        stat: state.stats.charisma,
    }))
    const {statAdditionalBonus} = useStatsAdditionalBonusesStore((state) => ({
        statAdditionalBonus: state.statsAdditionalBonuses.charisma,
    }))

    const {statProficiency} = useStatsProficiencyStore((state) => ({
        statProficiency: state.statsProficiency.charisma,
    }))
    useEffect(() => {
        setMod(getModifier(stat))
    }, [stat])
    const {deception, intimidation, performance, persuasion} = useSkillsProficiencyStore((state) => ({
        deception: state.skillsProficiency.deception,
        intimidation: state.skillsProficiency.intimidation,
        performance: state.skillsProficiency.performance,
        persuasion: state.skillsProficiency.persuasion,
    }))
    const {
        additionalDeception,
        additionalIntimidation,
        additionalPerformance,
        additionalPersuasion,
    } = useSkillsAdditionalBonusesStore((state) => ({
        additionalDeception: state.skillsAdditionalBonuses.deception,
        additionalIntimidation: state.skillsAdditionalBonuses.intimidation,
        additionalPerformance: state.skillsAdditionalBonuses.performance,
        additionalPersuasion: state.skillsAdditionalBonuses.persuasion,
    }))
    return (
        <Grid item container  rowGap={gap}>
            <CharacteristicsPanel name={"charisma"} value={stat} mod={mod} saveThrowProficiency={statProficiency}
                                  proficiencyBonus={2} additionalBonus={statAdditionalBonus}
                                  modalOpenHandler={props.onModalOpen}/>
            <SkillThrowPanel name={"deception"} value={mod} skillProficiency={deception} proficiencyBonus={2}
                             additionalSkillBonus={additionalDeception}/>
            <SkillThrowPanel name={"intimidation"} value={mod} skillProficiency={intimidation} proficiencyBonus={2}
                             additionalSkillBonus={additionalIntimidation}/>
            <SkillThrowPanel name={"performance"} value={mod} skillProficiency={performance} proficiencyBonus={2}
                             additionalSkillBonus={additionalPerformance}/>
            <SkillThrowPanel name={"persuasion"} value={mod} skillProficiency={persuasion} proficiencyBonus={2}
                             additionalSkillBonus={additionalPersuasion}/>
        </Grid>
    )
}