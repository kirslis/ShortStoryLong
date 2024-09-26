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

export const WisdomPanel = (props: IStatPanel) => {
    const [mod, setMod] = useState<number>(0)
    const {stat} = useStatsStore((state) => ({
        stat: state.stats.wisdom,
    }))
    const {statAdditionalBonus} = useStatsAdditionalBonusesStore((state) => ({
        statAdditionalBonus: state.statsAdditionalBonuses.wisdom,
    }))


    const {statProficiency} = useStatsProficiencyStore((state) => ({
        statProficiency: state.statsProficiency.wisdom,
    }))
    useEffect(() => {
        setMod(getModifier(stat))
    }, [stat])

    const {animalHandling, insight, medicine, perception, survival} = useSkillsProficiencyStore((state) => ({
        animalHandling: state.skillsProficiency.animalHandling,
        insight: state.skillsProficiency.insight,
        medicine: state.skillsProficiency.medicine,
        perception: state.skillsProficiency.perception,
        survival: state.skillsProficiency.survival,
    }))
    const {
        additionalAnimalHandling,
        additionalInsight,
        additionalMedicine,
        additionalPerception,
        additionalSurvival,
    } = useSkillsAdditionalBonusesStore((state) => ({
        additionalAnimalHandling: state.skillsAdditionalBonuses.animalHandling,
        additionalInsight: state.skillsAdditionalBonuses.insight,
        additionalMedicine: state.skillsAdditionalBonuses.medicine,
        additionalPerception: state.skillsAdditionalBonuses.perception,
        additionalSurvival: state.skillsAdditionalBonuses.survival
    }))

    return (
        <Grid item container  rowGap={gap}>
            <CharacteristicsPanel name={"wisdom"} value={stat} mod={mod} saveThrowProficiency={statProficiency}
                                  proficiencyBonus={2} additionalBonus={statAdditionalBonus}
                                  modalOpenHandler={props.onModalOpen}/>
            <SkillThrowPanel name={"animal handling"} value={mod} skillProficiency={animalHandling}
                             proficiencyBonus={2} additionalSkillBonus={additionalAnimalHandling}/>
            <SkillThrowPanel name={"insight"} value={mod} skillProficiency={insight} proficiencyBonus={2}
                             additionalSkillBonus={additionalInsight}/>
            <SkillThrowPanel name={"medicine"} value={mod} skillProficiency={medicine} proficiencyBonus={2}
                             additionalSkillBonus={additionalMedicine}/>
            <SkillThrowPanel name={"perception"} value={mod} skillProficiency={perception} proficiencyBonus={2}
                             additionalSkillBonus={additionalPerception}/>
            <SkillThrowPanel name={"survival"} value={mod} skillProficiency={survival} proficiencyBonus={2}
                             additionalSkillBonus={additionalSurvival}/>
        </Grid>
    )
}