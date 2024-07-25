import {FC, useEffect, useState} from "react";
import {CharacteristicsPanel} from "../../screens/CharacterList/StatsAndSkillsPanel/CharacteristicsPanel.tsx";
import {Box, Grid} from "@mui/material";
import {SkillThrowPanel} from "./SkillThrowPanel.tsx";
import {character} from "./Data.tsx";
import {
    PassiveFeelingsAndLanguage
} from "../../screens/CharacterList/StatsAndSkillsPanel/PassiveFeelingsAndLanguage.tsx";

const getModificator = (stat: number) => {
    let res = stat - 10;
    if (res < 0)
        res--
    return (
        res / 2
    )
}

const gap = "15px";

const StrengthPanel: FC<character> = (props: character) => {
    const [mod, setMod] = useState<number>(0)

    useEffect(() => {
        setMod(getModificator(props.stats.strength))
    }, [])

    return (
        <Grid item container rowGap={gap}>
            <CharacteristicsPanel name={"Strength"} value={props.stats.strength} professionalBonus={2}/>
            <SkillThrowPanel name={"Athletics"} value={mod}/>
        </Grid>
    )
}
const DexterityPanel: FC<character> = (props: character) => {
    const [mod, setMod] = useState<number>(0)

    useEffect(() => {
        setMod(getModificator(props.stats.dexterity))
    }, [])

    return (
        <Grid item container direction={"column"} rowGap={gap}>
            <CharacteristicsPanel name={"Dexterity"} value={props.stats.dexterity} professionalBonus={2}/>
            <SkillThrowPanel name={"Acrobatics"} value={mod}/>
            <SkillThrowPanel name={"Sleight of hand"} value={mod}/>
            <SkillThrowPanel name={"Stealth"} value={mod}/>
        </Grid>
    )
}
const ConstitutionPanel: FC<character> = (props: character) => {
    return (
        <Grid item container direction={"column"} rowGap={gap}>
            <CharacteristicsPanel name={"Constitution"} value={props.stats.constitution} professionalBonus={2}/>
        </Grid>
    )
}
const IntelligencePanel: FC<character> = (props: character) => {
    const [mod, setMod] = useState<number>(0)

    useEffect(() => {
        setMod(getModificator(props.stats.intelligence))
    }, [])

    return (
        <Grid item container direction={"column"} rowGap={gap}>
            <CharacteristicsPanel name={"Intelligence"} value={props.stats.intelligence} professionalBonus={2}/>
            <SkillThrowPanel name={"Arcana"} value={mod}/>
            <SkillThrowPanel name={"History"} value={mod}/>
            <SkillThrowPanel name={"Investigation"} value={mod}/>
            <SkillThrowPanel name={"Nature"} value={mod}/>
            <SkillThrowPanel name={"Religion"} value={mod}/>
        </Grid>
    )
}
const WisdomPanel: FC<character> = (props: character) => {
    const [mod, setMod] = useState<number>(0)

    useEffect(() => {
        setMod(getModificator(props.stats.wisdom))
    }, [])

    return (
        <Grid item container direction={"column"} rowGap={gap}>
            <CharacteristicsPanel name={"Wisdom"} value={props.stats.wisdom} professionalBonus={2}/>
            <SkillThrowPanel name={"Animal handling"} value={mod}/>
            <SkillThrowPanel name={"Insight"} value={mod}/>
            <SkillThrowPanel name={"Medicine"} value={mod}/>
            <SkillThrowPanel name={"Perception"} value={mod}/>
            <SkillThrowPanel name={"Survival"} value={mod}/>
        </Grid>
    )
}
const CharismaPanel: FC<character> = (props: character) => {
    const [mod, setMod] = useState<number>(0)

    useEffect(() => {
        setMod(getModificator(props.stats.charisma))
    }, [])

    return (
        <Grid item container direction={"column"} rowGap={gap}>
            <CharacteristicsPanel name={"Charisma"} value={props.stats.charisma} professionalBonus={2}/>
            <SkillThrowPanel name={"Deception"} value={mod}/>
            <SkillThrowPanel name={"Intimidation"} value={mod}/>
            <SkillThrowPanel name={"Performance"} value={mod}/>
            <SkillThrowPanel name={"Persuasion"} value={mod}/>
        </Grid>
    )
}

export const StatPanel: FC<character> = (props: character) => {
    return (
        <Box>
            <Grid container width={"100%"} height={"100%"}
                  spacing={"40px"}>
                <Grid item container direction={"column"} width={"50%"} height={"100%"} rowGap={gap}>
                    <StrengthPanel {...props}/>
                    <ConstitutionPanel {...props}/>
                    <IntelligencePanel {...props}/>
                    <CharismaPanel {...props}/>
                </Grid>
                <Grid item container direction={"column"} width={"50%"} height={"100%"} rowGap={gap} >
                    <DexterityPanel {...props}/>
                    <WisdomPanel {...props}/>
                    <PassiveFeelingsAndLanguage perception={10} insight={10} analysis={10} otherSkillsAndLanguages={"aboba"}/>
                </Grid>
            </Grid>
        </Box>
    )
}