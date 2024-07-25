import {FC} from "react";
import {Box, Grid, Typography} from "@mui/material";
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';

type moneyAndHealthLabelsProps = {
    currentHP: number,
    maxHP: number
}

export const MoneyAndHealthLabels: FC<moneyAndHealthLabelsProps> = ({currentHP, maxHP}: moneyAndHealthLabelsProps) => {
    return (
        <Grid item alignSelf={"center"} flex={2}>
            <Grid container justifyContent={"flex-end"}>
                <Grid item>
                    <Box display={"flex"} border={2}
                         borderColor={"health.dark"}
                         borderRadius={"20px"}>
                        <Box p={2} display={"flex"} flex={1} alignItems={"center"} gap={"20px"}>
                            <MonitorHeartOutlinedIcon flex={1} color={"health"} sx={{
                                fontSize: "50px"
                            }}/>
                            <Typography flex={1} variant="h4" color={"health.main"}>
                                {currentHP}/{maxHP}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}