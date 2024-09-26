import {Grid} from "@mui/material";
import {StatModalTextField} from "./StatsModals/StatModalTextField.tsx";
import {MiddleModalPanel} from "./MiddleModalPanel.tsx";

type skillsModalProps = {
    isOpen: boolean,
    skillName: string,
    additionalSkillValue: number,
    setOpen: () => void,
    setNewAdditionalSkillValue: (value: number) => void,
}

export const SkillModal = (props: skillsModalProps) => {
    const additionalSkillValueChangeHandler = (value: string) => {
        if (!isNaN(+value))
            props.setNewAdditionalSkillValue(+value)
    }

    return (
        <MiddleModalPanel isOpen={props.isOpen} onClose={props.setOpen} statName={props.skillName} >
            <Grid item container width={"100%"} spacing={5}>
                <Grid item width={"40%"}>
                    <StatModalTextField value={props.additionalSkillValue} helperText={"additional value"}
                                        changeHandler={additionalSkillValueChangeHandler}/>
                </Grid>
            </Grid>
        </MiddleModalPanel>
    )
}