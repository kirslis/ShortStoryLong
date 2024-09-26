import {Grid} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import {useThemeProvider} from "../../../../providers/ThemeProvider/ThemeProvider.tsx";
import {StatModalTextField} from "./StatModalTextField.tsx";
import {useEffect, useState} from "react";
import {Stats, useStatsStore} from "../../../../screens/CharacterList/CharacterListData/StatsStore.ts";
import {
    useStatsAdditionalBonusesStore
} from "../../../../screens/CharacterList/CharacterListData/StatsAdditionalBonusesStore.ts";
import {MiddleModalPanel} from "../MiddleModalPanel.tsx";

export interface ISpecificStatModal {
    isOpen: boolean,
    onClose: () => void,
}

export interface IStatModal {
    children?: React.ReactNode,
    isOpen: boolean,
    statName: string,
    onClose: () => void,
}

const getModifier = (stat: number) => {
    let res = 0;
    if (stat > 0) {
        res = stat - 10;
        if (res < 0)
            res--
        res = Math.floor(res / 2);
    }
    return (
        res
    )
}

export const SimpleStatModal = (props: IStatModal) => {
    const statValue = useStatsStore(state => state.stats[props.statName as keyof Stats]);
    const setStatValue = useStatsStore(state => state.setStats);
    const saveThrowAdditionalValue = useStatsAdditionalBonusesStore(state => state.statsAdditionalBonuses[props.statName as keyof Stats]);
    const setSaveThrowAdditionalValue = useStatsAdditionalBonusesStore(state => state.setStatsAdditionalBonuses);
    const [statMod, setStatMod] = useState<number>(0);

    const statValueChangeHandler = (value: string) => {
        if (!isNaN(+value)) {
            if (+value < 0)
                value = "0"
            else if (+value > 30)
                value = "30"
            setStatValue({[props.statName]: +value})
        }
    }

    const statBonusChangeHandler = (value: string) => {
        if (!isNaN(+value)) {
            setSaveThrowAdditionalValue({[props.statName]: +value})
        }
    }

    useEffect(() => {
        setStatMod(getModifier(statValue))
    }, [statValue]);

    return (
        <ThemeProvider theme={useThemeProvider}>
            <MiddleModalPanel onClose={props.onClose} isOpen={props.isOpen} statName={props.statName} statMod={statMod}>
                    <Grid item container width={"100%"} spacing={5}>
                        <Grid item width={"40%"}>
                            <StatModalTextField value={statValue} helperText={"value"}
                                                changeHandler={statValueChangeHandler}/>
                        </Grid>
                        <Grid item width={"40%"}>
                            <StatModalTextField value={saveThrowAdditionalValue}
                                                helperText={"save throw bonus"}
                                                changeHandler={statBonusChangeHandler}/>
                        </Grid>
                        {props.children}
                    </Grid>
            </MiddleModalPanel>
        </ThemeProvider>
    )
}