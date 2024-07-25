import {FC} from "react";
import {ThrowPanel} from "./ThrowPanel.tsx";

type checkThrowProps = {
    value: number
}

export const CheckThrowPanel: FC<checkThrowProps> = (props: checkThrowProps) => {
    return (
        <ThrowPanel value={props.value} name={"Check"}/>
    )
}