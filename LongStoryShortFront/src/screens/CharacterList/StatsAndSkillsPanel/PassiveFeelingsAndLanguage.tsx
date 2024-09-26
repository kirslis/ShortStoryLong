import {Box,  Grid, TextField} from "@mui/material";
import {usePassiveFeelingsStore} from "../CharacterListData/PassiveFeelingsStore.ts";
import {useSkillsProficiencyStore} from "../CharacterListData/SkillsProficiencyStore.ts";
import {useStatsStore} from "../CharacterListData/StatsStore.ts";
import {useState} from "react";
import {PassiveFeelingLabel} from "./PassiveFeelingLabel.tsx";
import {getModifier} from "./StatPanels/statsPanelProps.ts";
import {StyledLabelText} from "../styles/PassiveFeelingsAndLanguagesStyled.ts";

interface IPassiveFeelingsAndLanguages {
    onWisdomModalOped: () => void,
    onIntelligenceModalOpen: () => void
}

export const PassiveFeelingsAndLanguage = (props: IPassiveFeelingsAndLanguages) => {
    const {passivePerception, passiveInsight, passiveInvestigation} = usePassiveFeelingsStore((state) => ({
        passiveInsight: state.passiveFeelings.insight,
        passivePerception: state.passiveFeelings.perception,
        passiveInvestigation: state.passiveFeelings.analysis,
    }))
    const {
        perceptionProficiency,
        insightProficiency,
        investigationProficiency
    } = useSkillsProficiencyStore((state) => ({
        perceptionProficiency: state.skillsProficiency.perception,
        insightProficiency: state.skillsProficiency.insight,
        investigationProficiency: state.skillsProficiency.investigation
    }))
    const {intelligence, wisdom} = useStatsStore((state) => ({
        intelligence: state.stats.intelligence,
        wisdom: state.stats.wisdom
    }))
    const [otherSkillsAndLanguages] = useState<string>("aboba");

    const getPassivePerception = () => {
        if (passivePerception != 0)
            return passivePerception

        return 10 + getModifier(wisdom) + (perceptionProficiency ? 2 : 0);
    }
    const getPassiveInsight = () => {
        if (passiveInsight != 0)
            return passiveInsight

        return 10 + getModifier(wisdom) + (insightProficiency ? 2 : 0);
    }
    const getPassiveInvestigation = () => {
        if (passiveInvestigation != 0)
            return passiveInvestigation

        return 10 + getModifier(intelligence) + (investigationProficiency ? 2 : 0);
    }

    return (
        <Grid item container display={"flex"} flex={1} direction={"column"} gap={"10px"}>
            <Box flex={1} display={"flex"} flexDirection={"column"} gap={"10px"}>
                <StyledLabelText variant={"h3"}>
                    Passive feelings
                </StyledLabelText>
                <PassiveFeelingLabel value={getPassivePerception()} statName={"perception"}
                                     characteristicName={"wisdom"} isRewritten={passivePerception != 0}
                                     onModalOpen={props.onWisdomModalOped}/>
                <PassiveFeelingLabel value={getPassiveInsight()} statName={"insight"} characteristicName={"wisdom"}
                                     isRewritten={passiveInsight != 0} onModalOpen={props.onWisdomModalOped}/>
                <PassiveFeelingLabel value={getPassiveInvestigation()} statName={"investigation"}
                                     characteristicName={"intelligence"} isRewritten={passiveInvestigation != 0}
                                     onModalOpen={props.onIntelligenceModalOpen}/>
            </Box>
            <Box flex={"auto"} display={"flex"} flexDirection={"column"}>
                <StyledLabelText variant={"h3"}>
                    Other skills and languages
                </StyledLabelText>
                <Box border={1} height={"100%"} borderColor={"border.main"} px={1} sx={{
                    overflowY: "scroll"
                }}>
                    <TextField value={otherSkillsAndLanguages} variant="standard" multiline
                               fullWidth InputProps={{
                        disableUnderline: true,
                    }} sx={{
                        fontSize: "h4",
                        '& .MuiInputBase-root': {
                            color: 'text.main',
                        },
                    }}>
                    </TextField>
                </Box>
            </Box>
        </Grid>
    )
}