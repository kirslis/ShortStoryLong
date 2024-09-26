import {Box, Grid } from "@mui/material";
import { useState} from "react";
import {AttacksPanel} from "./AttacksPanel/AttacksPanel.tsx";
import {AbilitiesPanel} from "./AbilitiesPanel/AbilitiesPanel.tsx";
import {EquipmentPanel} from "./EquipmentPanel/EquipmentPanel.tsx";
import {PurposesLabel} from "./PurposesLabel/PurposesLabel.tsx";
import {NotesLabel} from "./NotesLabel/NotesLabel.tsx";
import {PersonalityLabel} from "./PersonalityLabel/PersonalityLabel.tsx";
import {MultiLabelSwitchButtonRow} from "./MultiLabelSichButtonRow.tsx";

export enum MultiPanelState {
    attacks,
    abilities,
    equipment,
    personality,
    purposes,
    notes,
    spells
}

export const MultiLabel = () => {
    const [multiPanelState, setMultiPanelState] = useState<MultiPanelState>(MultiPanelState.attacks)

    function StateChangeHandler(value: MultiPanelState) {
        setMultiPanelState(value)
    }

    return (
        <Grid item container height={"100%"}  direction={"column"}
        >
            <Grid item width={"100%"}>
                <MultiLabelSwitchButtonRow stateValue={StateChangeHandler} currentState={multiPanelState}/>
            </Grid>
            <Grid item container mr={1}  sx={{
                height: "100%",
            }}>
                <Box width={"100%"}  border={1} borderColor={"border.main"}  sx={{
                    overflowY: "scroll",
                    maxHeight: "700px",
                    height: "700px"
                }}>
                    <Box m={3}>
                        {(multiPanelState == MultiPanelState.attacks) ? <AttacksPanel/> : null}
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