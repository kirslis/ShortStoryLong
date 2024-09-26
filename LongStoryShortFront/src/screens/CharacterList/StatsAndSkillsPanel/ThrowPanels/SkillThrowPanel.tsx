import {FC, useEffect, useState} from "react";
import {Box, Grid} from "@mui/material";
import {SkillsProficiency, useSkillsProficiencyStore} from "../../CharacterListData/SkillsProficiencyStore.ts";
import {SkillModal} from "../../../../assets/forms/modals/SkillsModal.tsx";
import {
    SkillsAdditionalBonusesStore,
    useSkillsAdditionalBonusesStore
} from "../../CharacterListData/SkillsAdditionalBonusesStore.ts";
import {StyledTextLabel} from "../../styles/IndexStyled.ts";
import {StatValueButtonStyled} from "../../styles/ThrowPanelStyled.ts";
import {
    SkillThrowCheckboxStyled, SkillThrowCheckedIcon,
    SkillThrowStatNameButtonStyled,
    SkillThrowUncheckedIcon
} from "../../styles/SkillThrowPanelStyled.ts";

type checkThrowProps = {
    name: string,
    value: number,
    skillProficiency: boolean,
    proficiencyBonus: number,
    additionalSkillBonus: number
}

export const SkillThrowPanel: FC<checkThrowProps> = (props: checkThrowProps) => {
    const [sumValue, setSumValue] = useState<number>(0);
    const {setSkillsProficiency} = useSkillsProficiencyStore((state) => ({
        setSkillsProficiency: state.setSkillsProficiency
    }))

    const {setSkillsAdditionalBonuses} = useSkillsAdditionalBonusesStore((state) => ({
        setSkillsAdditionalBonuses: state.setSkillsAdditionalBonuses
    }))
    const [skillModalOpen, setSkillModalOpen] = useState(false);
    const skillModalCloseHandler = () => setSkillModalOpen(false);
    const skillModalOpenHandler = () => setSkillModalOpen(true);

    const getTransformedName = () => {
        let newName = props.name;
        const parts = newName.split(' ');

        newName = parts[0];
        for (let i = 1; i < parts.length; i++) {
            parts[i] = parts[i][0].toUpperCase() + parts[i].substring(1, parts[i].length);
            newName += parts[i];
        }

        return newName;
    }

    const checkboxChangeHandler = () => {
        const newSkillsProficiency: Partial<SkillsProficiency> = {[getTransformedName()]: !props.skillProficiency}
        setSkillsProficiency(newSkillsProficiency);
    }

    const setNewAdditionalSkillValue = (newValue: number) => {
        const newAdditionalSkillValue: Partial<SkillsAdditionalBonusesStore> = {[getTransformedName()]: newValue}
        setSkillsAdditionalBonuses(newAdditionalSkillValue);
    }

    useEffect(() => {
        setSumValue(props.value + props.additionalSkillBonus + (props.skillProficiency ? props.proficiencyBonus : 0));
    }, [props])

    return (
        <>
            <Grid item container width={"100%"} height={"30px"} alignContent={"center"}>
                <Grid item width={"100%"}>
                    <Box position={"relative"}>
                        <SkillThrowCheckboxStyled
                            icon={<SkillThrowUncheckedIcon/>}
                            checkedIcon={<SkillThrowCheckedIcon/>
                            }
                            checked={props.skillProficiency}
                            onChange={checkboxChangeHandler}/>
                    </Box>
                    <SkillThrowStatNameButtonStyled onClick={skillModalOpenHandler}>
                        <StyledTextLabel variant="h3" ml={"40px"} color={"text.main"} textAlign={"start"} flex={1}>
                            {props.name}
                        </StyledTextLabel>
                    </SkillThrowStatNameButtonStyled>
                </Grid>
                <Grid item>
                    <Box position={"relative"} bgcolor={"white"}>
                        <StatValueButtonStyled onClick={() => {setSkillModalOpen(true)}}>
                            <StyledTextLabel variant="h2">
                                {sumValue > 0 && sumValue < 10 ? '+' : null}{sumValue}
                            </StyledTextLabel>
                        </StatValueButtonStyled>
                    </Box>
                </Grid>
            </Grid>
            <SkillModal isOpen={skillModalOpen} skillName={props.name} additionalSkillValue={props.additionalSkillBonus}
                        setOpen={skillModalCloseHandler} setNewAdditionalSkillValue={setNewAdditionalSkillValue}
            />
        </>
    )
}