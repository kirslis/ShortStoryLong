import {Box, Button, Grid, Typography} from "@mui/material";
import {FC, useState} from "react";
import {AttacksPanel} from "./AttacksPanel/AttacksPanel.tsx";
import {AbilitiesPanel} from "./AbilitiesPanel/AbilitiesPanel.tsx";
import {EquipmentPanel} from "./EquipmentPanel/EquipmentPanel.tsx";
import {PurposesLabel} from "./PurposesLabel/PurposesLabel.tsx";
import {NotesLabel} from "./NotesLabel/NotesLabel.tsx";
import {PersonalityLabel} from "./PersonalityLabel/PersonalityLabel.tsx";

type SwitchButtonProps = {
    name: string,
    onClick: (value: MultiPanelState) => void,
    stateValue: MultiPanelState,
    currentState: MultiPanelState,
}

export enum MultiPanelState {
    attacks,
    abilities,
    equipment,
    personality,
    purposes,
    notes,
    spells
}

const SwitchButton: FC<SwitchButtonProps> = ({name, stateValue, onClick, currentState}: SwitchButtonProps) => {
    return (
        <Button onClick={() => onClick(stateValue)} sx={{
            borderBottom: currentState === stateValue ? 2 : 0,
            borderColor: "border.light",
            "&:hover": {
                borderColor: "border.light",
            },
            selected: {
                outline: 'none',
            }
        }}>
            <Typography sx={{
                color: currentState === stateValue ? "border.light" : "text.main"
            }}>
                {name}
            </Typography>
        </Button>
    )
}

type SwitchButtonRowProps = {
    stateValue: (value: MultiPanelState) => void,
    currentState: MultiPanelState
}

const SwitchButtonRow: FC<SwitchButtonRowProps> = ({stateValue, currentState}: SwitchButtonRowProps) => {
    return (
        <>
            <SwitchButton name={"attacks"} stateValue={MultiPanelState.attacks} onClick={stateValue}
                          currentState={currentState}/>
            <SwitchButton name={"abilities"} stateValue={MultiPanelState.abilities} onClick={stateValue}
                          currentState={currentState}/>
            <SwitchButton name={"equipment"} stateValue={MultiPanelState.equipment} onClick={stateValue}
                          currentState={currentState}/>
            <SwitchButton name={"personality"} stateValue={MultiPanelState.personality} onClick={stateValue}
                          currentState={currentState}/>
            <SwitchButton name={"purposes"} stateValue={MultiPanelState.purposes} onClick={stateValue}
                          currentState={currentState}/>
            <SwitchButton name={"notes"} stateValue={MultiPanelState.notes} onClick={stateValue}
                          currentState={currentState}/>
            <SwitchButton name={"spells"} stateValue={MultiPanelState.spells} onClick={stateValue}
                          currentState={currentState}/>
        </>
    )
}

export const MultiLabel = () => {
    const [multiPanelState, setMultiPanelState] = useState<MultiPanelState>(MultiPanelState.attacks)

    function StateChangeHandler(value: MultiPanelState) {
        setMultiPanelState(value)
    }

    return (
        <Grid item container display={"flex"} height={"100%"} direction={"column"}>
            <Grid item width={"100%"}>
                <SwitchButtonRow stateValue={StateChangeHandler} currentState={multiPanelState}/>
            </Grid>
            <Grid item flex={1} mr={1}>
                <Box width={"100%"} height={"100%"} maxHeight={"1000px"} border={1} borderColor={"border.main"} sx={{
                    overflowY: "scroll"
                }}>
                    <Box m={3}>
                        {(multiPanelState === MultiPanelState.attacks) ? <AttacksPanel/> : null}
                        {(multiPanelState == MultiPanelState.abilities) ? <AbilitiesPanel/> : null}
                        {(multiPanelState == MultiPanelState.equipment) ? <EquipmentPanel/> : null}
                        {(multiPanelState == MultiPanelState.personality) ? <PersonalityLabel/> : null}
                        {(multiPanelState == MultiPanelState.purposes) ? <PurposesLabel/> : null}
                        {(multiPanelState == MultiPanelState.notes) ? <NotesLabel/> : null}
                        {(multiPanelState == MultiPanelState.spells) ? null : null}
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}