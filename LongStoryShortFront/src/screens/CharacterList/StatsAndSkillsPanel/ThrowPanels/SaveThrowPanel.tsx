import {FC} from "react";
import {ThrowPanel} from "./ThrowPanel.tsx";
import {Box,  Grid} from "@mui/material";
import {
    SaveThrowCheckboxStyled,
    SaveThrowCheckedIconStyled,
    SaveThrowUncheckedIconStyled
} from "../../styles/SaveThrowPanelStyled.ts";

export interface ISaveThrowPanel {
    mod: number,
    proficiency: boolean,
    proficiencyBonus: number,
    additionalBonus: number,
    setOpen: () => void,
    checkboxChangeHandler: (newValue: boolean) => void
}

export const SaveThrowPanel: FC<ISaveThrowPanel> = (props: ISaveThrowPanel) => {
    return (
        <Grid container alignContent={"center"} width={"100%"}>
            <Box flex={1} position={"relative"}>
                <SaveThrowCheckboxStyled
                    icon={<SaveThrowUncheckedIconStyled/>}
                    checkedIcon={<SaveThrowCheckedIconStyled />}
                    checked={props.proficiency}
                    onChange={e => {
                        props.checkboxChangeHandler(e.target.checked)
                    }}
                />
                <ThrowPanel name={"save throw"}
                            mod={props.mod}
                            proficiency={props.proficiency}
                            proficiencyBonus={props.proficiencyBonus}
                            setOpen={props.setOpen}
                            additionalBonus={props.additionalBonus}/>
            </Box>
        </Grid>
    )
}