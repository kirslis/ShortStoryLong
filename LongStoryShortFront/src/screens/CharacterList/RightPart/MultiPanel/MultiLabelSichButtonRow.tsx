import {MultiLabelSwitchButton} from "./MultiLabelSwitchButton.tsx";
import {MultiPanelState} from "./MultiLabel.tsx";

interface IMultiLabelSwitchButtonRow {
    stateValue: (value: MultiPanelState) => void,
    currentState: MultiPanelState
}

export const MultiLabelSwitchButtonRow  = (props: IMultiLabelSwitchButtonRow) => {
    return (
        <>
            <MultiLabelSwitchButton name={"attacks"} stateValue={MultiPanelState.attacks} onClick={props.stateValue}
                                    currentState={props.currentState}/>
            <MultiLabelSwitchButton name={"abilities"} stateValue={MultiPanelState.abilities} onClick={props.stateValue}
                                    currentState={props.currentState}/>
            <MultiLabelSwitchButton name={"equipment"} stateValue={MultiPanelState.equipment} onClick={props.stateValue}
                                    currentState={props.currentState}/>
            <MultiLabelSwitchButton name={"personality"} stateValue={MultiPanelState.personality} onClick={props.stateValue}
                                    currentState={props.currentState}/>
            <MultiLabelSwitchButton name={"purposes"} stateValue={MultiPanelState.purposes} onClick={props.stateValue}
                                    currentState={props.currentState}/>
            <MultiLabelSwitchButton name={"notes"} stateValue={MultiPanelState.notes} onClick={props.stateValue}
                                    currentState={props.currentState}/>
            <MultiLabelSwitchButton name={"spells"} stateValue={MultiPanelState.spells} onClick={props.stateValue}
                                    currentState={props.currentState}/>
        </>
    )
}