import {useStatsStore} from "../../CharacterListData/StatsStore.ts";
import {useStatsAdditionalBonusesStore} from "../../CharacterListData/StatsAdditionalBonusesStore.ts";
import {useEffect, useState} from "react";
import {useStatsProficiencyStore} from "../../CharacterListData/StatsProficiencyStore.ts";
import {useSkillsProficiencyStore} from "../../CharacterListData/SkillsProficiencyStore.ts";
import {useSkillsAdditionalBonusesStore} from "../../CharacterListData/SkillsAdditionalBonusesStore.ts";
import {Grid} from "@mui/material";
import {CharacteristicsPanel} from "./CharacteristicsPanel.tsx";
import {SkillThrowPanel} from "../ThrowPanels/SkillThrowPanel.tsx";
import {gap, getModifier, IStatPanel} from "./statsPanelProps.ts";

export const DexterityPanel = (props: IStatPanel) => {
    const {stat} = useStatsStore((state) => ({
        stat: state.stats.dexterity,
    }))
    const {statAdditionalBonus} = useStatsAdditionalBonusesStore((state) => ({
        statAdditionalBonus: state.statsAdditionalBonuses.dexterity,
    }))

    const [mod, setMod] = useState<number>(getModifier(20))
    const {statProficiency} = useStatsProficiencyStore((state) => ({
        statProficiency: state.statsProficiency.dexterity,
    }))
    useEffect(() => {
        setMod(getModifier(stat))
    }, [stat])

    const {acrobatics, sleightOfHand, stealth} = useSkillsProficiencyStore((state) => ({
        acrobatics: state.skillsProficiency.acrobatics,
        sleightOfHand: state.skillsProficiency.sleightOfHand,
        stealth: state.skillsProficiency.stealth,
    }))
    const {
        additionalAcrobatics,
        additionalSleightOfHand,
        additionalStealth
    } = useSkillsAdditionalBonusesStore((state) => ({
        additionalAcrobatics: state.skillsAdditionalBonuses.acrobatics,
        additionalSleightOfHand: state.skillsAdditionalBonuses.sleightOfHand,
        additionalStealth: state.skillsAdditionalBonuses.stealth
    }))

    return (
        /*        <Grid item container rowGap={gap}>
                    <CharacteristicsPanel name={"strength"} value={stat} mod={mod} saveThrowProficiency={statProficiency}
                                          proficiencyBonus={2} additionalBonus={statAdditionalBonus}
                                          modalOpenHandler={props.onModalOpen}/>
                    <SkillThrowPanel name={"athletics"} value={mod} skillProficiency={athletics} proficiencyBonus={2}
                                     additionalSkillBonus={additionalAthletics}/>
                </Grid>*/
        <Grid item container  rowGap={gap}>
            <CharacteristicsPanel name={"dexterity"} value={stat} mod={mod} saveThrowProficiency={statProficiency}
                                  proficiencyBonus={2} additionalBonus={statAdditionalBonus}
                                  modalOpenHandler={props.onModalOpen}/>
            <SkillThrowPanel name={"acrobatics"} value={mod} skillProficiency={acrobatics} proficiencyBonus={2}
                             additionalSkillBonus={additionalAcrobatics}/>
            <SkillThrowPanel name={"sleight of hand"} value={mod} skillProficiency={sleightOfHand}
                             proficiencyBonus={2} additionalSkillBonus={additionalSleightOfHand}/>
            <SkillThrowPanel name={"stealth"} value={mod} skillProficiency={stealth} proficiencyBonus={2}
                             additionalSkillBonus={additionalStealth}/>
        </Grid>
    )
}