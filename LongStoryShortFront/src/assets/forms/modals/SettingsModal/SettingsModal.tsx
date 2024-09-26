import {Box, Modal} from "@mui/material";
import {LeftModalBoxStyled} from "../../../../screens/CharacterList/styles/ModalsStyled.ts";
import {LeftModalHeader} from "../LeftModalHeader.tsx";
import {UnderlinedTextField} from "../../parts/UnderlinedTextField.tsx";
import {useMainStatsStore} from "../../../../screens/CharacterList/CharacterListData/MainStatsStore.ts";

interface ISettingsModal {
    isOpen: boolean;
    setClose: () => void;
}

export const SettingsModal = (props: ISettingsModal) => {
    const setMainStats = useMainStatsStore(state => state.setMainStats)
    const name = useMainStatsStore(state => state.mainStats.name)
    const race = useMainStatsStore(state => state.mainStats.race)
    const characterClass = useMainStatsStore(state => state.mainStats.characterClass)
    const ac = useMainStatsStore(state => state.mainStats.ac)
    const speed = useMainStatsStore(state => state.mainStats.speed)
    const initiative = useMainStatsStore(state => state.mainStats.initiative)

    const onNameChange = (value: string) => {
        setMainStats({["name"]: value})
    }
    const onRaceChange = (value: string) => {
        setMainStats({["race"]: value})
    }
    const onClassChange = (value: string) => {
        setMainStats({["characterClass"]: value})
    }
    const onACChange = (value: string) => {
        if (!isNaN(+value)) {
            setMainStats({["ac"]: +value})
        }
    }
    const onSpeedChange = (value: string) => {
        if (!isNaN(+value)) {
            setMainStats({["speed"]: +value})
        }
    }
    const onInitiativeChange = (value: string) => {
        if (!isNaN(+value)) {
            setMainStats({["initiative"]: +value})
        }
    }

    return (
        <Modal open={props.isOpen} onClose={props.setClose}>
            <LeftModalBoxStyled>
                <Box display={"flex"} justifyContent={"start"} flexDirection={"column"} alignItems={"center"} px={2}>
                    <LeftModalHeader name={"settings"} onClose={props.setClose}/>
                    <UnderlinedTextField label={"name"} onChange={onNameChange} value={name}/>
                    <Box display={"flex"} width={"100%"} gap={"15px"}>
                        <UnderlinedTextField label={"race"} onChange={onRaceChange} value={race}/>
                        <UnderlinedTextField label={"class"} onChange={onClassChange} value={characterClass}/>
                    </Box>
                    <Box display={"flex"} width={"100%"} gap={"15px"}>
                        <UnderlinedTextField label={"ac"} onChange={onACChange} value={ac.toString()}/>
                        <UnderlinedTextField label={"speed"} onChange={onSpeedChange} value={speed.toString()}/>
                        <UnderlinedTextField label={"initiative"} onChange={onInitiativeChange}
                                             value={initiative ? initiative.toString() : ""}/>
                    </Box>
                </Box>
            </LeftModalBoxStyled>
        </Modal>
    )
}