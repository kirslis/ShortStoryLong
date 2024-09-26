import {FC} from "react";
import {ThrowPanel} from "./ThrowPanel.tsx";

export interface ICheckThrowPanel {
    mod: number,
    setOpen: () => void,
}

export const CheckThrowPanel: FC<ICheckThrowPanel> = (props: ICheckThrowPanel) => {
    return (
        <ThrowPanel name={"check throw"}
                    mod={props.mod}
                    proficiency={false}
                    setOpen={props.setOpen}
                    proficiencyBonus={0}/>
    )
}