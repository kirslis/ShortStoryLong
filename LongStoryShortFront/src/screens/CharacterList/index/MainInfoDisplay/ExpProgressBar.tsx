import {FC} from "react";
import {Box} from "@mui/material";
import {ExpProgressBarStyled} from "../../styles/ExpProgressBarStyled.ts";
import {StyledTextLabel} from "../../styles/IndexStyled.ts";

type ExpProgressBarProps = {
    lvl: number,
    currentXp: number
}

export const ExpProgressBar: FC<ExpProgressBarProps> = ({currentXp, lvl}: ExpProgressBarProps) => {
    return (
        <Box display={"flex"} height={"100%"} flex={3} justifyContent={"flex-start"} alignItems={"center"}>
            <Box display={"flex"} flex={1} height={"100%"}>
                <Box position={"relative"} zIndex={2}>
                        <StyledTextLabel variant="h4" position={"absolute"} top={"3px"} left={"7px"}>
                            {currentXp}/300
                        </StyledTextLabel>
                </Box>
                <ExpProgressBarStyled variant="determinate" value={currentXp * 100 / 300}/>
            </Box>
            <Box position={"relative"}>
                <StyledTextLabel variant="h3" position={"absolute"} left={"-15px"} top={"-7px"}>
                    {lvl}
                </StyledTextLabel>
            </Box>
        </Box>
    )
}
