import {FC} from "react";
import {Box, Button, Divider, Grid, Typography} from "@mui/material";
import {CheckThrowPanel} from "../../../assets/forms/CheckThrowPanel.tsx";
import {SaveThrowPanel} from "../../../assets/forms/SaveThrowPanel.tsx";

type CharacteristicsPanelProps = {
    name: string,
    value: number,
    professionalBonus: number
}

export const CharacteristicsPanel: FC<CharacteristicsPanelProps> = (props: CharacteristicsPanelProps) => {
    return (
        <Grid container display={"flex"} flexDirection={"column"} rowGap={"15px"}>
            <Box flex={1} display={"flex"} height={"50px"}>
                <Button disableRipple sx={{
                    flex:1,
                    "&:hover":{
                        bgcolor: "background.paper"
                    },
                        outline: "none !important"
                }}>
                    <Box display={"flex"} flex={1} justifyContent={"space-between"} flexDirection={"row"}>
                        <Typography variant="h4" color={"text.main"}>{props.name}</Typography>
                        <Divider flexItem orientation={"horizontal"} variant={"middle"} sx={{
                            flexGrow: "1",
                            alignSelf: "center",
                            borderColor: "border.main"
                        }}/>
                        <Typography variant="h4" color={"text.main"}>{props.value}</Typography>
                    </Box>
                </Button>
            </Box>
            <Box flex={1} display={"flex"} height={"50px"} width={"100%"} columnGap={"40px"}>
                <Box flex={9}>
                    <CheckThrowPanel value={3}/>
                </Box>
                <Box flex={10}>
                    <SaveThrowPanel value={3}/>
                </Box>
            </Box>
        </Grid>
    )
}