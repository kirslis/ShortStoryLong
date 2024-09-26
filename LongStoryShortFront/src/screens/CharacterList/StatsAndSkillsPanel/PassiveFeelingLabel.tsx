import {Box} from "@mui/material";
import {
    StyledPassiveFeelingValueWrapper,
    StyledPassiveFeelingButton, StyledPassiveFeelingValueLabel
} from "../styles/PassiveFeelingsAndLanguagesStyled.ts";
import {StyledTextLabel} from "../styles/IndexStyled.ts";

interface IPassiveFeelingLabel {
    value: number,
    statName: string,
    characteristicName: string,
    isRewritten: boolean,
    onModalOpen: () => void
}

export const PassiveFeelingLabel = (props: IPassiveFeelingLabel) => {
    return (
        <Box flex={1} display={"flex"} alignItems={"center"}>
            <StyledPassiveFeelingValueWrapper isrewritten={props.isRewritten.toString()}>
                <StyledPassiveFeelingValueLabel variant={"h2"}>
                    {props.value}
                </StyledPassiveFeelingValueLabel>
            </StyledPassiveFeelingValueWrapper>
            <StyledPassiveFeelingButton variant={"outlined"} disableRipple onClick={props.onModalOpen}>
                <StyledTextLabel mx={2} variant={"h4"}>
                    {props.characteristicName} ({props.statName})
                </StyledTextLabel>
            </StyledPassiveFeelingButton>
        </Box>
    )
}