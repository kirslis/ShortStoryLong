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

export const IntelligencePanel = (props: IStatPanel) => {
    const [mod, setMod] = useState<number>(0)
    const {stat} = useStatsStore((state) => ({
        stat: state.stats.intelligence,
    }))
    const {statAdditionalBonus} = useStatsAdditionalBonusesStore((state) => ({
        statAdditionalBonus: state.statsAdditionalBonuses.intelligence,
    }))


    const {statProficiency} = useStatsProficiencyStore((state) => ({
        statProficiency: state.statsProficiency.intelligence,
    }))
    useEffect(() => {
        setMod(getModifier(stat))
    }, [])
    const {arcana, history, investigation, nature, religion} = useSkillsProficiencyStore((state) => ({
        arcana: state.skillsProficiency.arcana,
        history: state.skillsProficiency.history,
        investigation: state.skillsProficiency.investigation,
        nature: state.skillsProficiency.nature,
        religion: state.skillsProficiency.religion,
    }))
    const {
        additionalArcana,
        additionalHistory,
        additionalInvestigation,
        additionalNature,
        additionalReligion,
    } = useSkillsAdditionalBonusesStore((state) => ({
        additionalArcana: state.skillsAdditionalBonuses.arcana,
        additionalHistory: state.skillsAdditionalBonuses.history,
        additionalInvestigation: state.skillsAdditionalBonuses.investigation,
        additionalNature: state.skillsAdditionalBonuses.nature,
        additionalReligion: state.skillsAdditionalBonuses.religion
    }))

    return (
        <Grid item container  rowGap={gap}>
            <CharacteristicsPanel name={"intelligence"} value={stat} mod={mod} saveThrowProficiency={statProficiency}
                                  proficiencyBonus={2} additionalBonus={statAdditionalBonus}
                                  modalOpenHandler={props.onModalOpen}/>
            <SkillThrowPanel name={"arcana"} value={mod} skillProficiency={arcana} proficiencyBonus={2}
                             additionalSkillBonus={additionalArcana}/>
            <SkillThrowPanel name={"history"} value={mod} skillProficiency={history} proficiencyBonus={2}
                             additionalSkillBonus={additionalHistory}/>
            <SkillThrowPanel name={"investigation"} value={mod} skillProficiency={investigation} proficiencyBonus={2}
                             additionalSkillBonus={additionalInvestigation}/>
            <SkillThrowPanel name={"nature"} value={mod} skillProficiency={nature} proficiencyBonus={2}
                             additionalSkillBonus={additionalNature}/>
            <SkillThrowPanel name={"religion"} value={mod} skillProficiency={religion} proficiencyBonus={2}
                             additionalSkillBonus={additionalReligion}/>
        </Grid>
    )
}