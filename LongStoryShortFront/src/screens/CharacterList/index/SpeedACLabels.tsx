import {FC} from "react";
import {Box, Grid} from "@mui/material";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import {StyledTextLabel} from "../styles/IndexStyled.ts";

type SpeedACLabelsProps = {
    ac: number,
    speed: number,
}

export const SpeedACLabels: FC<SpeedACLabelsProps> = ({ac, speed}: SpeedACLabelsProps) => {
    return (
        <Grid item container width={"45%"}>
            <Grid container height={"100%"} width={"100%"} justifyContent={"center"} spacing={2}>
                <Grid item>
                    <Box display={"flex"} position={"relative"}>
                        <ShieldOutlinedIcon sx={{
                            fontSize: "60px"
                        }}/>
                        <StyledTextLabel textAlign={"center"} position={"absolute"} top={"19px"} left={"21px"}
                                         variant="h3">
                            {ac}
                        </StyledTextLabel>
                    </Box>
                </Grid>
                <Grid item display={"flex"} mt={1} flexDirection={"column"} justifyItems={"start"}>
                    <StyledTextLabel variant="h2" align={"center"}>
                        {speed}
                    </StyledTextLabel>
                    <StyledTextLabel variant="h3" align={"center"}>
                        speed
                    </StyledTextLabel>
                </Grid>
                <Grid item display={"flex"} mt={1} flexDirection={"column"} justifyContent={"begin"}>
                    <StyledTextLabel variant="h2" align={"center"}>
                        {speed}
                    </StyledTextLabel>
                    <StyledTextLabel variant="h3" align={"center"}>
                        advantage
                    </StyledTextLabel>
                </Grid>

            </Grid>
        </Grid>
    )
}