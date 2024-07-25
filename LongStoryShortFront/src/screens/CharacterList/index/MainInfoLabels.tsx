import {FC} from "react";
import {Box, Grid, LinearProgress, Typography} from "@mui/material";
import {CharacterIcon} from "./CharacterIcon.tsx";

type InfoLabelProps = {
    lvl: number,
    currentXp: number
}

type ExpProProps = {
    lvl: number,
    currentXp: number
}

const ExpProgress: FC<ExpProProps> = ({currentXp, lvl}: ExpProProps) => {
    return (
        <Box display={"flex"} flex={3} justifyContent={"flex-start"}>
            <Box display={"flex"} flex={1} align={"center"} direction={"row"}>
                <LinearProgress
                    variant="determinate"
                    value={currentXp * 100 / 300}
                    sx={{
                        border: 1,
                        backgroundColor: "secondary.main",
                        borderColor: "accent.light",
                        width: "100%",
                        height: "24px",
                        borderTopRightRadius: "20px",
                        borderBottomRightRadius: "20px"
                    }}/>
                <Box position={"absolute"}>
                    <Typography pl={1} variant="h6" position={"absolute"} color={"text.main"} top={"-3px"}>
                        {currentXp}/300
                    </Typography>
                </Box>
            </Box>
            <Box position={"relative"}>
                <Typography variant="h6" color={"text.main"} position={"absolute"} alignSelf={"flex-end"}
                            left={"-20px"} top={"-3px"}>
                    {lvl}
                </Typography>
            </Box>
        </Box>
    )
}

export const MainInfoLabels: FC<InfoLabelProps> = ({currentXp, lvl}: InfoLabelProps) => {
    return (
        <Grid item width={"100%"} height={"100%"} flex={2}>
            <Box display={"flex"} gap={"20px"}>
                <Box flex={1}>
                    <CharacterIcon/>
                </Box>
                <Box flex={5} display={"flex"} flexDirection={"column"}>
                    <Typography flex={2} fontWeight={"bold"} variant="h4" color={"text.main"}>
                        Клод жиллес
                    </Typography>
                    <Typography flex={2} variant="h5" color={"text.main"}>
                        человек — жрец домена порядка
                    </Typography>
                    <Box display={"flex"} flex={1} width={"90%"} flexDirection={"row"} gap={"5px"}>
                        <Box flex={1} border={1}
                             borderColor={"accent.light"}
                             backgroundColor={"accent.main"} sx={{
                            borderBottomLeftRadius: "20px",
                            borderTopLeftRadius: "20px"
                        }}>
                            <Typography align={"center"} color={"text.main"} fontWeight={"bold"}>
                                1 уровень
                            </Typography>
                        </Box>
                        <ExpProgress currentXp={currentXp} lvl={lvl}/>
                    </Box>
                </Box>
            </Box>
        </Grid>
    )
}