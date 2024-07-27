import {Box, Card, Grid} from "@mui/material";
import {config} from "../../props/config.ts";
import {FC, useEffect, useState} from "react";
import {StatPanel} from "../../assets/forms/StatPanel.tsx";
import {character} from "../../assets/forms/Data.tsx";
import {ThemeProvider} from "@mui/material/styles";
import {useThemeProvider} from "../../providers/ThemeProvider/ThemeProvider.tsx";
import {MainInfoLabels} from "./index/MainInfoLabels.tsx";
import {SpeedACLabels} from "./index/SpeedACLabels.tsx";
import {MoneyAndHealthLabels} from "./index/MoneyAndHealthLabels.tsx";
import {RightHeader} from "./RightPart/RightHeader.tsx";
import {MultiLabel} from "./RightPart/MultiPanel/MultiLabel.tsx";
import {RightInfoPanel} from "./RightPart/RightInfoPanel.tsx";

export const CharacterList: FC = () => {
    const [characterStats, setCharacterStats] = useState<character>({
        ac: 10,
        currentHP: 10,
        currentXp: 0,
        lvl: 1,
        maxHP: 100,
        name: "bob",
        race: 0,
        subRace: 0,
        id: -1,
        speed: 30,
        skills: {
            acrobatics: false,
            animalHandling: false,
            arcana: false,
            athletics: false,
            deception: false,
            history: false,
            insight: false,
            intimidation: false,
            investigation: false,
            medicine: false,
            nature: false,
            perception: false,
            performance: false,
            persuasion: false,
            religion: false,
            sleightOfHand: false,
            stealth: false,
            survival: false,
        },
        stats: {
            charisma: 10,
            constitution: 10,
            dexterity: 10,
            intelligence: 10,
            strength: 10,
            wisdom: 10,
        },
        charismaProficiency: false,
        constitutionProficiency: false,
        dexterityProficiency: false,
        intelligenceProficiency: false,
        strengthProficiency: false,
        wisdomProficiency: false
    })

    async function getUserCharacter() {
        try {
            const response = await fetch(config.serverHTTPS + `character/get_character?accountId=${sessionStorage.getItem("accountId") as unknown as number}&accountPassword=${sessionStorage.getItem("password")}&characterId=${sessionStorage.getItem("redactingCharacterId") as unknown as number}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`)
            }

            const res = (await response.json()) as character;
            return res
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return characterStats;
            } else {
                console.log('unexpected error: ', error);
                return characterStats;
            }
        }
    }

    async function updateCharacter() {
        if (characterStats.id != localStorage.getItem("redactingCharacterId") as unknown as number) {
            setCharacterStats(await getUserCharacter())
            console.log(characterStats)
        }
    }

    useEffect(() => {
        void updateCharacter();
    }, [])
    return (
        <ThemeProvider theme={useThemeProvider}>
            <Box width={"100%"} heigth={"100%"}>
                <Card style={{
                    position: "relative",
                }}>
                    <Card sx={{
                        backgroundColor: "secondary.main"
                    }}>
                        <Grid item width={"100%"} height={"100%"}>
                            <Grid container justifyContent={"space-between"} direction={"row"} width={"100%"} px={4}
                                  py={1}>
                                <MainInfoLabels currentXp={characterStats.currentXp} lvl={characterStats.lvl}/>
                                <SpeedACLabels speed={characterStats.speed} ac={characterStats.ac}/>
                                <MoneyAndHealthLabels maxHP={characterStats.maxHP}
                                                      currentHP={characterStats.currentHP}/>
                            </Grid>
                        </Grid>
                    </Card>
                    <Grid item container  px={4} py={5}>
                        <Grid item width={"50%"}>
                            <StatPanel {...characterStats}/>
                        </Grid>
                        <Grid item width={"50%"} >
                            <RightInfoPanel/>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </ThemeProvider>
    )
}