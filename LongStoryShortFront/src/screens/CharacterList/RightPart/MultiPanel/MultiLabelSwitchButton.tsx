import {FC} from "react";
import {MultiPanelState} from "./MultiLabel.tsx";
import {MultiLabelSwitchButtonStyles, MultiLabelTextLabel} from "../../styles/MultiLabelSwitchButtonStyled.ts";

interface IMultiLabelSwitchButton {
    name: string,
    onClick: (value: MultiPanelState) => void,
    stateValue: MultiPanelState,
    currentState: MultiPanelState,
}

export const MultiLabelSwitchButton: FC<IMultiLabelSwitchButton> = (props: IMultiLabelSwitchButton) => {
    return (
        <MultiLabelSwitchButtonStyles onClick={() => props.onClick(props.stateValue)}  current_state={props.currentState} state_value={props.stateValue}>
            <MultiLabelTextLabel current_state={props.currentState} state_value={props.stateValue}>
                {props.name}
            </MultiLabelTextLabel>
        </MultiLabelSwitchButtonStyles>
    )
}