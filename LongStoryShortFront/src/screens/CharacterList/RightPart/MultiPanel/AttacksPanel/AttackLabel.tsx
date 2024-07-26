import {FC} from "react";
import {Box, Button, Typography} from "@mui/material";

type NameButtonProps = {
    name: string
}

const NameButton: FC<NameButtonProps> = ({name}: NameButtonProps) => {
    return (
        <Box flex={1} height={"100%"}>
            <Button disableRipple fullWidth sx={{
              height:"100%",
                "&:hover": {
                    bgcolor: "background.paper"
                }
            }}>
                <Typography width={"100%"} textAlign={"start"} color={"text.main"}>
                    {name}
                </Typography>
            </Button>
        </Box>
    )
}

type BonusButtonProps = {
    value: number
}

const BonusButton: FC<BonusButtonProps> = ({value}: BonusButtonProps) => {
    return (
        <Button disableRipple sx={{
            backgroundColor: "secondary.main",
            border: 1,
            borderColor: "border.main",
            "&:hover": {
                bgcolor: "secondary.main",
                borderColor: "border.main",
            }
        }}>
            <Typography color={"text.main"} variant={"h5"} my={"5px"}>
                {(value > 0) ? '+' : null}
                {value}
            </Typography>
        </Button>
    )
}

type DamageButtonProps = {
    formulaName: string
}

const DamageButton: FC<DamageButtonProps> = ({formulaName}: DamageButtonProps) => {
    return (
        <Button disableRipple fullWidth sx={{
            backgroundColor: "secondary.main",
            border: 1,
            borderColor: "border.main",
            "&:hover": {
                bgcolor: "secondary.main",
                borderColor: "border.main",
            }
        }}>
            <Typography width={"100%"} textAlign={"start"} color={"text.main"} variant={"h5"} my={"5px"}>
                {formulaName}
            </Typography>
        </Button>
    )
}

export const AttackLabel: FC = () => {
    return (
        <Box width={"100%"} display={"flex"} borderBottom={1} borderColor={"border.main"}>
            <Box my={1} width={"100%"} display={"flex"}>
                <Box flex={2}>
                    <NameButton name={"mace"}/>
                </Box>
                <Box flex={1} >
                    <BonusButton value={3}/>
                </Box>
                <Box flex={2}>
                    <DamageButton formulaName={"1d6"}/>
                </Box>
            </Box>
        </Box>
    )
}