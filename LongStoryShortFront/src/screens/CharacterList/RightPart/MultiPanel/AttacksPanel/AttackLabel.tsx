import {FC} from "react";
import {Box} from "@mui/material";
import {StyledTextLabel} from "../../../styles/IndexStyled.ts";
import {StyledAttackNameButton, StyledBaseAttackLabelButton} from "../../../styles/AttackLabelStyled.ts";

type NameButtonProps = {
    name: string
}

const NameButton = ({name}: NameButtonProps) => {
    return (
        <StyledAttackNameButton disableRipple >
            <StyledTextLabel normal={"true"} variant={"h4"}>
                {name}
            </StyledTextLabel>
        </StyledAttackNameButton>
    )
}

type BonusButtonProps = {
    value: number
}

const BonusButton: FC<BonusButtonProps> = ({value}: BonusButtonProps) => {
    return (
        <StyledBaseAttackLabelButton disableRipple >
            <StyledTextLabel color={"textColor.main"} variant={"h2"} my={"5px"} width={"100%"} textAlign={"center"}>
                {(value > 0) ? '+' : null}
                {value}
            </StyledTextLabel>
        </StyledBaseAttackLabelButton>
    )
}

type DamageButtonProps = {
    formulaName: string
}

const DamageButton: FC<DamageButtonProps> = ({formulaName}: DamageButtonProps) => {
    return (
        <StyledBaseAttackLabelButton disableRipple fullWidth>
            <StyledTextLabel color={"textColor.main"} variant={"h3"} my={"5px"} textAlign={"start"}>
                {formulaName}
            </StyledTextLabel>
        </StyledBaseAttackLabelButton>
    )
}

export const AttackLabel: FC = () => {
    return (
        <Box width={"100%"} display={"flex"} borderBottom={1} borderColor={"border.main"}>
            <Box my={1} width={"100%"} display={"flex"}>
                <Box flex={2}>
                    <NameButton name={'MAce'}/>
                </Box>
                <Box flex={1} pl={1}>
                    <BonusButton value={3}/>
                </Box>
                <Box flex={2}>
                    <DamageButton formulaName={"1d6"}/>
                </Box>
            </Box>
        </Box>
    )
}