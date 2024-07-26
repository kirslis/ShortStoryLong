import {FC} from "react";
import {AttackLabel} from "./AttackLabel.tsx";
import {Box, Button, Typography} from "@mui/material";
import {ClosableLabel} from "../ClosableLabel.tsx";

const AttacksPanelHeader: FC = () => {
    const buttonSize: string = "30px";
    return (
        <Box borderBottom={1} borderColor={"border.main"} display={"flex"} justifyContent={"space-between"}
             color={"text.main"}>
            <Box flex={2}>
                <Typography variant={"h6"}>
                    name
                </Typography>
            </Box>
            <Box flex={1}>
                <Typography variant={"h6"}>
                    bonus
                </Typography>
            </Box>
            <Box flex={2} display={"flex"} justifyContent={"space-between"}>
                <Typography flex={4} variant={"h6"}>
                    damage/type
                </Typography>
                <Box flex={1} display={"flex"} gap={"10px"}>
                    <Button sx={{
                        minWidth: buttonSize,
                        width: buttonSize,
                        height: buttonSize,
                        backgroundColor: "secondary.light",
                        "&:hover": {
                            backgroundColor: "secondary.light",
                        }
                    }}><Typography variant={"h5"} color={"text.main"}>+</Typography></Button>
                    <Button sx={{
                        minWidth: buttonSize,
                        width: buttonSize,
                        height: buttonSize,
                        backgroundColor: "secondary.light",
                        "&:hover": {
                            backgroundColor: "secondary.light",
                        }
                    }}><Typography variant={"h5"} color={"text.main"}>-</Typography></Button>
                </Box>
            </Box>
        </Box>
    )
}

export const AttacksPanel: FC = () => {
    return (
        <Box>
            <AttacksPanelHeader/>
            <AttackLabel/>
            <AttackLabel/>
            <AttackLabel/>
            <ClosableLabel name={"attacks and spells"} value={""}/>
            <ClosableLabel name={"skills and abilities"} value={""}/>
        </Box>
    )
}