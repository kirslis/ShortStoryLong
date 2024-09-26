import {Box, Grid} from "@mui/material";
import {FC, useEffect, useState} from "react";
import {StyledTextLabel} from "../../styles/IndexStyled.ts";
import {StatNameButtonStyled, StatValueButtonStyled} from "../../styles/ThrowPanelStyled.ts";

export interface IThrowPanel {
    name: string,
    mod: number,
    proficiency: boolean,
    proficiencyBonus: number,
    additionalBonus?: number,
    setOpen: () => void,
}

export const ThrowPanel: FC<IThrowPanel> = (props: IThrowPanel) => {
    const [sumBonus, setSumBonus] = useState<number>(0)

    useEffect(() => {
        setSumBonus(props.mod + (props.additionalBonus ? props.additionalBonus : 0) + (props.proficiency ? props.proficiencyBonus : 0));
    }, [props]);

    return (
        <Grid item container alignContent={"center"}>
            <Grid item width={"100%"} height={"30px"}>
                <Box width={"100%"}>
                    <StatNameButtonStyled fullWidth onClick={props.setOpen}>
                        <StyledTextLabel variant="h4" textAlign={"start"} flex={1} ml={"8px"}>
                            {props.name}
                        </StyledTextLabel>
                    </StatNameButtonStyled>
                </Box>
            </Grid>
            <Grid item>
                <Box position={"relative"}>
                    <StatValueButtonStyled  onClick={props.setOpen} >
                        <StyledTextLabel variant="h2">
                            {sumBonus > 0 && sumBonus < 10 ? '+' : null}{sumBonus}
                        </StyledTextLabel>
                    </StatValueButtonStyled>
                </Box>
            </Grid>
        </Grid>
    )
}