import {FC} from "react";
import {Grid, Typography} from "@mui/material";
import {HealthBorderWrapperStyled, HealthIconStyled} from "../styles/MoneyAndhealthLabelStyled.ts";

type moneyAndHealthLabelsProps = {
    currentHP: number,
    maxHP: number
}

export const MoneyAndHealthLabels: FC<moneyAndHealthLabelsProps> = ({currentHP, maxHP}: moneyAndHealthLabelsProps) => {
    return (
        <Grid item container width={"20%"}>
            <Grid item container justifyContent={"flex-end"} alignItems={"center"}>
                    <HealthBorderWrapperStyled alignItems={"center"}>
                        <HealthIconStyled/>
                        <Typography variant="h2" color={"health.main"} fontWeight={"bold"}>
                            {currentHP}/{maxHP}
                        </Typography>
                    </HealthBorderWrapperStyled>
            </Grid>
        </Grid>
    )
}