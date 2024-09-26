import {useEffect, useState} from "react";
import {useStatsStore} from "../../CharacterListData/StatsStore.ts";
import {useStatsAdditionalBonusesStore} from "../../CharacterListData/StatsAdditionalBonusesStore.ts";
import {useStatsProficiencyStore} from "../../CharacterListData/StatsProficiencyStore.ts";
import {Grid} from "@mui/material";
import {CharacteristicsPanel} from "./CharacteristicsPanel.tsx";
import {gap, getModifier, IStatPanel} from "./statsPanelProps.ts";

export const ConstitutionPanel = (props: IStatPanel) => {
    const [mod, setMod] = useState<number>(0)
    const {stat} = useStatsStore((state) => ({
        stat: state.stats.constitution,
    }))
    const {statAdditionalBonus} = useStatsAdditionalBonusesStore((state) => ({
        statAdditionalBonus: state.statsAdditionalBonuses.constitution,
    }))

    const {statProficiency} = useStatsProficiencyStore((state) => ({
        statProficiency: state.statsProficiency.constitution,
    }))
    useEffect(() => {
        setMod(getModifier(stat))
    }, [stat])

    return (
        <Grid item container direction={"column"} rowGap={gap}>
            <CharacteristicsPanel name={"constitution"} value={stat} mod={mod} saveThrowProficiency={statProficiency}
                                  proficiencyBonus={2} additionalBonus={statAdditionalBonus}
                                  modalOpenHandler={props.onModalOpen}/>
        </Grid>
    )
}