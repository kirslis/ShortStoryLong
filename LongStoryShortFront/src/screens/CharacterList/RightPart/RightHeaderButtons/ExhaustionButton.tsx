import {FC} from "react";
import {BaseRightHeaderButton} from "./BaseRightHeaderButton.tsx";
import {ExhaustedMenuItem, ExhaustedSelectStyled} from "../../styles/ExhaustionButtonStyled.ts";

const exhaustionOptions = [
    {value: 0, label: "0"},
    {value: 1, label: "1"},
    {value: 2, label: "2"},
    {value: 3, label: "3"},
    {value: 4, label: "4"},
    {value: 5, label: "5"},
    {value: 6, label: "6"},
];

export const ExhaustionButtons: FC = () => {
    return(
        <BaseRightHeaderButton name={"Exhaustion"} children={
            <ExhaustedSelectStyled defaultValue={1} variant={"standard"}>
                {exhaustionOptions.map((option) => (
                    <ExhaustedMenuItem
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </ExhaustedMenuItem>
                ))}
            </ExhaustedSelectStyled>
        }/>
    )
}