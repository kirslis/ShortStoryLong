import {FC} from "react";
import {Box, Button, Grid} from "@mui/material";
import {CheckThrowPanel} from "../ThrowPanels/CheckThrowPanel.tsx";
import {SaveThrowPanel} from "../ThrowPanels/SaveThrowPanel.tsx";
import {StatsProficiency, useStatsProficiencyStore} from "../../CharacterListData/StatsProficiencyStore.ts";
import {StyledTextLabel} from "../../styles/IndexStyled.ts";
import {CharacteristicsDividerStyled} from "../../styles/CharacteristicsPanelStyled.ts";


type CharacteristicsPanelProps = {
    name: string,
    value: number,
    mod: number,
    proficiencyBonus: number,
    saveThrowProficiency: boolean,
    additionalBonus: number,
    modalOpenHandler: () => void
}

export const CharacteristicsPanel: FC<CharacteristicsPanelProps> = (props: CharacteristicsPanelProps) => {
    const {setStatsProficiency} = useStatsProficiencyStore((state) => ({
        setStatsProficiency: state.setStatsProficiency
    }))

    const statProficiencyCheckboxChangeHandler = (newProficiency: boolean) => {
        const newStatsProficiency: Partial<StatsProficiency> = {[props.name]: newProficiency}
        setStatsProficiency(newStatsProficiency);
    }

    return (
        <Grid item container direction={"column"} height={"75px"} rowGap={"15px"}>
            <Grid item display={"flex"} height={"30px"}>
                <Button onClick={props.modalOpenHandler} sx={{
                    flex: 1,
                    "&:hover": {
                        bgcolor: "background.paper"
                    },
                }}>
                    <Box display={"flex"} flex={1} justifyContent={"space-between"} flexDirection={"row"}>
                        <StyledTextLabel variant="h1">{props.name}</StyledTextLabel>
                        <CharacteristicsDividerStyled flexItem orientation={"horizontal"} variant={"middle"}/>
                        <StyledTextLabel variant="h1" color={"text.main"}>{props.value}</StyledTextLabel>
                    </Box>
                </Button>
            </Grid>
            <Grid item display={"flex"} height={"30px"} width={"100%"} columnGap={"10px"}>
                <Box flex={1}>
                    <CheckThrowPanel mod={props.mod} setOpen={props.modalOpenHandler}/>
                </Box>
                <Box flex={1}>
                    <SaveThrowPanel mod={props.mod} proficiency={props.saveThrowProficiency}
                                    proficiencyBonus={props.proficiencyBonus} setOpen={props.modalOpenHandler}
                                    checkboxChangeHandler={statProficiencyCheckboxChangeHandler}
                                    additionalBonus={props.additionalBonus}/>
                </Box>
            </Grid>
        </Grid>
    )
}