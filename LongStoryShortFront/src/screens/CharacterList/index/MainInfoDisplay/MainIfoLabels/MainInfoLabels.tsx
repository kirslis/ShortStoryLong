import {FC} from "react";
import {Grid} from "@mui/material";
import {ExpProgressBar} from "../ExpProgressBar.tsx";
import {StyledTextLabel} from "../../../styles/IndexStyled.ts";
import {CharacterImageButton} from "./CharacterImageButton.tsx";
import {StyledLvlBox, StyledLvlWrapper} from "../../../styles/MainInfoLabelStyled.ts";

type InfoLabelProps = {
    lvl: number,
    currentXp: number
}

export const MainInfoLabels: FC<InfoLabelProps> = ({currentXp, lvl}: InfoLabelProps) => {
    return (
        <Grid item height={"100%"} width={"35%"} display={"flex"} gap={"10px"}>
            <Grid item width={"60px"}>
             <CharacterImageButton/>
            </Grid>
            <Grid item container direction={"column"} spacing={0}>
                <StyledTextLabel variant="h2">
                    Клод жиллес
                </StyledTextLabel>
                <StyledTextLabel variant="h3">
                    человек — жрец домена порядка
                </StyledTextLabel>
                <StyledLvlWrapper >
                    <StyledLvlBox >
                        <StyledTextLabel variant="h4">
                            1 УРОВЕНЬ
                        </StyledTextLabel>
                    </StyledLvlBox>
                    <ExpProgressBar currentXp={currentXp} lvl={lvl}/>
                </StyledLvlWrapper>
            </Grid>
        </Grid>
    )
}