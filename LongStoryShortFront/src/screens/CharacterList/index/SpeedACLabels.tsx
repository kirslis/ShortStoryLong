import {FC} from "react";
import {Box, Grid, Typography} from "@mui/material";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";

type SpeedACLabelsProps = {
    ac: number,
    speed: number,
}

export const SpeedACLabels: FC<SpeedACLabelsProps> = ({ac, speed}: SpeedACLabelsProps) => {
    return (
        <Grid item flex={2} >
            <Grid container height={"100%"} width={"100%"} justifyContent={"center"} spacing={2}>
                <Grid item mt={1}>
                    <Box display={"flex"}>
                        <ShieldOutlinedIcon color={"text"} sx={{
                            fontSize: "100px"
                        }}></ShieldOutlinedIcon>
                        <Box position={"relative"}>
                            <Typography align={"center"} position={"absolute"}
                                        top={"30px"}
                                        left={"-70px"}
                                        variant="h4" color={"text.main"} sx={{}}>
                                {ac}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item mt={2}>
                    <Typography variant="h4" align={"center"} sx={{
                        whiteSpace: "pre-wrap",
                        color: "text.main"
                    }}>{speed}{'\n'}speed</Typography>
                </Grid>
                <Grid item mt={2}>
                    <Typography variant="h4" align={"center"} sx={{
                        color: "text.main"
                    }}>{speed}</Typography>
                    <Typography variant="h4" sx={{
                        color: "text.main"
                    }}>advantage</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}