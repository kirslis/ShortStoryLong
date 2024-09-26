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

export const StrengthPanel = (props: IStatPanel) => {
    const [mod, setMod] = useState<number>(0)
    const {stat} = useStatsStore((state) => ({
        stat: state.stats.strength,
    }))
    const {statAdditionalBonus} = useStatsAdditionalBonusesStore((state) => ({
        statAdditionalBonus: state.statsAdditionalBonuses.strength,
    }))
    const {statProficiency} = useStatsProficiencyStore((state) => ({
        statProficiency: state.statsProficiency.strength,
    }))
    useEffect(() => {
        setMod(getModifier(stat))
    }, [stat])

    const {athletics} = useSkillsProficiencyStore((state) => ({
        athletics: state.skillsProficiency.athletics
    }))

    const {additionalAthletics} = useSkillsAdditionalBonusesStore((state) => ({
        additionalAthletics: state.skillsAdditionalBonuses.athletics
    }))

    return (
        <Grid item container rowGap={gap}>
            <CharacteristicsPanel name={"strength"} value={stat} mod={mod} saveThrowProficiency={statProficiency}
                                  proficiencyBonus={2} additionalBonus={statAdditionalBonus}
                                  modalOpenHandler={props.onModalOpen}/>
            <SkillThrowPanel name={"athletics"} value={mod} skillProficiency={athletics} proficiencyBonus={2}
                             additionalSkillBonus={additionalAthletics}/>
        </Grid>
    )
}