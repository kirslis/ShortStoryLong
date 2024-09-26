import {Box, Grid} from "@mui/material";
import {config} from "../../props/config.ts";
import {FC, useEffect} from "react";
import {MainInfoLabels} from "./index/MainInfoDisplay/MainIfoLabels/MainInfoLabels.tsx";
import {SpeedACLabels} from "./index/SpeedACLabels.tsx";
import {MoneyAndHealthLabels} from "./index/MoneyAndHealthLabels.tsx";
import {useMainStatsStore} from "./CharacterListData/MainStatsStore.ts";
import {useStatsStore} from "./CharacterListData/StatsStore.ts";
import {useStatsProficiencyStore} from "./CharacterListData/StatsProficiencyStore.ts";
import {useSkillsProficiencyStore} from "./CharacterListData/SkillsProficiencyStore.ts";
import {useSkillsAdditionalBonusesStore} from "./CharacterListData/SkillsAdditionalBonusesStore.ts";
import {useStatsAdditionalBonusesStore} from "./CharacterListData/StatsAdditionalBonusesStore.ts";
import {StatPanel} from "./StatsAndSkillsPanel/StatPanels/StatPanel.tsx";
import {RightInfoPanel} from "./RightPart/RightInfoPanel.tsx";

export const CharacterList: FC = () => {
    const {mainStats, setMainStats} = useMainStatsStore((state) => ({
        mainStats: state.mainStats,
        setMainStats: state.setMainStats
    }))
    const {setStats} = useStatsStore((state) => ({
        setStats: state.setStats
    }))
    const {setStatsProficiency} = useStatsProficiencyStore((state) => ({
        setStatsProficiency: state.setStatsProficiency
    }))
    const {setStatsAdditionalBonuses} = useStatsAdditionalBonusesStore((state) => ({
        setStatsAdditionalBonuses: state.setStatsAdditionalBonuses
    }))
    const {setSkillsProficiency} = useSkillsProficiencyStore((state) => ({
        setSkillsProficiency: state.setSkillsProficiency
    }))
    const {setSkillsAdditionalBonuses} = useSkillsAdditionalBonusesStore((state) => ({
        setSkillsAdditionalBonuses: state.setSkillsAdditionalBonuses
    }))

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

            const res = (await response.json());
            console.log(res)
            return res
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
        }
    }

    async function updateCharacter() {
        if (mainStats.id != localStorage.getItem("redactingCharacterId") as unknown as number) {
            const data = (await getUserCharacter())
            if (data) {
                setMainStats(data.mainStats)

                setStats(data.mainStats.stats)
                setStatsProficiency(data.mainStats.statsProficiency)
                setStatsAdditionalBonuses(data.mainStats.statsAdditionalBonuses)

                setSkillsProficiency(data.mainStats.skillsProficiency)
                setSkillsAdditionalBonuses(data.mainStats.skillsAdditionalBonuses)
            }
        }
    }

    useEffect(() => {
        void updateCharacter();
    }, [])
    return (
                <Box height={"100%"}  display={"flex"} flexDirection={"column"} alignItems={"center"} gap={3}>
                    <Box height={"60px"}  width={"100%"} py={1}
                          bgcolor={"secondary.main"}
                          borderBottom={1}
                          borderColor={"border.main"} display={"flex"} justifyContent={"center"}>
                        <Box display={"flex"}  width={"70%"} height={"100%"}>
                            <MainInfoLabels currentXp={mainStats.currentXp}
                                            lvl={mainStats.lvl}/>
                            <SpeedACLabels speed={mainStats.speed} ac={mainStats.ac}/>
                            <MoneyAndHealthLabels maxHP={mainStats.maxHP}
                                                  currentHP={mainStats.currentHP}/>
                        </Box>
                    </Box>
                    <Box  width={"70%"} flex={1}  display={"flex"}
                           overflow={"clip"} justifyContent={"space-between"}
                    >
                        <Grid item width={"49%"} justifySelf={"center"}>
                            <StatPanel/>
                        </Grid>
                        <Grid item width={"49%"} height={"100%"}>
                            <RightInfoPanel/>
                        </Grid>
                    </Box>
                </Box>
    )
}