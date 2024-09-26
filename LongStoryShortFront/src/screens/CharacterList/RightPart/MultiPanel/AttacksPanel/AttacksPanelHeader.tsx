import {FC} from "react";
import {Box} from "@mui/material";
import {
    StyledAttackPanelBox,
    StyledAttackPanelTextLabel,
    StyledInteractiveButton
} from "../../../styles/AttackPanelHeaderStyled.ts";

export const AttacksPanelHeader: FC = () => {
    return (
        <StyledAttackPanelBox>
            <StyledAttackPanelTextLabel flex={3} variant={"h3"}>
                name
            </StyledAttackPanelTextLabel>
            <StyledAttackPanelTextLabel flex={3} variant={"h3"} textAlign={"center"}>
                bonus
            </StyledAttackPanelTextLabel>
            <Box flex={4} display={"flex"} justifyContent={"space-between"}>
                <StyledAttackPanelTextLabel flex={2} variant={"h3"}>
                    damage/type
                </StyledAttackPanelTextLabel>
                <Box flex={1} display={"flex"} gap={"2px"} justifyContent={"end"}>
                    <StyledInteractiveButton>
                        <StyledAttackPanelTextLabel variant={"h3"}>
                            +
                        </StyledAttackPanelTextLabel>
                    </StyledInteractiveButton>
                    <StyledInteractiveButton>
                        <StyledAttackPanelTextLabel variant={"h3"}>
                            -
                        </StyledAttackPanelTextLabel>
                    </StyledInteractiveButton>
                </Box>
            </Box>
        </StyledAttackPanelBox>
    )
}