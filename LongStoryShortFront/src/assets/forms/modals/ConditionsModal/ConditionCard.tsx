import {Box, Grid} from "@mui/material";
import {StyledTextLabel} from "../../../../screens/CharacterList/styles/IndexStyled.ts";
import {
    ConditionCheckboxCheckedStyled,
    ConditionCheckedIcon,
    ConditionUncheckedIcon,
    DescriptionArrowChecked,
    DescriptionArrowUnchecked,
    NameButtonStyled
} from "../../../../screens/CharacterList/styles/ConditionCardStyled.ts";
import {useState} from "react";
import {ConditionDescriptionPart} from "./ConditionDescriptionPart.tsx";
import {Conditions, useConditionsStore} from "../../../../screens/CharacterList/CharacterListData/ConditionsStore.ts";

interface IConditionCard {
    conditionName: string;
}

export const ConditionCard = (props: IConditionCard) => {
    const conditionState = useConditionsStore(state => state.conditions[props.conditionName as keyof Conditions]);
    const setConditionState = useConditionsStore(state => state.setConditions);
    const conditionDescription = useConditionsStore(state => state.descriptions[props.conditionName as keyof Conditions]);

    const [isDescriptionOpen, setDescriptionOpen] = useState(false);

    const conditionStateCheckboxChangeHandler = () => {
        setConditionState({[props.conditionName]: !conditionState})
    }

    const changeIsDescriptionOpen = () => {
        setDescriptionOpen(!isDescriptionOpen);
    }

    const getParsedDescription = () => {
        return conditionDescription.split(/\r\n|\n\r|\n|\r/);
    }

    const getDescriptionParts = () => {
        const lines = getParsedDescription();
        const descriptionParts: Array<JSX.Element> = [];
        lines.forEach(line => {
            descriptionParts.push(
                <ConditionDescriptionPart descriptionLine={line}/>
            )
        })

        return descriptionParts;
    }

    return (
        <Box width={"100%"} bgcolor={"secondary.main"} borderRadius={"5px"} display={"flex"} flexDirection={"column"}
             alignItems={"center"}>
            <Grid container display={"flex"} alignItems={"center"} width={"100%"}>
                <ConditionCheckboxCheckedStyled
                                                checked={conditionState}
                                                onChange={conditionStateCheckboxChangeHandler}
                                                disableRipple
                                                icon={<ConditionUncheckedIcon/>}
                                                checkedIcon={<ConditionCheckedIcon/>}/>
                <NameButtonStyled disableRipple>
                    <Grid container justifyContent={"space-between"} alignItems={"center"}>
                        <StyledTextLabel variant={"h2"}>
                            {props.conditionName}
                        </StyledTextLabel>
                        <ConditionCheckboxCheckedStyled disableRipple
                                                        checked={isDescriptionOpen}
                                                        onChange={changeIsDescriptionOpen}
                                                        icon={<DescriptionArrowUnchecked/>}
                                                        checkedIcon={<DescriptionArrowChecked/>}/>
                    </Grid>
                </NameButtonStyled>
            </Grid>
            {isDescriptionOpen ?
                <Grid container direction={"column"}>
                    {getDescriptionParts()}
                </Grid>
                : <></>
            }
        </Box>
    )
}