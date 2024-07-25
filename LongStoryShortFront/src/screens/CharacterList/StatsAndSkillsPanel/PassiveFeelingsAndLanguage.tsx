import {FC} from "react";
import {Box, Button, Grid, TextField, Typography} from "@mui/material";

type PassiveFeelingsAndLanguageProps = {
    perception: number,
    insight: number,
    analysis: number,
    otherSkillsAndLanguages: string
}

const PassiveFeelingLabel: FC = () => {
    return (
        <Box flex={1} display={"flex"} alignItems={"center"}>
            <Box border={1} borderColor={"border.main"} position={"absolute"} borderRadius={"7px"}
                 bgcolor={"background.paper"} zIndex={2}>
                <Typography mx={2} my={1} variant={"h5"} color={"text.main"}>
                    14
                </Typography>
            </Box>
            <Button fullWidth sx={{
                border: 1,
                borderColor: "border.main",
            }}>
                <Typography mx={2} variant={"subtitle1"} color={"text.main"}>
                    perception (Intelligence)
                </Typography>
            </Button>
        </Box>
    )
}

export const PassiveFeelingsAndLanguage: FC<PassiveFeelingsAndLanguageProps> = ({
                                                                                    perception,
                                                                                    analysis,
                                                                                    insight,
                                                                                    otherSkillsAndLanguages
                                                                                }: PassiveFeelingsAndLanguageProps) => {
    return (
        <Grid item container display={"flex"} direction={"column"} gap={"10px"}>
            <Box flex={1} display={"flex"} flexDirection={"column"} gap={"10px"}>
                <Typography variant={"h6"} color={"text.main"}>
                    Passive feelings
                </Typography>
                <PassiveFeelingLabel/>
                <PassiveFeelingLabel/>
                <PassiveFeelingLabel/>
            </Box>
            <Box flex={1}>
                <Typography variant={"h6"} color={"text.main"}>
                    Other skills and languages
                </Typography>
                <Box border={1} height={"140px"} width={"100%"} borderColor={"border.main"} px={1} sx={{
                    overflowY:"scroll"
                }}>
                    <TextField variant="standard" size={"small"} multiline fullWidth InputProps={{
                        disableUnderline: true,
                    }} sx={{
                        '& .MuiInputBase-root': {
                            color: 'text.main',
                        },
                        '&.input' : {
                            borderColor:"red"
                        }
                    }}>
<Button>hello</Button>
                    </TextField>
                </Box>
            </Box>
        </Grid>
    )
}